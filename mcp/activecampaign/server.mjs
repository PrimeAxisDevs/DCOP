#!/usr/bin/env node
// ActiveCampaign MCP server.
//
// Exposes ActiveCampaign v3 API operations as MCP tools over stdio so Claude
// (Claude Code, Claude Desktop, etc.) can read and manage contacts, campaigns,
// and lists.
//
// Configuration (environment variables, or a .env file at the repo root):
//   ACTIVECAMPAIGN_BASE_URL   e.g. https://your-account.api-us1.com
//   ACTIVECAMPAIGN_API_TOKEN  from Settings -> Developer in ActiveCampaign

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Minimal .env loader so the server works without extra dependencies.
function loadDotEnv() {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
  for (const candidate of [path.join(repoRoot, ".env"), path.resolve(".env")]) {
    try {
      for (const line of readFileSync(candidate, "utf8").split("\n")) {
        const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
        if (!match) continue;
        const [, key, rawValue] = match;
        if (process.env[key] !== undefined) continue;
        process.env[key] = rawValue.replace(/^(['"])(.*)\1$/, "$2");
      }
      return;
    } catch {
      // try next candidate
    }
  }
}

loadDotEnv();

const BASE_URL = process.env.ACTIVECAMPAIGN_BASE_URL?.replace(/\/+$/, "");
const API_TOKEN = process.env.ACTIVECAMPAIGN_API_TOKEN;

if (!BASE_URL || !API_TOKEN) {
  console.error(
    "Missing ActiveCampaign credentials. Set ACTIVECAMPAIGN_BASE_URL and " +
      "ACTIVECAMPAIGN_API_TOKEN in the environment or in a .env file at the repo root."
  );
  process.exit(1);
}

async function acRequest(method, endpoint, body) {
  const response = await fetch(`${BASE_URL}/api/3${endpoint}`, {
    method,
    headers: {
      "Api-Token": API_TOKEN,
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`ActiveCampaign API ${response.status} ${response.statusText}: ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

function jsonResult(data) {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}

function errorResult(error) {
  return { content: [{ type: "text", text: String(error.message ?? error) }], isError: true };
}

const server = new McpServer({ name: "activecampaign", version: "1.0.0" });

server.tool(
  "test_connection",
  "Verify the ActiveCampaign API credentials work by making a minimal request.",
  {},
  async () => {
    try {
      await acRequest("GET", "/contacts?limit=1");
      return jsonResult({ ok: true, account: BASE_URL });
    } catch (error) {
      return errorResult(error);
    }
  }
);

server.tool(
  "list_contacts",
  "List contacts in ActiveCampaign. Optionally filter by email or search string.",
  {
    email: z.string().optional().describe("Filter by exact email address"),
    search: z.string().optional().describe("Search contacts by name, email, or phone"),
    limit: z.number().int().min(1).max(100).optional().describe("Max results (default 20)"),
    offset: z.number().int().min(0).optional().describe("Pagination offset"),
  },
  async ({ email, search, limit, offset }) => {
    try {
      const params = new URLSearchParams();
      if (email) params.set("email", email);
      if (search) params.set("search", search);
      params.set("limit", String(limit ?? 20));
      if (offset) params.set("offset", String(offset));
      return jsonResult(await acRequest("GET", `/contacts?${params}`));
    } catch (error) {
      return errorResult(error);
    }
  }
);

server.tool(
  "create_contact",
  "Create a new contact in ActiveCampaign.",
  {
    email: z.string().email().describe("Contact email address (required)"),
    firstName: z.string().optional().describe("First name"),
    lastName: z.string().optional().describe("Last name"),
    phone: z.string().optional().describe("Phone number"),
  },
  async ({ email, firstName, lastName, phone }) => {
    try {
      const contact = { email };
      if (firstName) contact.firstName = firstName;
      if (lastName) contact.lastName = lastName;
      if (phone) contact.phone = phone;
      return jsonResult(await acRequest("POST", "/contacts", { contact }));
    } catch (error) {
      return errorResult(error);
    }
  }
);

server.tool(
  "list_campaigns",
  "List campaigns in ActiveCampaign.",
  {
    limit: z.number().int().min(1).max(100).optional().describe("Max results (default 20)"),
    offset: z.number().int().min(0).optional().describe("Pagination offset"),
  },
  async ({ limit, offset }) => {
    try {
      const params = new URLSearchParams({ limit: String(limit ?? 20) });
      if (offset) params.set("offset", String(offset));
      return jsonResult(await acRequest("GET", `/campaigns?${params}`));
    } catch (error) {
      return errorResult(error);
    }
  }
);

server.tool(
  "list_lists",
  "List all contact lists in ActiveCampaign.",
  {
    limit: z.number().int().min(1).max(100).optional().describe("Max results (default 20)"),
    offset: z.number().int().min(0).optional().describe("Pagination offset"),
  },
  async ({ limit, offset }) => {
    try {
      const params = new URLSearchParams({ limit: String(limit ?? 20) });
      if (offset) params.set("offset", String(offset));
      return jsonResult(await acRequest("GET", `/lists?${params}`));
    } catch (error) {
      return errorResult(error);
    }
  }
);

server.tool(
  "add_contact_to_list",
  "Subscribe an existing contact to a list.",
  {
    contactId: z.string().describe("The contact's ID"),
    listId: z.string().describe("The list's ID"),
  },
  async ({ contactId, listId }) => {
    try {
      return jsonResult(
        await acRequest("POST", "/contactLists", {
          contactList: { list: listId, contact: contactId, status: "1" },
        })
      );
    } catch (error) {
      return errorResult(error);
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("ActiveCampaign MCP server running on stdio");

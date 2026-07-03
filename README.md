# DCOP — ActiveCampaign Integration

Connects Claude to [ActiveCampaign](https://www.activecampaign.com/) via an
MCP (Model Context Protocol) server, plus a standalone bash CLI for quick
testing.

## Setup

1. Copy the env template and fill in your credentials (from ActiveCampaign
   **Settings → Developer**):

   ```bash
   cp .env.example .env
   # edit .env:
   #   ACTIVECAMPAIGN_BASE_URL=https://your-account.api-us1.com
   #   ACTIVECAMPAIGN_API_TOKEN=<your api token>
   ```

   `.env` is gitignored — never commit the real token. If a token has ever
   been shared in chat, email, or a commit, rotate it in ActiveCampaign.

2. Install the MCP server dependencies:

   ```bash
   cd mcp/activecampaign && npm install
   ```

## Connecting Claude

The repo ships a project-level [`.mcp.json`](.mcp.json), so **Claude Code**
picks up the `activecampaign` MCP server automatically when you open this
repo (approve it when prompted, or check with `claude mcp list`).

For **Claude Desktop**, add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "activecampaign": {
      "command": "node",
      "args": ["/absolute/path/to/DCOP/mcp/activecampaign/server.mjs"],
      "env": {
        "ACTIVECAMPAIGN_BASE_URL": "https://your-account.api-us1.com",
        "ACTIVECAMPAIGN_API_TOKEN": "your-api-token"
      }
    }
  }
}
```

### Available MCP tools

| Tool | Description |
| --- | --- |
| `test_connection` | Verify credentials with a minimal API call |
| `list_contacts` | List/search contacts (filter by email or search string) |
| `create_contact` | Create a contact (email, first/last name, phone) |
| `list_campaigns` | List campaigns |
| `list_lists` | List contact lists |
| `add_contact_to_list` | Subscribe a contact to a list |

## Bash CLI

The same operations are available from the shell (reads `.env` automatically):

```bash
./scripts/activecampaign.sh test
./scripts/activecampaign.sh list-contacts 10
./scripts/activecampaign.sh create-contact test@example.com Test Contact
./scripts/activecampaign.sh list-campaigns
./scripts/activecampaign.sh list-lists
```

## Note for Claude Code on the web (remote sandboxes)

Remote Claude Code environments route outbound traffic through a network
allowlist. If API calls fail with a proxy `403 CONNECT` error, add your
ActiveCampaign domain (e.g. `your-account.api-us1.com`) to the environment's
allowed domains in the environment's network settings, or use a network
policy that permits it. See
<https://code.claude.com/docs/en/claude-code-on-the-web>.

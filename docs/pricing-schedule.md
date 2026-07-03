# Green Racks — Pricing Schedule

Source of truth for sales, outreach, and agreements. Mirrors www.green-racks.com.au.
Last updated: 2026-07-03.

## Service Level Commitments (all services)

- **Response time:** 4-hour turnaround
- **Power availability:** 99.95%
- **Network/internet availability:** 99.9%

## 1. Managed WordPress Hosting

| Tier | Price | Specs | Traffic | Backups | Support |
|---|---|---|---|---|---|
| Starter | From $29/mo | 1 vCPU, 2 GB RAM, 20 GB NVMe | 50k/mo | 14-day retention | Email, AWST hours |
| Business | From $79/mo | 4 vCPU, 8 GB RAM, 80 GB NVMe | (up to tier limit) | Daily, 30-day retention | Phone + email, AWST hours |
| Enterprise | From $149/mo | 8 vCPU, 32 GB RAM, 200 GB NVMe | Up to 25 sites, 1M/mo | Snapshots, 90-day retention | Priority engineer + on-call escalation |

All plans: free migration, core/theme/plugin auto-updates with rollback, Wordfence
firewall + login-attempt limiting, Cloudflare edge filtering. Hosted in Osborne Park, Perth.

## 2. Colocation (Hardware Hosting)

| Tier | Price | Power | Port | Traffic | IPs | Cross-connects |
|---|---|---|---|---|---|---|
| 1U (shared rack) | $114/mo | 1A dual-feed | 100 Mbps | 1 TB | /29 v4 + /64 v6 | — |
| Quarter Rack (10U) | $574/mo | 10A dual-feed | 1 Gbps | 5 TB | /28 v4 + /64 v6 | 1 included |
| Half Rack (21U) | $1,034/mo | 20A dual-feed | 1 Gbps | 10 TB | /28 v4 + /64 v6 | 2 included |
| Full Rack (42U) | $1,724/mo | 32A dual-feed | 10 Gbps | 20 TB | /27 v4 + /48 v6 | 3 included |

Add-ons: extra cross-connect $150 setup + $5/mo (sub-metered); remote hands $207/hr
(15-min minimum, 24/7). Smart hands billed per 15 min on 1U.

## 3. Dedicated Servers

| Tier | Price | CPU | RAM | Storage | Network | Traffic |
|---|---|---|---|---|---|---|
| Standard | $129/mo | 8 cores (1× E5 v2) | DDR3 | SATA SSD | 10 GbE | 5 TB/mo |
| Performance | $199/mo | 16 cores (2× E5-2670 v2) | 192 GB ECC | 2 TB NVMe | 10 GbE, GPU-capable | 10 TB/mo |
| Memory-Optimised | $229/mo | 24 cores (2× E5 v2) | DDR3 | NVMe | 10 GbE | 20 TB/mo |

All: iDRAC + dual PSU. Optional managed add-ons (log retention, incident response).
Daily backup-to-rack option with custom retention. Provisioning: 1 business day
standard, 2–3 for custom (AWST).

## 4. AI Infrastructure

| Plan | Price | Hardware | Status |
|---|---|---|---|
| P40 Single + Host | $747/mo | 1× Tesla P40, root access, 10 GbE | Available |
| P40 Dual + Host | $1,322/mo | 2× Tesla P40, root access, 10 GbE | Available |
| L40S Single + Host | ~$2,530/mo | 1× L40S dedicated GPU node | Roadmap |
| H100 Single + Host | ~$6,670/mo | 1× H100 dedicated GPU node | Roadmap |

Roadmap items: contact for timeline; availability subject to demand.

## 5. Managed Servers

| Tier | Price | CPU | RAM | Storage | Network | Traffic |
|---|---|---|---|---|---|---|
| Standard | $632/mo | 16 cores Xeon/EPYC | DDR5 | 2×1 TB NVMe RAID1 | 10 GbE, iDRAC | 10 TB |
| Performance | $1,322/mo | 32 cores (2× CPU) | DDR5 | 4×2 TB NVMe RAID10 | 25 GbE, dual PSU | 20 TB |
| Memory-Optimised | $2,128/mo | 48 cores (2× CPU) | DDR5 | 4×4 TB NVMe RAID10 | 25 GbE, dual PSU | 40 TB |
| Compute-Optimised | $2,818/mo | 96 cores (2× EPYC) | DDR5 | 8×2 TB NVMe RAID10 | 2×25 GbE bonded, dual PSU | 50 TB |
| Custom | From $4,025/mo | Bespoke (multi-server, compliance) | — | — | — | Quoted in 48h |

All: OS patching + security updates, 24/7 monitoring with alerting, hardware SLA with
on-site spare parts replacement, backup target included, out-of-band iDRAC/iLO.

## 6. Managed Colocation

Two SLA classes over the same hardware brackets:

| Bracket | Hardware | NBD SLA | 4-Hour SLA |
|---|---|---|---|
| Entry | 1× CPU, ≤64 GB RAM, ≤4 TB, 1U | $209/mo | $289/mo |
| Mid | 2× CPU, ≤256 GB RAM, ≤16 TB, 1U/2U | $259/mo | $359/mo |
| High | 2× CPU, ≤768 GB RAM, ≤32 TB, 2U | $340/mo | $470/mo |
| Enterprise | 2× EPYC/top-bin Xeon, 1 TB+ RAM, 64 TB+, 2U/4U | $440/mo | $590/mo |

- NBD = next-business-day parts response. 4-hour tier: minimum contract term applies.
- All tiers: OS patching (monthly Windows, quarterly Linux kernel), hardware monitoring
  + alerting, quarterly firmware updates, physical response per SLA tier, remote config,
  backup destination integration, 4 hrs/mo remote hands beyond hardware events.

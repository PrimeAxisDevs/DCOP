# Green Racks — Service Agreement

> PandaDoc template source. Tokens in `{{double.braces}}` become PandaDoc merge
> fields when this is loaded via `templates_create` / `documents_create_from_markdown`.
> Sections marked **[REVIEW]** contain proposed terms James has not yet confirmed —
> review before first client use. Have the final version checked by an Australian
> commercial lawyer before relying on it.

---

**Service Agreement**

This Service Agreement ("Agreement") is entered into on **{{agreement.date}}** between:

**Green Racks Pty Ltd** (ABN {{greenracks.abn}}) of Osborne Park, Western Australia
("Green Racks", "we", "us"); and

**{{client.company}}** (ABN {{client.abn}}) of {{client.address}}, represented by
**{{client.name}}** ({{client.email}}) ("Client", "you").

## 1. Services

Green Racks will provide the following service(s) from the Commencement Date:

| Service | Plan / Tier | Monthly Fee (AUD, ex GST) |
|---|---|---|
| {{service.type}} | {{service.plan}} | ${{service.price}}/month |

Plan inclusions are as described in the Green Racks Pricing Schedule current at the
Commencement Date, a copy of which is attached at Schedule A.

## 2. Term and Commencement

- **Commencement Date:** {{agreement.start_date}}
- **Initial Term:** {{agreement.term}} months, then continuing month-to-month unless
  terminated under clause 8.
- Managed Colocation on the 4-Hour SLA tier carries a minimum contract term of
  {{agreement.min_term}} months.

## 3. Service Levels

Green Racks commits to the following service levels, measured monthly:

| Commitment | Target |
|---|---|
| Support response time | 4 hours from ticket lodgement |
| Power availability | 99.95% |
| Network availability | 99.9% |

**[REVIEW] Service credits.** Where availability in a calendar month falls below the
target, the Client may claim a credit against the following month's fees: 5% of the
monthly fee for each full 0.1% below target, capped at 50% of the monthly fee.
Credits must be claimed within 30 days and are the Client's sole remedy for
availability shortfalls. Scheduled maintenance (notified 72+ hours in advance) and
events outside Green Racks' reasonable control are excluded from availability
measurement.

## 4. Fees and Payment

- Fees are payable monthly in advance, invoiced to {{client.email}}.
- Payment terms: **[REVIEW]** 14 days from invoice date.
- Additional services (remote hands at $207/hr with a 15-minute minimum,
  cross-connects, overage) are invoiced in arrears at the rates in Schedule A.
- Fees may be adjusted with 30 days' written notice, no more than once per
  12-month period; the Client may terminate without penalty within that notice
  window if an increase exceeds 10%.

## 5. Client Responsibilities

- Keep account and contact details current, and secure any credentials issued.
- For colocation: supplied hardware must be rack-compatible, safe, and lawfully
  owned; Green Racks may refuse or de-energise equipment posing a safety risk.
- Comply with the Acceptable Use Policy at Schedule B **[REVIEW: attach or link]** —
  no unlawful content, spam, or activity that degrades service for others.

## 6. Data and Backups

- Backup inclusions and retention are as stated for the selected plan in Schedule A.
- The Client remains responsible for verifying restorability of its own data and for
  any backup regime beyond the plan's inclusions.
- On termination, Green Racks will make Client data or hardware available for
  collection/export for 14 days, after which it may be securely destroyed.

## 7. Liability

**[REVIEW]** To the maximum extent permitted by law (including the Australian
Consumer Law, whose non-excludable guarantees are not affected):

- Green Racks' total aggregate liability under this Agreement is capped at the fees
  paid by the Client in the 3 months preceding the event giving rise to the claim.
- Neither party is liable for indirect or consequential loss, loss of profit, or
  loss of data (except to the extent caused by a failure to provide contracted
  backup services).

## 8. Termination

- Either party may terminate at the end of the Initial Term, or month-to-month
  thereafter, with 30 days' written notice.
- Either party may terminate immediately for a material breach unremedied 14 days
  after written notice, or on the other party's insolvency.
- On termination for the Client's unremedied breach during the Initial Term, the
  remaining fees for the Initial Term become payable. **[REVIEW]**

## 9. General

- This Agreement is governed by the laws of Western Australia; the parties submit
  to the jurisdiction of its courts.
- Neither party is liable for delay caused by events beyond its reasonable control.
- This Agreement (with its Schedules) is the entire agreement and supersedes prior
  discussions. Variations must be in writing and signed by both parties.

## Signatures

| Green Racks Pty Ltd | {{client.company}} |
|---|---|
| Signature: {{signature.greenracks}} | Signature: {{signature.client}} |
| Name: James Newcombe | Name: {{client.name}} |
| Title: Director | Title: {{client.title}} |
| Date: {{signature.date.greenracks}} | Date: {{signature.date.client}} |

---

**Schedule A — Pricing Schedule** (attach `docs/pricing-schedule.md` current version)

**Schedule B — Acceptable Use Policy** **[REVIEW: to be drafted]**

#!/usr/bin/env bash
# ActiveCampaign API CLI wrapper.
#
# Usage:
#   ./scripts/activecampaign.sh test
#   ./scripts/activecampaign.sh list-contacts [limit]
#   ./scripts/activecampaign.sh create-contact <email> [firstName] [lastName] [phone]
#   ./scripts/activecampaign.sh list-campaigns
#   ./scripts/activecampaign.sh list-lists
#
# Credentials are read from the environment or a .env file in the repo root:
#   ACTIVECAMPAIGN_BASE_URL   e.g. https://your-account.api-us1.com
#   ACTIVECAMPAIGN_API_TOKEN  from Settings -> Developer in ActiveCampaign
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ -f "$REPO_ROOT/.env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source "$REPO_ROOT/.env"
  set +a
fi

require_credentials() {
  : "${ACTIVECAMPAIGN_BASE_URL:?Set ACTIVECAMPAIGN_BASE_URL (or add it to .env)}"
  : "${ACTIVECAMPAIGN_API_TOKEN:?Set ACTIVECAMPAIGN_API_TOKEN (or add it to .env)}"
  BASE_URL="${ACTIVECAMPAIGN_BASE_URL%/}/api/3"
}

ac_get() {
  curl -sS --fail-with-body -X GET "$BASE_URL$1" \
    -H "Api-Token: $ACTIVECAMPAIGN_API_TOKEN" \
    -H "Content-Type: application/json"
}

ac_post() {
  curl -sS --fail-with-body -X POST "$BASE_URL$1" \
    -H "Api-Token: $ACTIVECAMPAIGN_API_TOKEN" \
    -H "Content-Type: application/json" \
    -d "$2"
}

pretty() {
  if command -v jq >/dev/null 2>&1; then jq .; else cat; fi
}

cmd="${1:-help}"

if [[ "$cmd" != "help" ]]; then
  require_credentials
fi

case "$cmd" in
  test)
    ac_get "/contacts?limit=1" >/dev/null \
      && echo "OK: connected to $ACTIVECAMPAIGN_BASE_URL"
    ;;
  list-contacts)
    limit="${2:-20}"
    ac_get "/contacts?limit=$limit" | pretty
    ;;
  create-contact)
    email="${2:?Usage: create-contact <email> [firstName] [lastName] [phone]}"
    first="${3:-}"
    last="${4:-}"
    phone="${5:-}"
    payload=$(jq -n \
      --arg email "$email" --arg first "$first" --arg last "$last" --arg phone "$phone" \
      '{contact: {email: $email, firstName: $first, lastName: $last, phone: $phone}}')
    ac_post "/contacts" "$payload" | pretty
    ;;
  list-campaigns)
    ac_get "/campaigns" | pretty
    ;;
  list-lists)
    ac_get "/lists" | pretty
    ;;
  help|*)
    grep '^#   ' "$0" | sed 's/^#   //'
    ;;
esac

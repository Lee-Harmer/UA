#!/bin/bash
# Downloads all property images from the old site into public/
# Run once while the old site is still up.

set -euo pipefail

DEST="public"
BASE_URL="https://umhlangaaccommodation.co.za"

# Extract every unique image URL from the data files
URLS=$(grep -ohE 'https://umhlangaaccommodation\.co\.za/wp-content/uploads/[^"'"'"' ]+' \
  lib/properties.ts lib/journal.ts | sort -u)

TOTAL=$(echo "$URLS" | wc -l | tr -d ' ')
COUNT=0
FAILED=0

echo "Downloading $TOTAL images..."

while IFS= read -r url; do
  COUNT=$((COUNT + 1))
  # Strip the domain to get the local path
  LOCAL_PATH="$DEST${url#$BASE_URL}"
  LOCAL_DIR=$(dirname "$LOCAL_PATH")

  if [ -f "$LOCAL_PATH" ]; then
    echo "[$COUNT/$TOTAL] Skipping (exists): $LOCAL_PATH"
    continue
  fi

  mkdir -p "$LOCAL_DIR"

  if curl -sSf --retry 3 --retry-delay 2 -o "$LOCAL_PATH" "$url"; then
    echo "[$COUNT/$TOTAL] OK: $LOCAL_PATH"
  else
    echo "[$COUNT/$TOTAL] FAILED: $url"
    FAILED=$((FAILED + 1))
    rm -f "$LOCAL_PATH"
  fi
done <<< "$URLS"

echo ""
echo "Done. $((TOTAL - FAILED)) downloaded, $FAILED failed."

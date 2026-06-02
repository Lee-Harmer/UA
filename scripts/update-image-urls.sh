#!/bin/bash
# After images are downloaded, replace external URLs with local paths in data files.
# Safe to re-run — only affects lines that still contain the old domain.

set -euo pipefail

OLD="https://umhlangaaccommodation.co.za"

for file in lib/properties.ts lib/journal.ts; do
  if grep -q "$OLD" "$file"; then
    sed -i '' "s|$OLD||g" "$file"
    echo "Updated: $file"
  else
    echo "Already clean: $file"
  fi
done

echo "Done. Image URLs now point to local /wp-content/uploads/..."

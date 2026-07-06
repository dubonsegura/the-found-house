# The Found House Company - Release 1.1 Master

Prepared by: Atlas

## Purpose
This is the clean master deployment package for Hostinger and GitHub.

## What this package fixes
- Uses the clean GitHub backup as the master source.
- Removes duplicate/orphaned homepage sections.
- Keeps Continuum integrated into the Featured Find / Curator's Selection area.
- Fixes the hero spacing overlap.
- Keeps the correct email: hello@foundhouseco.com.
- Keeps a clean website folder structure.

## Hostinger Instructions
1. Back up current Hostinger `public_html`.
2. In Hostinger File Manager, open `public_html`.
3. Delete the existing contents inside `public_html`.
4. Upload `found-houseco-release-1.1-master.zip`.
5. Extract it directly inside `public_html`.
6. Confirm these files are directly inside `public_html`:
   - index.html
   - continuum.html
   - collections.html
   - contact.html
   - philosophy.html
   - journal.html
   - brand-kit.html
   - css/styles.css
   - js/app.js
7. Visit https://www.foundhouseco.com/
8. Hard refresh the browser.

## GitHub Instructions
Use this package as the new master baseline.

Recommended commit message:
Release 1.1 clean master deployment

## Important
After this release, future updates should always start from this clean master package.

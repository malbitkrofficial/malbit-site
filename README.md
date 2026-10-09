# Malbit official site — Beige / October 9, 2026

Static GitHub Pages landing page rebuilt to match the *actual* Malbit Windows desktop design rather than a fictional AI-generated interface.

## Grounding

Source: `Malbit-source-20261009_070256.zip`.

- `ui/theme/AppPalette.qml` Beige palette: `#efe7da` background, `#f5eadb` panel, `#fffaf2` panelSoft, `#2f6f73` accent, `#252018` text, `#d2bea4` border.
- `ui/theme/UiMetrics.qml`: 8/10/12/14/16/18px radius and spacing system.
- `docs/DESIGN.md`: practical workspace hierarchy, avoid decorative nested cards, semantics-first accents.
- `ui/assets/tutorial/main_overview_ko.png`: included app UI reference image, optimized to WebP for the site. **The source contains a tutorial visual, not necessarily a screenshot of the latest running build.** Disclosed accordingly on the site.
- `ui/assets/branding/malbit_app_icon.png`: original app icon, resized for web only.

No invented customer testimonials, model benchmarks, download links, live product functionality, or false corporate claims.

## Deploy onto existing GitHub Pages repository

Repository: https://github.com/malbitkrofficial/malbit-site

1. Unzip this archive locally. **Upload the files INSIDE this folder to repository root**. Keep folder hierarchy under `assets/`.
2. Existing `index.html`, `styles.css`, `script.js`, etc. should be overwritten with same-named replacements. Remove obsolete mockup assets from earlier versions only if known unused.
3. Keep `CNAME` exactly `malbit.kr`. Do not delete it. `.nojekyll` remains an empty file.
4. Commit the changes to the existing `main` branch. GitHub Pages redeploys automatically; no new repository necessary.
5. Refresh https://malbit.kr using a hard refresh if browser cache shows the previous site.

**Do not change Gabia DNS for this redesign.** The existing GitHub Pages A/CNAME and ImprovMX MX/SPF email records should be preserved.

## Contents

- `index.html` — accessible, responsive landing page
- `styles.css` — implementation grounded in Malbit's Beige UI palette
- `script.js` — Korean / English copy switch (no external dependencies)
- `assets/malbit-workspace.webp` — source-provided tutorial UI screenshot optimized for web
- `assets/malbit-app-icon.png` — source-provided branding icon
- `assets/favicon.png` — source-provided branding icon resize
- `assets/malbit-wordmark.png` — source-provided logo crop, available for future revisions
- `CNAME` — current custom domain
- `.nojekyll` — static site deployment behavior

## Verify

- GitHub Pages Settings should still show `malbit.kr`; HTTPS remains enabled once certificate is ready.
- `https://malbit.kr/assets/malbit-workspace.webp` should load directly.
- Test KO/EN switch and `mailto:contact@malbit.kr`.
- Mobile users can horizontally scroll the actual desktop screenshot rather than see an invented mobile dashboard.

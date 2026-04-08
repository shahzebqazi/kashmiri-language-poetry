# Gulrez (کشمیری زبان و شاعری)

Static site: **SvelteKit** + `@sveltejs/adapter-static`. `paths.base` is `/kashmiri-language-poetry` for GitHub Pages project URLs. **`paths.relative: false`** emits root-relative `/kashmiri-language-poetry/_app/…` URLs so JS/CSS load whether or not the browser adds a trailing slash to the path.

```sh
npm install
npm run dev -- --open   # visit /kashmiri-language-poetry/ locally
npm run build           # output in ./build
```

Deploy the **contents** of `build/` to Pages, or use `.github/workflows/deploy-pages.yml` with **Settings → Pages → GitHub Actions**.

Legacy HTML lives under `legacy/` for reference.

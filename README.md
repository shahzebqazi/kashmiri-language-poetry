# Gulrez (کشمیری زبان و شاعری)

Static site: **SvelteKit** + `@sveltejs/adapter-static`. `paths.base` is `/kashmiri-language-poetry` for GitHub Pages project URLs.

```sh
npm install
npm run dev -- --open   # visit /kashmiri-language-poetry/ locally
npm run build           # output in ./build
```

Deploy the **contents** of `build/` to Pages, or use `.github/workflows/deploy-pages.yml` with **Settings → Pages → GitHub Actions**.

Legacy HTML lives under `legacy/` for reference.

# Tom Schwantje

Static academic website for Tom Schwantje, built with Next.js and published
with GitHub Pages.

## Local preview

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Publish

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the
site whenever the `main` branch is pushed to GitHub.

In the GitHub repository settings, choose **GitHub Actions** as the Pages source.

## Files

The CV, public paper drafts, appendix, portrait, and website assets are stored
under `public/`.

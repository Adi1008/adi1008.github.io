# adi1008.github.io

Personal academic website of Aditya Shah, built with [Nim](https://github.com/ibelick/nim)
(Next.js 15 + Tailwind CSS v4 + Motion-Primitives) and deployed to GitHub Pages
via GitHub Actions.

## Development

```bash
npm install
npm run dev    # local dev server at http://localhost:3000
npm run build  # static export to ./out
```

## Structure

- `app/page.tsx` — homepage (intro, research, publications, teaching/outreach, blog, contact)
- `app/data.ts` — publications, blog post list, social links
- `app/blog/<slug>/page.mdx` — blog posts (MDX with KaTeX math via remark-math/rehype-katex)
- `components/sketches.tsx` — hand-drawn margin illustrations shown on wide screens
- `public/files/` — CV, course evals, Science Olympiad exam PDFs, `exams.json`, `quotes.json`
- `public/images/` — photos and site images

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages.

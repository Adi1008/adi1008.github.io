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

## How to edit the site

Run `npm run dev` and open http://localhost:3000 — every file save hot-reloads
in the browser. When you're happy, commit and push to `main`; GitHub Actions
deploys automatically in ~2 minutes. (Don't run `npm run build` while the dev
server is running — they share `.next/` and the dev server will break. Stop it
first, or just let CI do the building.)

### Add a blog post

1. Create `app/blog/(posts)/<your-slug>/page.mdx`. The URL will be
   `/blog/<your-slug>/`. Start from an existing post as a template — keep the
   `export const metadata = {...}` block (page title + description), the
   `# Heading`, and the date line. Write normal Markdown below; math works
   with `$inline$` and `$$display$$` (KaTeX), footnotes with `[^1]`.
2. Add an entry to `BLOG_POSTS` in `app/data.ts` (title, description, date,
   link). This list drives the /blog index and the sitemap.

### Add a page

Create `app/<name>/page.tsx` — it becomes `/<name>/`. Copy an existing page
(e.g. `app/research/page.tsx`) for the structure: `metadata` export,
`<Stagger>`/`<Item>` for the entrance animation, `LINK_CLASS` for links.
To put it in the navigation bar, add it to `NAV_LINKS` in `app/header.tsx`.

### Everything else

- **Publications**: add an entry to `PUBLICATIONS` in `app/data.ts`.
- **Exams**: add entries to `public/files/exams.json` and drop the PDFs in
  `public/files/scioly/past-exams/`. Each season, update `PRIORITY_EVENTS` in
  `components/exam-browser.tsx` and the season line in `app/scioly/page.tsx`.
- **Student quotes**: `public/files/quotes.json`.
- **CV**: replace `public/files/AdityaShah_CV.pdf`.
- **Images**: put them in `public/images/` and reference as `/images/...`.
- **Link style**: `LINK_CLASS` in `lib/utils.ts` (one place, site-wide).
- **Margin illustrations** (currently unused): `components/sketches.tsx`.

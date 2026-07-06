# How to edit the site

Run `npm run dev` and open http://localhost:3000 — every file save hot-reloads
in the browser. When you're happy, commit and push to `main`; GitHub Actions
deploys automatically in ~2 minutes. (Don't run `npm run build` while the dev
server is running — they share `.next/` and the dev server will break. Stop it
first, or just let CI do the building.)

## Add a blog post

1. Create `app/blog/(posts)/<your-slug>/page.mdx`. The URL will be
   `/blog/<your-slug>/`. Start from an existing post as a template — keep the
   `export const metadata = {...}` block (page title + description), the
   `# Heading`, and the date line. Write normal Markdown below; math works
   with `$inline$` and `$$display$$` (KaTeX), footnotes with `[^1]`.
2. Add an entry to `BLOG_POSTS` in `app/data.ts` (title, description, date,
   link). This list drives the /blog index and the sitemap.

## Add a page

Two options:

- **Markdown page** (easiest): copy the `app/research/` folder — `page.mdx`
  holds the content as plain Markdown (with a `metadata` export at the top),
  and `layout.tsx` provides the typography and entrance animation.
- **Custom page**: copy a TSX page like `app/teaching/page.tsx` for the
  structure: `metadata` export, `<Stagger>`/`<Item>` for the entrance
  animation, `LINK_CLASS` for links.

Either way the folder name becomes the URL (`app/<name>/` → `/<name>/`). To
put the page in the navigation bar, add it to `NAV_LINKS` in `app/header.tsx`
(the Science Olympiad dropdown items live in `SCIOLY_MENU` in the same file).

## Everything else

- **Publications**: add an entry to `PUBLICATIONS` in `app/data.ts`.
- **Exams**: add entries to `public/files/exams.json` and drop the PDFs in
  `public/files/scioly/past-exams/`. Each season, update `PRIORITY_EVENTS` in
  `components/exam-browser.tsx` and the season line in `app/scioly/page.tsx`.
- **Student quotes**: `public/files/quotes.json`.
- **CV**: replace `public/files/AdityaShah_CV.pdf`.
- **Images**: put them in `public/images/` and reference as `/images/...`.
- **Link style**: `LINK_CLASS` in `lib/utils.ts` (one place, site-wide).
- **Line spacing**: body text is set in `app/globals.css` (the
  `line-height: 1.45` rule); blog/research prose uses
  `prose-p:leading-[1.55]` in their `layout.tsx` files.
- **Margin illustrations** (currently unused): `components/sketches.tsx`.

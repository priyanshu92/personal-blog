# AGENTS.md

Agent instructions when working in this project.

## Scope

### Applies to all files (`**`)

## Coding Standards for Personal Blog Project

### 1. General Principles

- Use TypeScript for all application and component code.
- Follow Prettier formatting: no semicolons, single quotes, 2 spaces per indent, trailing commas where valid, and bracket spacing.
- Adhere to ESLint rules as configured; fix lint errors before committing.
- Use PascalCase for React components, camelCase for variables/functions, and kebab-case for folders.

### 2. Project Structure

- Pages/routes go under `app/` using Next.js App Router conventions.
- Reusable UI components go under `components/`.
- Layouts go under `layouts/`.
- Static data (site metadata, project data, author info, etc.) goes under `data/`.
- Use Tailwind CSS for styling; custom styles go under `css/` (e.g., `prism.css`).

### 3. Styling

- Prefer Tailwind utility classes; avoid inline styles unless absolutely necessary.
- Configure theme colors in `tailwind.config.js` with Tailwind palettes.
- Use Tailwind Typography (`prose`, `prose-invert`) for markdown/MDX content.
- Modify `css/prism.css` for code block theming.

### 4. Content & MDX

- Store blog posts in `data/blog/` with frontmatter metadata (title, date, tags, summary, etc.).
- Define document types and computed fields in `contentlayer.config.ts`.
- Store images in `public/static/images/` and reference with absolute paths starting at `/static/images/`.

### 5. Analytics & Comments

- Configure analytics providers in `data/siteMetadata.js`; enable only one provider at a time.
- Use the comments provider configured in `data/siteMetadata.js` (default: Giscus).

### 6. Search

- Use Kbar or Algolia as configured in `data/siteMetadata.js`.
- For Kbar, ensure `public/search.json` is generated and up to date.

### 7. Accessibility & SEO

- Use semantic HTML and ARIA labels where appropriate (e.g., `aria-label` for search inputs).
- Set page-level metadata with the Next.js Metadata API (see app SEO configuration).

### 8. Security

- Update CSP in `next.config.js` to allow only required domains.
- Store sensitive keys in `.env` files; never commit secrets.

### 9. Commit & PR Guidelines

- Write clear, descriptive commit messages.
- Ensure checks pass (lint, type-check, build) before requesting review.

### 10. Scripts & Automation

- Use `scripts/rss.mjs` to generate RSS feeds after build.
- Use `scripts/postbuild.mjs` for post-build automation.

---

### Applies to MDX files (`**/*.mdx`)

When asked to summarize a document:

1. Read the entire document to understand its content and context.
2. Identify the main points and essential details.
3. Write a concise summary in a single sentence that captures the essence without unnecessary detail.

---
applyTo: '**'
---

# Coding Standards for Personal Blog Project

## 1. General Principles
- **Use TypeScript** for all application and component code.
- **Follow Prettier formatting**: No semicolons, single quotes, 2 spaces per indent, trailing commas where valid, and bracket spacing.
- **Linting**: Adhere to ESLint rules as configured in . Fix all lint errors before committing.
- **File Naming**: Use PascalCase for React components, camelCase for variables/functions, and kebab-case for folders.

## 2. Project Structure
- **Pages**: All route files go under the  directory, using Next.js App Router conventions.
- **Components**: Place all reusable UI components in the  directory.
- **Layouts**: Use the  directory for page and post layouts.
- **Data**: Store static data (site metadata, project data, author info, etc.) in the  directory.
- **Styles**: Use Tailwind CSS for styling. Custom styles go in  (e.g., `prism.css` for code blocks).

## 3. Styling
- **Tailwind CSS**: Use utility classes for all styling. Do not use inline styles unless absolutely necessary.
- **Theme Colors**: Configure primary and gray colors in `tailwind.config.js` using Tailwind’s color palette. The `primary` color should be an object with keys 50–900.
- **Typography**: Use Tailwind Typography plugin for markdown/MDX content. Use `prose` and `prose-invert` for light/dark mode.
- **Custom Code Block Styles**: Modify  for code block theming.

## 4. Content & MDX
- **MDX Files**: Store blog posts in . Use frontmatter for metadata (title, date, tags, summary, etc.).
- **Contentlayer**: Define document types and computed fields in . All content is type-checked.
- **Images**: Place images in . Reference them with absolute paths starting from `/static/images/`.

## 5. Analytics & Comments
- **Analytics**: Configure analytics providers in . Only enable one provider at a time.
- **Comments**: Use the provider specified in `siteMetadata.js` (default: Giscus). Set up environment variables as needed.

## 6. Search
- **Provider**: Use Kbar or Algolia as configured in `siteMetadata.js`. For Kbar, ensure `search.json` is generated and up to date.

## 7. Accessibility & SEO
- **Accessibility**: Use semantic HTML and ARIA labels where appropriate (e.g., `aria-label` on search inputs).
- **SEO**: Set metadata in . Use the Next.js Metadata API for page-level SEO.

## 8. Security
- **CSP**: Update  to allow only required domains in the Content Security Policy.
- **Environment Variables**: Store sensitive keys in `.env` files. Never commit secrets to the repository.

## 9. Commit & PR Guidelines
- **Commits**: Write clear, descriptive commit messages.
- **Pull Requests**: Ensure all checks pass (lint, type-check, build) before requesting review.

## 10. Scripts & Automation
- **RSS Generation**: Use the script in  to generate RSS feeds after build.
- **Post-Build**: Use  for post-build automation.

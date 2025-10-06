# Portfolio Website Roadmap

These steps walk through building a personal portfolio inspired by [andrewschmidt.net](https://www.andrewschmidt.net/). Adapt the content, visuals, and tooling to fit your own story.

## 1. Discover and Plan
1. **Audit the reference site**
   * Note the overall sections: hero intro, highlighted projects, testimonials, writing, and contact.
   * Record layout patterns (two-column hero, project cards, call-to-action buttons) and interaction details (hover effects, smooth scrolling, animated transitions).
2. **Define your content**
   * Gather your professional summary, featured projects, testimonials, resume link, and social profiles.
   * Draft copy for each section, including project descriptions with technologies and outcomes.
3. **Sketch your information architecture**
   * Create a sitemap (e.g., Home, Projects, About, Contact, Blog).
   * Wireframe desktop and mobile layouts inspired by the reference while keeping your branding distinct.

## 2. Choose the Tech Stack
1. **Framework options**
   * Static HTML/CSS with small sprinkles of vanilla JS.
   * Static-site generators (Astro, Eleventy) for templating + Markdown content.
   * React-based frameworks (Next.js) if you expect dynamic content or CMS integration.
2. **Styling strategy**
   * Utility-first CSS (Tailwind) for rapid layout building.
   * Component libraries (Chakra UI) for pre-built sections.
   * Custom SCSS/CSS Modules for full control.
3. **Tooling**
   * Initialize with `npm create` (or `pnpm`, `yarn`) for the chosen framework.
   * Add TypeScript if you want type safety.
   * Configure Prettier/ESLint for consistent formatting.

## 3. Set Up the Project
1. **Initialize the repository**
   * Run `git init` (already done here) and configure `.gitignore` based on the stack.
2. **Scaffold pages**
   * Create layout components: navigation, footer, section wrapper.
   * Build reusable components for project cards, testimonial blocks, article previews.
3. **Add global styling**
   * Implement a design system: colors, typography, spacing, button styles.
   * Configure responsive breakpoints that match your wireframes.

## 4. Implement Core Sections
1. **Hero section**
   * Two-column layout with portrait/photo on one side and headline, intro copy, and primary call-to-action on the other.
   * Include quick links (email, social icons) and subtle entrance animation.
2. **Projects showcase**
   * Use cards with screenshots, tech stack tags, and outcome blurbs.
   * Provide prominent buttons for live demo and case study.
3. **Testimonials / Social proof**
   * Add quotes from colleagues or clients with names, roles, and avatars.
4. **Writing or blog teasers**
   * Display latest articles with dates and short excerpts.
5. **Contact / Call to action**
   * Provide contact form or mailto link, plus secondary CTA (download resume).

## 5. Enhance UX and Visual Polish
1. **Animation & interaction**
   * Apply scroll-based reveal animations (Framer Motion, GSAP, or CSS transitions).
   * Add hover states on buttons/cards and smooth scroll for navigation links.
2. **Performance optimization**
   * Compress images, leverage responsive `<img>`/`<picture>` tags.
   * Use lazy loading for below-the-fold sections.
3. **Accessibility**
   * Ensure semantic HTML structure, focus states, and sufficient color contrast.
   * Test with keyboard navigation and screen readers (VoiceOver/NVDA).

## 6. Add Supporting Pages and Content
1. **About / Resume**
   * Provide detailed biography, skills matrix, and timeline of experience.
2. **Project case studies**
   * Create dedicated pages for flagship projects with problem/solution breakdowns, metrics, and visuals.
3. **Blog / Writing**
   * Connect to a CMS (Contentful, Sanity) or use Markdown-based workflow.

## 7. Test Thoroughly
1. **Responsive testing**
   * Verify layouts on mobile, tablet, and large desktop viewports.
2. **Cross-browser checks**
   * Test in Chrome, Safari, Firefox, and Edge.
3. **Performance audits**
   * Run Lighthouse for performance, accessibility, best practices, and SEO scores.
4. **Content review**
   * Proofread all copy; ensure external links open correctly and include `rel="noopener"`.

## 8. Deploy and Maintain
1. **Deployment options**
   * Vercel (great for Next.js), Netlify (static/SSG), GitHub Pages (static sites), Cloudflare Pages.
2. **Continuous integration**
   * Set up automated builds/tests on push via GitHub Actions or provider defaults.
3. **Custom domain**
   * Purchase a domain, configure DNS (A/AAAA/CNAME records) to your hosting platform.
4. **Analytics & monitoring**
   * Add Google Analytics, Plausible, or Splitbee for traffic insights.
   * Configure uptime monitoring (e.g., UptimeRobot).
5. **Iterate**
   * Schedule regular updates for new projects, articles, and design improvements.

## 9. Resources to Explore Next
* Design inspiration: [Dribbble](https://dribbble.com/), [Behance](https://www.behance.net/)
* CSS animation libraries: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
* Accessibility checklists: [A11Y Project](https://www.a11yproject.com/checklist/)
* Web performance: [web.dev](https://web.dev/)

Use this checklist as a living document—update it as you refine your goals and tooling.

## Running the Current Static Prototype

The repository currently contains a static prototype (`index.html`, `styles.css`, and `scripts/main.js`). You can preview it in two ways:

1. **Open the file directly**
   * Double-click `index.html` in your file manager, or run `open index.html` (macOS) / `xdg-open index.html` (Linux) / `start index.html` (Windows) to launch it in your default browser.

2. **Serve it over a local HTTP server** (recommended for testing fetch requests, relative paths, etc.)
   * From the project root, run one of the following commands and visit the indicated URL:
     * Python 3: `python -m http.server 8000`
     * Node.js: `npx serve .`
   * Open <http://localhost:8000> (or the port shown in the terminal) in your browser.

# AGENTS.md — MingalarMate

## 1. Project Identity

**Project name:** MingalarMate  
**Project type:** Multilingual-ready information website (English-first for Version 1)  
**Primary audience:** Myanmar students and other international students who are studying in, preparing to study in, or planning to live in Taiwan.  
**Current delivery target:** A small, complete, responsive five-page website published with GitHub Pages.

MingalarMate is an independent student information project. It is not an official government, university, immigration, or employment website. Never imply that it is officially affiliated with any institution.

## 2. Project Purpose and Goals

Help international students understand practical aspects of studying and living in Taiwan through clear, organized, beginner-friendly information.

Version 1 must:
- Introduce the project and explain who it helps.
- Present useful starter information about studying in Taiwan.
- Present useful starter information about everyday life in Taiwan.
- Present responsible, carefully sourced information about part-time work.
- Explain the project and its future direction.
- Provide consistent navigation between all five pages.
- Work on desktop and mobile browsers.
- Be deployable as a static website using GitHub Pages.

Do not build a backend, user accounts, database, forum, chatbot, payment system, or admin dashboard in Version 1. These may be considered in a later project phase, but do not add them unless explicitly requested.

## 3. Required Technology and Constraints

Use only:
- Semantic HTML5.
- CSS3.
- Vanilla JavaScript.

Project constraints:
- No frontend framework or build step.
- No server-side code.
- No API keys, passwords, private tokens, or secrets in the repository.
- No required paid service.
- The website must work as a static site on GitHub Pages.
- Prefer locally stored assets. If an external image or resource is used, make sure its source and usage rights are appropriate and that the page remains usable if it fails to load.
- Do not introduce dependencies without explaining why and asking first.

## 4. Required Website Pages

Create exactly these five initial pages:

1. `index.html` — Home
   - Introduce MingalarMate.
   - Explain the audience and main topics.
   - Provide clear links to the four information pages.
   - Include a welcoming hero section and useful calls to action.

2. `pages/study-in-taiwan.html` — Study in Taiwan
   - Provide a beginner-friendly overview of researching universities, admission preparation, scholarships, tuition planning, and preparing documents.
   - Do not invent admission requirements, deadlines, scholarship amounts, or university details.
   - Link to official sources when presenting specific or changeable facts.

3. `pages/living-in-taiwan.html` — Living in Taiwan
   - Cover practical starter topics such as housing, transportation, food, mobile/SIM services, and daily-life preparation.
   - Distinguish general tips from official rules.
   - Do not invent prices, opening hours, legal requirements, or service policies.

4. `pages/part-time-jobs.html` — Part-time Jobs
   - Explain how students can prepare to search for work and evaluate job information.
   - Clearly warn readers to verify current work authorization requirements and restrictions through official sources before working.
   - Do not give individualized legal or immigration advice.
   - Do not promise that a student is eligible to work.

5. `pages/about.html` — About
   - Explain the project mission, intended audience, current scope, and future possibilities.
   - State that this is an independent information project and not an official institution.

Do not create extra pages in Version 1 unless explicitly requested.

## 5. File and Folder Structure

Keep the project organized as follows:

```text
MingalarMate/
├── AGENTS.md
├── README.md
├── index.html
├── pages/
│   ├── study-in-taiwan.html
│   ├── living-in-taiwan.html
│   ├── part-time-jobs.html
│   └── about.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
```

Rules:
- Put the homepage at the project root as `index.html`.
- Put all other HTML pages inside `pages/`.
- Put shared styles in `assets/css/style.css`.
- Put shared JavaScript in `assets/js/main.js`.
- Put local images in `assets/images/`.
- Use lowercase filenames and hyphens between words.
- Do not create duplicate stylesheets or scripts for individual pages unless a real requirement is explained.
- Update `README.md` with the project description, local preview instructions, page list, and deployment notes.

## 6. Design System and User Experience

Create a welcoming, trustworthy, modern student-guide design.

Visual direction:
- Friendly and approachable, but not childish.
- Clean layout with generous whitespace.
- Clear visual hierarchy and readable text.
- Consistent cards, buttons, headings, spacing, and navigation.
- Use a restrained color palette inspired by Taiwan and warm hospitality. Define the exact colors as CSS custom properties in `:root` and reuse them consistently.
- Use a readable system font stack. Do not require a paid font.
- Use subtle hover and focus states. Avoid excessive animation, gradients, shadows, or decorative effects.

Responsive behavior:
- Support narrow mobile screens, tablets, and desktop screens.
- Avoid horizontal scrolling.
- Ensure navigation remains usable on mobile.
- Images must scale within their containers.
- Text must remain readable without zooming.

Accessibility:
- Use semantic landmarks such as `header`, `nav`, `main`, and `footer`.
- Use logical heading order.
- Give meaningful images descriptive `alt` text; use empty alt text for purely decorative images.
- Ensure links and buttons have clear labels.
- Provide visible keyboard focus indicators.
- Maintain sufficient text/background contrast.
- Do not use color alone to communicate meaning.

## 7. Shared Page Layout and Navigation

All five pages must share a consistent:
- Header and site identity.
- Main navigation.
- Content width and spacing system.
- Footer.
- Typography and color system.

Navigation labels should be:
- Home
- Study in Taiwan
- Living in Taiwan
- Part-time Jobs
- About

Use correct relative paths:
- From `index.html`, link to `pages/study-in-taiwan.html`, `pages/living-in-taiwan.html`, `pages/part-time-jobs.html`, and `pages/about.html`.
- From a page inside `pages/`, link to the homepage using `../index.html`.
- From a page inside `pages/`, link to the shared stylesheet using `../assets/css/style.css` and the shared script using `../assets/js/main.js`.
- From the homepage, use `assets/css/style.css` and `assets/js/main.js`.

Every navigation link must work when hosted under a GitHub Pages project URL, not only when hosted at the domain root. Avoid root-absolute paths such as `/assets/...`.

Indicate the current page in the navigation where practical, including an accessible current-page state.

## 8. Content and Research Rules

Writing style:
- Use clear, natural, simple English.
- Write for readers who may be new to Taiwan.
- Explain unfamiliar terms briefly.
- Use descriptive headings, short paragraphs, and lists where useful.
- Be respectful toward Myanmar students and people from all backgrounds.
- Avoid stereotypes, assumptions, or claims that all international students have the same experience.

Accuracy:
- Never invent facts, statistics, university departments, application deadlines, fees, scholarship amounts, legal requirements, visa rules, work permissions, or contact details.
- For immigration, employment, education policy, and other changeable official information, prefer relevant Taiwan government or institution sources.
- Include direct source links beside specific claims when sources are available.
- If a claim has not been verified, label it as a general suggestion or omit it. Do not present guesses as facts.
- Add a “Last reviewed” date to pages containing information likely to change. Do not imply that a page is current if it has not been checked.
- Do not fabricate citations or pretend to have checked a source.
- Include a short independent-project disclaimer where appropriate.

## 9. Images and Other Assets

- Use images only when they improve understanding or the visual experience.
- Prefer images that are relevant to Taiwan, student life, learning, and community.
- Do not use copyrighted images without permission or a suitable license.
- Record image source and license information in a comment in the relevant HTML or in `README.md` when an external image is used.
- Provide descriptive alt text for meaningful images.
- Avoid oversized image files that make the site slow.
- Provide a graceful fallback if an image cannot load.
- Do not use an image as a substitute for essential text.

## 10. JavaScript Rules

- Keep JavaScript simple and use it only for actual interactions.
- Put shared behavior in `assets/js/main.js`.
- Do not add JavaScript for decorative effects that CSS can handle.
- Avoid inline event handlers such as `onclick` in HTML; attach event listeners from the shared script.
- Ensure the core information and navigation remain available if JavaScript is disabled.
- Check for missing elements before attaching event listeners.
- Do not add tracking, analytics, or collect personal information.

## 11. Rules for AI Agents Modifying This Project

Before making changes:
1. Read this `AGENTS.md` completely.
2. Inspect the existing folder structure and relevant files.
3. Identify which files need to change.
4. Explain the proposed changes briefly before a substantial modification.
5. Preserve working functionality and the existing design system.

When adding a new page:
1. Ask for or confirm the page topic and intended audience if unclear.
2. Create the HTML file inside `pages/` using a lowercase, hyphenated filename.
3. Reuse the shared stylesheet and JavaScript.
4. Follow the established header, navigation, content, and footer structure.
5. Use the same typography, colors, spacing, and responsive behavior.
6. Add the new page to the homepage or relevant navigation only when requested or appropriate to the agreed scope.
7. Use verified sources for specific and changeable claims.
8. Check all relative paths and links.
9. Test the new page at mobile and desktop widths.
10. Update `README.md` if the project structure or page list changes.

When modifying an existing page:
- Change only what is necessary for the requested task.
- Do not silently remove content, pages, navigation items, or working features.
- Do not redesign the whole site for a small content change.
- Keep shared components visually consistent.
- Do not replace verified content with unsupported claims.

When changing project-wide styles or scripts:
- Check all five pages for regressions.
- Avoid page-specific CSS that duplicates shared rules.
- Explain any unavoidable exception.

Do not:
- Delete or rename files without explicit approval.
- Add frameworks, dependencies, backend services, or paid services without approval.
- add secrets or private user information.
- invent official information or citations.
- change the project identity or target audience without approval.
- claim that testing or deployment succeeded unless it was actually checked.

## 12. Testing and Quality Assurance

Before declaring a task complete, check:

- All required files exist.
- All five initial pages load.
- Every navigation link points to the correct page.
- CSS and JavaScript paths work from both the homepage and nested pages.
- Images load or have suitable fallbacks.
- No obvious console errors occur.
- The layout works at mobile, tablet, and desktop widths.
- Text is readable and headings are in a logical order.
- External links point to the intended sources.
- No unsupported official, legal, or time-sensitive claims have been added.
- GitHub Pages compatibility is preserved.

If a browser preview or automated test tool is unavailable, state which checks could not be performed. Never claim an unperformed test passed.

## 13. Definition of Done

A task is complete only when:
1. The requested files or content have been created or updated.
2. The result follows this `AGENTS.md`.
3. Existing pages and navigation have not been unintentionally broken.
4. Relevant checks have actually been performed.
5. Any unverified information or remaining limitations are clearly reported.
6. The final response summarizes changed files and test results.

For the initial Homework 9 delivery, the project is ready for submission when:
- The five required pages are present and navigable.
- The shared design is consistent and responsive.
- The `AGENTS.md` and `README.md` are included in the repository.
- The project is uploaded to a public GitHub repository.
- A working GitHub Pages URL is available.
- The homework report includes the project introduction, repository URL, live website URL, a copy or explanation of `AGENTS.md`, and an explanation of how the rules support future AI-assisted development.

## 14. Future Extension Policy

MingalarMate may later expand to include Burmese and Traditional Chinese, additional student-guide pages, verified resource directories, community features, events, and AI-assisted information search.

These are future possibilities only. Do not implement them in Version 1 unless explicitly requested.

When expanding the project:
- Keep the static Version 1 stable unless a migration is planned.
- Discuss the feature, files, data, privacy, and maintenance implications first.
- Update this `AGENTS.md` whenever project-wide rules or architecture change.
- Keep the documentation consistent with the actual implementation.

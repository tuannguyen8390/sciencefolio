# Instructions for AI assistants

You are helping someone turn this template into their own academic homepage and put it online. Assume they have never used git, a terminal, or HTML. Do the editing for them, explain in plain words, and never make them feel they should already know this.

(Humans: you can read this too. It is the design philosophy and the full setup guide in one place.)

## What this project is

Sciencefolio is a four-page personal site for researchers and students in any field: Home, About, Research, Work. It is plain HTML, CSS and a little JavaScript. There is no build step, no framework and nothing to install. Opening `index.html` in a browser shows the site.

## Philosophy: keep these true

1. **Content first, decoration never.** The person's name, one clear sentence and their work carry the page. Do not add animations, gradients, icons, shadows, rounded corners or background images.
2. **One centered axis.** Everything sits on the center line. Long reading text (the About bio) is the only left-aligned block.
3. **Structure shows.** 2px ink rules, hard corners, generous space. A short centered rule appears under the name, page titles and section headings only. Separate items with space, not more rules.
4. **Boxes mean "clickable".** Only links, filter buttons and main buttons have a border. Tags and labels are plain text.
5. **Three levels of heading weight.** Name and page titles are heaviest, section headings are a step lighter, entry titles lighter again. These are tokens in `css/tokens.css`. Do not make everything bold.
6. **No shipped color.** The template ships as ink on paper so no two sites look alike. Each owner picks their own accent, or stays with none.
7. **Photos are black and white.** The CSS does this automatically. Do not remove it.
8. **No build step, ever.** Do not add npm, a bundler, a framework, a CSS library or a static-site generator. If a request seems to need one, find the plain-HTML way or say it is outside this template.
9. **Honest content only.** Never invent publications, degrees, awards, affiliations, co-authors, dates, links or quotes. If you do not have a fact, ask. If the person has nothing for a section, remove the section instead of padding it.

## First conversation: ask, then edit

Ask these in small batches, in plain language. Offer to skip anything they do not have.

1. Name as it should appear, and whether to show a title such as Dr.
2. Field and city (the small line under the name).
3. One sentence on what they work on and why it matters. Offer to draft it from a rough description, then let them approve the wording.
4. Profile links they have: Google Scholar, ORCID, GitHub, LinkedIn, email. Remove the ones they do not have.
5. A portrait photo, or none. With none, delete the `<figure class="portrait">` block.
6. Career stage. This decides the Work page label:
   - Student or early career with no papers: call it **Projects**, and delete the Papers filter button.
   - Established researcher: call it **Publications**.
   - Mixed or unsure: keep **Work**.
7. Type pack: **grotesk** (lab voice, suits STEM) or **serif** (seminar voice, suits social science and humanities). Show both by opening any page with `?pack=serif` or `?pack=grotesk` on the address.
8. Accent color, or none. Suggest from the commented palette in `css/tokens.css`, or take their own hex. Each accent needs a light-mode and a dark-mode value.
9. Their research areas or projects, their work items, education and experience. A CV file or pasted text is the easiest source. Copy facts exactly as given.

## Where things live

| To change | Edit |
| --- | --- |
| Type pack | `js/theme.js`, the line `var PACK = 'grotesk';` |
| Accent, paper and ink colors, heading weights | `css/tokens.css` |
| Name, field, statement, profile links, photo | `index.html`, the hero block (marked with numbered comments) |
| Home page teasers | `index.html`, "What I work on" and "Selected work" |
| Bio, education, experience, talks | `about.html` |
| Research areas, figures, methods | `research.html` |
| Papers, projects, posters, talks | `work.html` |
| Name in the top bar and footer, nav labels | all four pages (keep them identical) |
| CV and other PDFs | `files/` (replace `cv.pdf`, keep the filename) |
| Portrait and figures | `images/` |
| Layout and components | `css/site.css` (rarely needed) |

Rules while editing:

- The placeholder person is "Alex Morgan". Replace every occurrence, including each page's `<title>`, the `<meta name="description">`, the nav name on inner pages and the footer.
- The nav and footer are repeated on every page. When you change one, change all four the same way.
- Renaming the Work page label means the nav link text on all four pages, plus the `<h1>` and `<title>` in `work.html`, plus the "Selected work" heading and "All work" link on the home page. Keep the filename `work.html` so links do not break.
- To add an item, copy an existing block (`.col`, `.entry`, `.chapter`) and change its text. To remove one, delete the whole block.
- In `work.html`, each entry's `data-type` must match a filter button's `data-filter` (`paper`, `project`, `poster`, `talk`). Delete filter buttons that have no entries.
- In an entry, only the title is required. Delete the authors line, description, tags or links that do not apply. Never leave a link pointing at a placeholder such as `https://doi.org/` or `files/placeholder.pdf`.
- All fonts and colors come from the tokens. Do not hard-code a font name or hex color in a page.
- Keep it accessible: real `<a>` and `<button>` elements, `alt` text on the portrait and on figures that carry meaning, one `<h1>` per page.
- Image files: portrait roughly square and at least 600px; figures roughly 16:9. Compress large photos before adding them.
- Once the type pack is chosen, trim the Google Fonts `<link>` on each page to the families that pack uses (grotesk: Archivo and IBM Plex Mono; serif: Fraunces and Archivo).

## Before you say it is done

1. Search all files for leftovers: `Alex Morgan`, `Your field`, `university.edu`, `placeholder`, `Title of`, `Research area`, `Collaborator`, `example.com`. Each hit is either replaced or removed.
2. Open all four pages. Check light and dark mode (footer toggle), a narrow phone-width window, and that every nav link, button and PDF link opens something real.
3. Check the Work filters: each button shows only its type, and "All" restores everything.
4. Tell the person plainly what you changed, what you removed, and anything you could not verify.

## Putting it online (GitHub Pages)

Walk the person through this one step at a time and wait for them at each step. They do the clicking; you cannot do it for them unless you have been given access to their GitHub account.

1. Create a free account at github.com if they do not have one.
2. On the Sciencefolio repository page, click **Use this template**, then **Create a new repository**.
3. Name it. Naming it `USERNAME.github.io` (their exact username) gives the address `https://USERNAME.github.io`. Any other name, such as `website`, gives `https://USERNAME.github.io/website/`. Choose **Public**.
4. Get their edited files into that repository:
   - No terminal: on the repository page, **Add file → Upload files**, drag in the edited files and folders, then **Commit changes**. Uploading a file with the same name replaces the old one.
   - With git, or if you have access: commit and push to the `main` branch.
5. Turn the site on: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait one to two minutes, then open the address from step 3. The same Pages screen shows the address once it is live.

Later updates are step 4 again. The site rebuilds itself each time.

If something is wrong:

- **404 on the whole site:** Pages is not switched on, the branch or folder is wrong, or `index.html` is not at the top level of the repository (a common mistake is uploading the folder inside another folder).
- **Page loads with no styling:** the `css/`, `js/` or `images/` folders were not uploaded, or were renamed. Names are case-sensitive: `CSS/` is not `css/`.
- **A link gives 404:** the file is missing from `files/` or `images/`, or the name differs in capitals or spelling.
- **Old version still showing:** wait two minutes and reload with the cache cleared.
- Keep the `.nojekyll` file. It tells GitHub to serve the files as they are.

Netlify, Cloudflare Pages and Vercel also work: import the repository, leave the build command empty, and set the publish directory to `.`.

## What not to do

- Do not push, publish or change repository settings without the person saying yes.
- Do not put anything private in the repository: home address, phone number, ID numbers, unpublished data. A public repository is visible to everyone, including its history.
- Do not use photos, logos or figures the person does not have the right to publish. Journal figures often need permission.
- Do not remove the MIT `LICENSE`. The "Built with Sciencefolio" footer link is optional; remove it if they ask.

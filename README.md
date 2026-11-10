# Sciencefolio

A minimal, centered, no-build academic homepage. Four pages of plain HTML, one tokens file, no framework, no npm. Works for any field — two type packs, one for STEM and one for social science and the humanities.

**Pages:** Home · About · Research · Work — with a light/dark toggle, a filterable Work list (papers, projects, posters, talks), and a portrait hero that degrades gracefully into pure type if you don't want a photo.

## Make it yours in five minutes

1. **Use this template** (green button, top right) or clone it.
2. **Pick a type pack.** Default is *Grotesk* (Archivo + IBM Plex Mono — lab voice, STEM). For *Serif* (Fraunces + Archivo caps — seminar voice, social science and humanities), change `<html lang="en">` to `<html lang="en" data-pack="serif">` on all four pages. To preview first, open any page with `?pack=serif` on the URL.
3. **Pick an accent — or don't.** It ships with no color at all (pure ink on paper). In `css/tokens.css`, uncomment one of the starter accents, or write your own `--accent-light` / `--accent-dark` pair. This one step is what stops every install looking the same.
4. **Name the Work page for who you are.** It ships as **Work**, a neutral list that takes papers, preprints, projects, theses, posters and talks. Researchers: rename it **Publications**. Students and early-career people: rename it **Projects** — no publications needed, every entry is just a title plus whatever you have (a sentence, tools, a Report / Code / Demo link). To rename, change the nav link on all four pages, the `<h1>` and `<title>` in `work.html`, and delete any filter buttons you don't need.
5. **Fill in the strings.** Search each page for `EDIT` comments. On the home page that's six things: photo, name, field · place, one statement sentence, profile links, and the contact email.
6. **Add your content** — projects in `research.html`, entries in `work.html`, bio in `about.html`. Copy an existing block to add more.
7. Replace the stand-in `files/cv.pdf` with your CV and your portrait in `images/` (replace `portrait-placeholder.svg`, or delete the `<figure>` to go type-only).

## Structure

```
index.html  about.html  research.html  work.html
css/tokens.css   ← the file you edit: type pack, accent, colors
css/site.css     ← layout and components; rarely needs touching
js/theme.js      ← dark/light toggle + ?pack= preview (load in <head>)
js/filter.js     ← Work-page filter (work.html only)
images/          ← portrait + favicon
files/           ← your CV and PDFs (cv.pdf and placeholder.pdf are stand-ins; replace them)
```

## Design notes

- **Centered axis**, 2px ink rules, zero corner radius, Archivo/Plex Mono or Fraunces — the "Modernist" look: structure shows, nothing floats.
- **Photos print in black and white** (CSS `grayscale`), so any face looks at home in any accent.
- **Dark mode** follows the visitor's OS until they use the footer toggle; the choice is remembered.
- **Accessibility:** real links and buttons, visible focus rings, `prefers-reduced-motion` respected, readable at 200% zoom.
- Trim the Google Fonts `<link>` in each page to only your pack's families once you've chosen.

## Deploy

- **GitHub Pages:** Settings → Pages → deploy from the `main` branch, root folder.
- **Netlify / Cloudflare Pages / Vercel:** import the repo; no build command, publish directory `.`.

## Credit and license

MIT — see `LICENSE`. The "Built with Sciencefolio" link in the footer is appreciated but entirely optional; delete it if you like.

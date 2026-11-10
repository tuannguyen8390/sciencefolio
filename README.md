# Sciencefolio

A minimal, centered academic homepage for researchers and students in any field. Four pages of plain HTML, one settings file, no framework, nothing to install.

**Pages:** Home · About · Research · Work

- Two type packs: **Grotesk** for STEM, **Serif** for social science and the humanities.
- No color out of the box. You pick your own accent, so no two sites look the same.
- A Work page that takes papers, projects, posters, talks and theses, so it works with or without publications.
- Light and dark mode, a filterable work list, and a portrait hero that still looks right with no photo.

## The easy way: let an AI assistant set it up

This repository includes [`AGENTS.md`](AGENTS.md), a guide written for AI coding assistants (Claude Code, Cursor, Copilot and similar). Open the project in one and say:

> Read AGENTS.md, then help me turn this template into my own site and put it online. I have never done this before.

It will ask for your name, field, links and work, fill in the pages, and walk you through publishing on GitHub Pages. Pasting in your CV is the fastest way to give it your details.

## Doing it by hand

1. Click **Use this template** (green button, top right) to make your own copy.
2. **Pick a type pack.** In `js/theme.js`, set `var PACK = 'grotesk';` or `'serif'`. To compare first, open any page with `?pack=serif` or `?pack=grotesk` on the address.
3. **Pick an accent, or don't.** In `css/tokens.css`, uncomment one of the starter accents or write your own `--accent-light` and `--accent-dark` pair. Leaving it as ink is a fine choice.
4. **Name the Work page for who you are.** It ships as **Work**. Researchers can rename it **Publications**; students can rename it **Projects**. Change the nav link text on all four pages, plus the heading and title in `work.html`, and delete filter buttons you don't need.
5. **Fill in your details.** The home page hero has six numbered comments: photo, name, field and city, one sentence, profile links, contact email. Replace "Alex Morgan" everywhere, including the top bar and footer on every page.
6. **Add your content.** Research areas in `research.html`, items in `work.html`, bio and history in `about.html`. Copy a block to add one; delete a block to remove one. Only titles are required.
7. **Add your files.** Replace `files/cv.pdf` with your CV (keep the filename) and put your portrait in `images/`. For a text-only hero, delete the `<figure class="portrait">` block.

## Put it online

1. In your repository: **Settings → Pages → Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
2. After a minute or two your site is at `https://USERNAME.github.io/REPOSITORY/`. Name the repository `USERNAME.github.io` to get `https://USERNAME.github.io`.

Netlify, Cloudflare Pages and Vercel also work with no build command and publish directory `.`. Troubleshooting is in [`AGENTS.md`](AGENTS.md#putting-it-online-github-pages).

## What's in the box

```
index.html  about.html  research.html  work.html
css/tokens.css   ← settings: accent, colors, heading weights
css/site.css     ← layout and components; rarely needs touching
js/theme.js      ← type pack setting, dark/light toggle
js/filter.js     ← Work-page filter
images/          ← portrait, figures, favicon
files/           ← your CV and PDFs (the two included are stand-ins)
AGENTS.md        ← design philosophy and setup guide for AI assistants
```

## Design principles

- One centered axis, 2px rules, hard corners, generous space.
- A short rule under headings only; items are separated by space.
- Boxes mean "clickable". Tags and labels are plain text.
- Three heading weights, so the name leads and entries stay quiet.
- Photos and figures print in black and white, so any image suits any accent.
- Real links and buttons, visible focus rings, readable on a phone.

## License

MIT. See `LICENSE`. The "Built with Sciencefolio" footer link is appreciated but optional.

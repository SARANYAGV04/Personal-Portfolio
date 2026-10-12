# Saranya GV portfolio

Static site: `index.html`, `style.css`, `script.js`. No framework, no build step, no server.

## Run it
Double-click `index.html`. Keep the folder structure intact (`assets/` next to the three files).
Google Fonts load online; offline, the page falls back to Georgia and system sans-serif.

## Folder
- `assets/docs/Saranya-GV-Digital-Marketing-Resume.pdf` is the supplied resume (download links point here).
- `assets/images/saran_gv.png` is Saranya's portrait, used in the home-page hero.
- `assets/images/og-image.png` is the social-sharing preview image.
- Selected-work platform logos are local PNGs from Icons8; the site footer links to the source.

## Update the portrait
Replace `assets/images/saran_gv.png` and keep the same filename, or update the image `src` and `alt` text in the hero section of `index.html`.

## Contact details
The contact email is `saranyagv2004@gmail.com` (set in `SITE_CONFIG` at the top of `script.js`, in the contact section and in the JSON-LD). There are no social media links on the site.

## Contact form
A static page cannot send mail by itself. When a visitor submits the form, their email app opens with a drafted message to the address above containing their name, email, role and message; they press send there. The confirmation also offers "Open in Gmail instead" and "Copy message" for visitors with no email app.

## Animations
`animations.css` and `animations.js` add the storytelling layer: a scroll progress bar, headline word reveals, a growing experience timeline, staggered content, hero parallax and magnetic buttons. They respect reduced-motion settings. Delete the two files and their tags in `index.html` to turn them off.

## Before publishing
- Replace `https://www.example.com/` in the `canonical`, `og:url` and `og:image` tags.

## Case studies: adding real evidence
Edit the `CASES` object in `script.js`. Items are labelled in the UI as From the resume, Contextual or Proposed.
- Screenshots: replace the `screens` placeholders with `<img>` elements (extend `renderCase`).
- Results: replace the "Verified results" placeholder text only with figures Saranya can verify.
Tools and techniques come from the resume's skills lists; confirm which were used on each piece of work.

## Resume notes
Dates are kept exactly as written, including overlaps (Walrus Aug 2025 – Present, Comhard Aug 2025 – Dec 2025, Avira Jan 2026 – July 2026).
"Bluekode Academy" and "Blukode Solutions" are spelled as in the resume; confirm the spellings.

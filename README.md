# ✦ Alexa Serrafona Juliet — Portfolio

A playful little corner of the web for **people, projects, and ideas in progress**.
This responsive portfolio brings together communication, visual storytelling, and technology—made with care, curiosity, and a touch of coral. 🪸

**Live site:** [vianoraverse.github.io/Portfolio_Web](https://vianoraverse.github.io/Portfolio_Web/)

## 🌈 A quick tour

- **A personal introduction** with a custom, locally stored profile photo
- **Experience and field notes** with interactive category filters
- **21 visual works** across four browsable collections:
  - OSIS Humas — school-event and seasonal designs
  - Tenxion / Luminox — event graphics
  - PT Makara Mas — social-media content created during internship
  - PT Pelangi Bintang Semesta — social-media content created during an ongoing internship
- **Skills, education, and contact links**
- **Responsive layouts**, keyboard-friendly controls, and reduced-motion support

## 🧰 Built with

- Semantic **HTML**
- Responsive **CSS**
- Lightweight **vanilla JavaScript**
- Locally stored, optimized **WebP** images

No framework, package install, or build step required.

## 🚀 Run it locally

Clone the repo and start a small local web server:

```bash
git clone https://github.com/vianoraverse/Portfolio_Web.git
cd Portfolio_Web
python3 -m http.server 8000
```

Open <http://localhost:8000> in your browser. A local server is recommended so image paths and page behavior match the deployed site.

## 🖼️ Update the visual gallery

Gallery images live in `assets/`. Each work is a `<figure class="gallery-card">` inside its project group in `index.html`. To add or replace a visual:

1. Add an optimized image to `assets/` (WebP is preferred).
2. Update the image source, intrinsic dimensions, and descriptive alternative text:

   ```html
   <img
     class="gallery-image"
     src="assets/my-new-design.webp"
     alt="Describe the visible design and the information it communicates"
     width="1080"
     height="1350"
     loading="lazy"
   />
   ```

3. Edit the matching `<figcaption>` with an accurate title or context.
4. Keep the work inside the correct `.gallery-project` group: `osis`, `tenxion`, `maja`, or `pbs`.

Use specific alt text and factual captions. Avoid implying responsibilities or design roles that have not been confirmed. Original artwork is shown as supplied; historical social handles within an image are not changed. Current Maja account text uses [@maja.payment](https://www.instagram.com/maja.payment/).

## ♿ Accessibility and motion

- Use the skip link and keyboard-operable navigation and filters.
- Respect `prefers-reduced-motion`; decorative motion is minimized or disabled.
- Give each meaningful image descriptive alt text.

## 🌐 Deployment

GitHub Pages deployment is configured in `.github/workflows/pages.yml`. Push changes to `main` to trigger the workflow. The published site is:

<https://vianoraverse.github.io/Portfolio_Web/>

## 📬 Say hello

- Email: [serrafona@gmail.com](mailto:serrafona@gmail.com)
- LinkedIn: [Alexa Serrafona Juliet](https://www.linkedin.com/in/alexa-serrafona-juliet/)

## 🤝 Credits

Created as a group assignment by:

| Contributor | NIM |
| --- | --- |
| Alexa Serrafona Juliet | 1251420014 |
| Vida Maulida Nurul Ihsan | 1251420011 |
| Giska Sisilia Putri | 1251420116 |

---

Made with intention, curiosity, and a little bit of coral energy. ✨

# GuyWhoCanBuild — Portfolio Site

Personal portfolio site for **GuyWhoCanBuild**, showcasing full-stack products built end-to-end across web and iOS: **PulsePing**, **PulseCoach**, and **PulseCart**.

🔗 Live: [guywhocanbuild.github.io](https://guywhocanbuild.github.io)

## Overview

A static, no-build portfolio site — plain HTML, CSS, and JavaScript, no frameworks, no bundler. Built with a terminal/coder-inspired dark theme (black canvas, terminal green accent) to match the "GuyWhoCanBuild" identity.

## Pages

| Page | Description |
|---|---|
| `index.html` | Home — hero, services, niches, featured work |
| `about.html` | About Us — stats, values, industries served |
| `how-we-work.html` | Process — 6-step workflow from idea to launch |
| `projects.html` | Projects — PulsePing, PulseCoach, PulseCart with GitHub links |
| `contact.html` | Contact — form (submits to Google Forms), X/GitHub/email |

## Structure

```
├── index.html
├── about.html
├── how-we-work.html
├── projects.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css      # shared design tokens & components
│   └── js/
│       └── main.js         # mobile nav toggle + form submission
└── README.md
```

## Tech

- HTML5, CSS3 (custom properties, grid/flexbox), vanilla JS
- Fonts: Space Grotesk, IBM Plex Mono, Inter (Google Fonts)
- Contact form → submits directly to a Google Form via a hidden iframe (no backend, no third-party form service)

## Running locally

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally for a more accurate preview:
  ```bash
  python3 -m http.server 8080
  ```
  then visit `http://localhost:8080`

## Deployment

Deployed via **GitHub Pages** — push to `main`, no CI/build config needed since it's pure static HTML/CSS/JS.

## Contact form

The form on `contact.html` posts directly to a Google Form's `formResponse` endpoint using hidden `entry.xxxxxxx` field IDs, so submissions land in the linked Google Sheet without any backend or third-party service.

## Links

- GitHub: [github.com/Guywhocanbuild](https://github.com/Guywhocanbuild)
- X: [@I_CAN_BUILD](https://x.com/I_CAN_BUILD)
- Email: yesguycanbuild@gmail.com

---

© 2026 GuyWhoCanBuild

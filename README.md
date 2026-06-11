# Micro-Lesson Loading Screen

This repo contains a small interactive prototype that turns a long video-loading wait into a short learning moment.

## Summary of the experience
- Single-column layout. The page shows a large 16:9 video skeleton (centered video icon + small spinner) that simulates the lesson player.
- While the video is "loading" (20 seconds), a small, high-contrast "Did you know?" card is displayed inside the video area and rotates short tech/programming facts every ~5 seconds.
- After 20s the skeleton is replaced with an embedded YouTube iframe (video id: iaRj5xGHCuE); the facts card fades away and is removed from the DOM.
- Built with Bootstrap (layout) and Font Awesome (icons). No build step required — static HTML/CSS/JS.

## Design rationale
- Use the waiting time productively: micro-content that teaches or surprises helps reduce perceived wait time and increases value.
- Keep the experience optional and unobtrusive: facts are concise, readable, and removed when the video is ready.
- Single-column simplifies focus and works well across devices; Bootstrap ensures responsive behavior.
- Accessibility: facts are in an `aria-live` region so screen readers announce updates. The video area has descriptive ARIA labels. Colors and contrast were selected for readability.

## Files in this repo
- `index.html` — the single-page prototype. Contains Bootstrap + Font Awesome via CDN, the video skeleton markup, and the facts overlay.
- `styles.css` — theme and visual polish: skeleton shimmer, 16:9 aspect handling, loader and facts styling, transitions.
- `script.js` — controls facts rotation and replaces the skeleton with a YouTube iframe after 20 seconds; removes the facts overlay once the video is shown.
- `wrangler.toml` — minimal config for local Pages emulation and deploying to Cloudflare Pages (add your `account_id` to publish).

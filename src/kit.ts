// Loads the design system's runtime (public/assets/kit) once React has painted the page.
// The kit's scripts read the DOM a single time when they start, so internal links are plain
// <a href> (a full page load) and every page starts the kit on its own finished markup.
const SCRIPTS = [
  '/assets/kit/system.js',
  '/assets/kit/motion/motion.js',
  '/assets/kit/layout/layout.js',
  '/assets/kit/diagrams/mount.js',
];

export function startKit() {
  const w = window as unknown as { __kitStarted?: boolean };
  if (w.__kitStarted) return; // StrictMode runs effects twice in development
  w.__kitStarted = true;
  for (const src of SCRIPTS) {
    const s = document.createElement('script');
    s.type = 'module';
    s.src = src;
    document.body.appendChild(s);
  }
}

// Run from the project root: node scripts/serve-static.mjs
// Local mirror of Vercel's behavior: filesystem first, 404.html fallback,
// no SPA rewrite. Used only to verify the prerendered output.
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.webmanifest': 'application/manifest+json',
};

http
  .createServer(async (req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    const candidates = [
      path.join('dist', url),
      path.join('dist', url, 'index.html'),
      path.join('dist', `${url}.html`),
    ];
    for (const c of candidates) {
      try {
        const st = await fs.stat(c);
        if (st.isFile()) {
          res.writeHead(200, { 'Content-Type': types[path.extname(c)] ?? 'application/octet-stream' });
          res.end(await fs.readFile(c));
          return;
        }
      } catch {
        /* try the next candidate */
      }
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(await fs.readFile('dist/404.html'));
  })
  .listen(4173, () => console.log('static server on 4173'));

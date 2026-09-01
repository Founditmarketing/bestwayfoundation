import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

/**
 * Every route is prerendered to real HTML, so the normal path is hydration.
 * `data-prerendered` is stamped by scripts/prerender.mjs; if it is missing
 * (dev server, or a URL that was not prerendered) we mount fresh instead.
 */
if (container.dataset.prerendered === 'true' && container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}

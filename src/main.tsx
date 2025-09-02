import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed - continue without caching
    });
  });
}

// Remove loading indicator
const loadingEl = document.querySelector('.loading');
if (loadingEl) {
  loadingEl.remove();
}

createRoot(document.getElementById("root")!).render(<App />)
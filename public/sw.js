// Enhanced Service Worker for optimal caching
const CACHE_NAME = 'pxizeli-mdzgoli-v3';
const STATIC_CACHE = 'static-v3';
const DYNAMIC_CACHE = 'dynamic-v3';

// Cache strategies with proper TTL
const CACHE_STRATEGIES = {
  static: { maxAge: 31536000 }, // 1 year for static assets
  dynamic: { maxAge: 86400 },   // 1 day for dynamic content
  images: { maxAge: 2592000 }   // 30 days for images
};

const STATIC_ASSETS = [
  '/',
  '/src/assets/hero-background.webp',
  '/src/assets/safety-trust.webp',
  '/src/assets/service-icon.webp'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      caches.open(DYNAMIC_CACHE)
    ]).then(() => self.skipWaiting())
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => 
              !['static-v3', 'dynamic-v3'].includes(cacheName)
            )
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Enhanced fetch event with proper cache strategies
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle different asset types with appropriate cache strategies
  if (event.request.destination === 'image') {
    event.respondWith(handleImageRequest(event.request));
  } else if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(handleStaticAsset(event.request));
  } else if (event.request.mode === 'navigate') {
    event.respondWith(handleNavigation(event.request));
  }
});

// Image caching with long TTL
async function handleImageRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      // Add cache headers for images
      const responseWithHeaders = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...response.headers,
          'Cache-Control': `public, max-age=${CACHE_STRATEGIES.images.maxAge}`,
          'Expires': new Date(Date.now() + CACHE_STRATEGIES.images.maxAge * 1000).toUTCString()
        }
      });
      cache.put(request, responseWithHeaders.clone());
      return responseWithHeaders;
    }
    return response;
  } catch (error) {
    return cached || new Response('Image not found', { status: 404 });
  }
}

// Static asset caching (JS/CSS)
async function handleStaticAsset(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      // Add long-term cache headers for static assets
      const responseWithHeaders = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...response.headers,
          'Cache-Control': `public, max-age=${CACHE_STRATEGIES.static.maxAge}, immutable`,
          'Expires': new Date(Date.now() + CACHE_STRATEGIES.static.maxAge * 1000).toUTCString()
        }
      });
      cache.put(request, responseWithHeaders.clone());
      return responseWithHeaders;
    }
    return response;
  } catch (error) {
    return cached || fetch(request);
  }
}

// Navigation caching with network-first strategy
async function handleNavigation(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cache.match(request) || cache.match('/');
  }
}
// Service Worker for Fix The Speaker (fixthespeaker.com)
// Provides instant offline caching for the speaker cleaning & water eject tools.

const CACHE_NAME = 'fixthespeaker-v1';

// Core shell assets precached during installation
const PRECACHE_ASSETS = [
  '/',
  '/favicon.ico',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-192.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  '/site.webmanifest',
];

// Domains that must never be cached by the service worker (ads, analytics, tag manager)
const BYPASS_ORIGINS = [
  'pagead2.googlesyndication.com',
  'googleads.g.doubleclick.net',
  'www.googletagmanager.com',
  'www.google-analytics.com',
  'analytics.google.com',
  'stats.g.doubleclick.net',
  'adservice.google.com',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => {
        // Precache error should not prevent service worker installation
        console.warn('[SW] Precache failed:', err);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Bypass third-party ad and analytics networks
  if (BYPASS_ORIGINS.some((origin) => url.hostname.includes(origin))) {
    return;
  }

  // Only handle same-origin or font CDN requests
  const isSameOrigin = url.origin === self.location.origin;
  if (!isSameOrigin) return;

  // Navigation requests (HTML pages): Network-first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          // If network is offline, try exact page from cache, then fallback to root "/" tool
          const cachedPage = await caches.match(request);
          if (cachedPage) return cachedPage;

          const rootTool = await caches.match('/');
          if (rootTool) return rootTool;

          return new Response(
            '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Offline - Fix The Speaker</title></head><body><h1>Offline</h1><p>Please check your connection or reload.</p></body></html>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }

  // Static assets (CSS, JS, Fonts, Images): Cache-first with network fallback and background update
  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.match(/\.(svg|png|jpg|jpeg|webp|ico|woff2?|css|js)$/)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          // Revalidate in background if online
          fetch(request)
            .then((fresh) => {
              if (fresh && fresh.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(request, fresh));
              }
            })
            .catch(() => {});
          return cached;
        }

        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
  }
});

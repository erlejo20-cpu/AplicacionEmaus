const CACHE_NAME = 'emaus-v1';

self.addEventListener('install', (e) => {
  // No cacheamos nada por ahora para no complicarnos, solo para que sea instalable
});

self.addEventListener('fetch', (e) => {
  // Mantiene la app funcionando online
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
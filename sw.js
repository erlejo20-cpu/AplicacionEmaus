const CACHE_NAME = 'emaus-v1';

self.addEventListener('install', (e) => {
  // No cacheamos nada por ahora para no complicarnos, solo para que sea instalable
});

self.addEventListener('fetch', (e) => {
  // Simplemente dejamos pasar la petición al servidor.
  // No intentamos usar el cache vacío, así evitamos el error de "Sin conexión"
  // mientras el servidor de Render se está despertando.
  e.respondWith(fetch(e.request));
});
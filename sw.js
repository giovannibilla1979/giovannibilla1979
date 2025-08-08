self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('roadtrip-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        // inserisci qui altri asset css/js da cache-izzare
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

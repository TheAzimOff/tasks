const CACHE_NAME = 'FireTasks';
const filesToCache = [
  '/assets/index-81eb7af2.css',
  '/assets/index-a20ab6ac.js',
  '/index.html',
  '/offline.html',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      let ok;
      console.log(
        'ServiceWorker: Caching files:',
        filesToCache.length,
        filesToCache
      );
      try {
        ok = await cache.addAll(filesToCache);
      } catch (err) {
        console.error('sw: cache.addAll');
        for await (let i of filesToCache) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.warn('sw: cache.add', i);
          }
        }
      }

      return ok;
    })
  );

  console.log('ServiceWorker installed');
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(async () => {
      return fetch(event.request).catch(() => {
        caches.match('offline.html');
      });
    })
  );
});

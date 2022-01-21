//Latest CACHE_NAME
var CACHE_NAME = '[v0.1.0] Hideyoshi';

//Files to be Cached
var urlsToCache = [
    '/',
    '/index.html',
    '/contact.php',
    '/login.php',
    '/signup.html',
    '/src/session.php',
    '/src/base/footer.php',
    '/src/base/header.php',
    '/css/index.css',
    '/css/contact.css',
    '/css/login.css',
    '/css/src/footer.css',
    '/css/src/grid.css',
    '/css/src/header.css',
    '/css/src/main.css',
    '/css/src/normalize.css',
    '/js/header.js',
    '/js/login.js',
    '/img/logo.png',
    '/img/logohideyoshi-black.png',
    '/img/logohideyoshi-red.png',
    '/img/logohideyoshi-red-36x36.png',
    '/img/logohideyoshi-red-48x48.png',
    '/img/logohideyoshi-red-72x72.png',
    '/img/logohideyoshi-red-96x96.png',
    '/img/logohideyoshi-red-144x144.png',
    '/img/logohideyoshi-red-192x192.png',
    '/img/logohideyoshi-red-512x512.png',
    '/img/logohideyoshi-white.png',
    '/img/undraw_lost_online_wqob.png',
    '/img/undraw_profile_pic_ic5t.png' //Add any other assets your web page needs
];


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
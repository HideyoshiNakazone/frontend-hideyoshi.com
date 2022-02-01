const { fontawesome_src } = require("./lib/fontawesome/srcfile");
//Latest CACHE_NAME
var CACHE_NAME = '[v0.1.0] Hideyoshi';

//Files to be Cached
var urlsToCache = [
    '/',
    '/index.html',
    '/view/home.html',
    '/view/contact.html',
    '/view/src/userResult.html',
    '/view/src/signupPopup.html',
    '/view/src/loginPopup.html',
    '/view/src/header.html',
    '/view/src/footer.html',
    '/css/index.css',
    '/css/contact.css',
    '/css/src/footer.css',
    '/css/src/header.css',
    '/css/src/main.css',
    '/css/src/normalize.css',
    '/css/src/userForm.css',
    '/img/logohideyoshi-red-36x36.png',
    '/img/logohideyoshi-red-48x48.png',
    '/img/logohideyoshi-red-72x72.png',
    '/img/logohideyoshi-red-96x96.png',
    '/img/logohideyoshi-red-144x144.png',
    '/img/logohideyoshi-red-192x192.png',
    '/img/logohideyoshi-red-512x512.png',
    '/img/logohideyoshi-red.png',
    '/img/logohideyoshi-white.png',
    '/img/undraw_lost_online_wqob.png',
    '/img/undraw_profile_pic_ic5t.png',
    '/img/logohideyoshi-black.png',
    '/js/components/headerComponent.js',
    '/js/components/loginPopupComponent.js',
    '/js/components/resultComponent.js',
    '/js/components/signupPopupComponent.js',
    '/js/configs/routeConfig.js',
    '/js/controllers/appController.js',
    '/js/controllers/contatoController.js',
    '/js/controllers/homeController.js',
    '/js/services/clientesAPIService.js',
    '/js/index.html',
    '/lib/angular/angular.js',
    '/lib/angular-locale-pt-br/angular-locale_pt-br.js',
    '/lib/angular-messages/angular-messages.js',
    '/lib/angular-route/angular-route.js',
    'https://kit.fontawesome.com/17169d4074.js',
    '/lib/jquery/dist/jquery.slim.min.js',
    '/lib/bootstrap-4.6.1/css/bootstrap.min.css',
    '/lib/bootstrap-4.6.1/js/bootstrap.bundle.min.js'
];
urlsToCache += fontawesome_src

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});

self.addEventListener('activate', function (event) {
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

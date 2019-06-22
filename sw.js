// Service Worker for PWA cache functionality
self.addEventListener('install', function(event) {
    event.waitUntil(caches.open('static')
    .then(function(cache) {
        cache.addAll([
            '/',
            '/index.html',
            '/js/index.js',
            '/css/index.css',
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js'
        ]);
    }));

    
});

self.addEventListener('activate', function() {
    // console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if(res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    );
});


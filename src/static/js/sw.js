// var cacheName = 'v1:static';
// 
// self.addEventListener('install', function(e) {
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       return cache.addAll([
//         './index.html'
//         ]).then(function() {
//           self.skipWaiting();
//         });
//       })
//     );
// });
// 
// self.addEventListener('fetch', function(event) {
//   // Can check the URL of an asset and respond accordingly
//   // Can handle response codes e.g. 404
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });
// 
// 
// // see http://www.pwabuilder.com/generator
// self.addEventListener('refreshOffline', function(response) {
//   return caches.open('manifoldjs-offline').then(function(cache) {
//     return cache.put(offlinePage, response);
//   }); 
// });
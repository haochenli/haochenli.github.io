/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "451dbff7e62ea32e38479d6fa8cad187"
  },
  {
    "url": "assets/css/0.styles.23808745.css",
    "revision": "b78ecbd38d53e6a32656e1398832ba93"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3cd8dc55.js",
    "revision": "c49152441c57d322c704d71266ad68c0"
  },
  {
    "url": "assets/js/2.09f2c85e.js",
    "revision": "6617a58d1e6162779578135ed4e63dc9"
  },
  {
    "url": "assets/js/3.5228b5af.js",
    "revision": "24c63355bf65423acbe91aa96796f1bc"
  },
  {
    "url": "assets/js/4.bab1a0f0.js",
    "revision": "7a4e43b4caa10886a7db9c22d3292fd6"
  },
  {
    "url": "assets/js/5.cc622179.js",
    "revision": "374dc565f5eb9613664f91deb49586af"
  },
  {
    "url": "assets/js/6.4a6b9b75.js",
    "revision": "63ae4088620a4e7b9c28ff4e5b4b7009"
  },
  {
    "url": "assets/js/7.a24ff695.js",
    "revision": "7257f882e7afdb698cc0fa60e92c82a8"
  },
  {
    "url": "assets/js/8.88ae77fa.js",
    "revision": "d67f9989a0ce8b0dd31f499eeaf8c3b3"
  },
  {
    "url": "assets/js/9.75c65289.js",
    "revision": "c64aa09ce082addeb521f147c85bb3e3"
  },
  {
    "url": "assets/js/app.e55d4bf4.js",
    "revision": "b386fab92755926e31c335b83506aca4"
  },
  {
    "url": "home/index.html",
    "revision": "056053ac7c1215f31849083023da180a"
  },
  {
    "url": "home2/index.html",
    "revision": "d5d2c85486e35e2368a40435b53976cc"
  },
  {
    "url": "home3/index.html",
    "revision": "83332400d4a5264189c421eb75e0a5b3"
  },
  {
    "url": "index.html",
    "revision": "ec1f532558e8077ea6e0716060985882"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

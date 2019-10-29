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
    "revision": "d322c563600f3639a1a442714b76efa9"
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
    "url": "assets/js/6.2ab94b43.js",
    "revision": "47cdfe35604cdfbfa1fb637362d22821"
  },
  {
    "url": "assets/js/7.64190f48.js",
    "revision": "982b12ab75961cb14e0a51f9eae1d8f4"
  },
  {
    "url": "assets/js/8.686d0f47.js",
    "revision": "15ed5720dde022cbcee675d7ee65982c"
  },
  {
    "url": "assets/js/9.caf4da23.js",
    "revision": "dfa22a9cafc321e11b8d652aae1a1da2"
  },
  {
    "url": "assets/js/app.14164dfc.js",
    "revision": "6bc20195fa8fabbe53eb103edceb3ab7"
  },
  {
    "url": "home/index.html",
    "revision": "4a09d085fad7ed65771cc90f695e4718"
  },
  {
    "url": "home2/index.html",
    "revision": "452efbe3701e6b76287b922bb88ce7b1"
  },
  {
    "url": "home3/index.html",
    "revision": "742c8fe5ab53969f3c2bd124709c9eed"
  },
  {
    "url": "index.html",
    "revision": "94b99f14d95e964afcdae0cce551ec91"
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

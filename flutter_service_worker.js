'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4576cded7bc0021e74c10d49a6597fe8",
"version.json": "e28d00356fe31675ba66ce8a7b1242ee",
"index.html": "7cbc1f5e6f71827204ff7f14ccc084d1",
"/": "7cbc1f5e6f71827204ff7f14ccc084d1",
"main.dart.js": "d69daa9a8173704467d09a5b611109aa",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"logo.jpg": "931416d177e2613a2888feaa8f07ac70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19b5bf64e1ca8057949dd888c0a543ba",
"assets/NOTICES": "13ab50aaef02e6f2ab7c4716b9ce4cda",
"assets/FontManifest.json": "bd804aea2c9fe83c9e00206e38ed28a7",
"assets/AssetManifest.bin.json": "5ec3d014549ca026060fd6280a3a0540",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "d00d71a8f200b89d635d2234c52b4163",
"assets/fonts/MaterialIcons-Regular.otf": "f429f3bf9a3c90d70b30df894977acdc",
"assets/assets/products/img_L_46.JPG": "08118a51356c12f913bfc4008e029fbe",
"assets/assets/products/img_M_12.jpg": "918241280152d7a3cc1643f19d513763",
"assets/assets/products/img_M_13.jpg": "06b2427f78dada059309da04f1011e34",
"assets/assets/products/img_M_39.jpg": "b52d352336a8db226bf7cb31cb80a760",
"assets/assets/products/img_M_11.jpg": "d8cc4c93e3f89f8570db024b6748c287",
"assets/assets/products/img_M_10.jpg": "7bc9d362a338dd3be4dc123126cfeecc",
"assets/assets/products/img_M_38.jpg": "b33bc5bb7c8c8cedfbd795b59aed66a7",
"assets/assets/products/img_L_44.jpg": "e1744a5fce7587cfe7760f573af7ead3",
"assets/assets/products/img_M_14.jpg": "e882fcbc355a55c6200c4728409ec1b3",
"assets/assets/products/img_M_28.jpg": "5f49f1ee408f6fee89dc059820b3c089",
"assets/assets/products/img_M_29.jpg": "e63a30fb5696f68ca69afa9735a695ed",
"assets/assets/products/img_L_43.jpg": "92672aed689b9569757eeed448445520",
"assets/assets/products/img_M_17.jpg": "82a4b149df0df9c99f489f24245e888b",
"assets/assets/products/img_M_16.jpg": "ef03877485ba7bace34c62ea3c96132c",
"assets/assets/products/img_L_31.jpg": "d2b6fc6780021f89384173092c6aa41a",
"assets/assets/products/img_M_9.jpg": "9c3b867d1cfb315bb51fd11426f69fe2",
"assets/assets/products/img_M_8.jpg": "ce0b7dca607eaeff9e5ccd5b586f73f5",
"assets/assets/products/img_L_18.jpg": "fb0a88b1bde8ca258f4bb7758dbad853",
"assets/assets/products/img_L_30.jpg": "7ae7bf96cce1a1d09f45386beb1a0dea",
"assets/assets/products/img_L_24.jpg": "03640b5d41f1d53afd0234a9ac07e486",
"assets/assets/products/img_L_33.jpg": "066d8c4aaf6e28d2887a7f390edb543a",
"assets/assets/products/img_L_21.jpg": "3a9b9ea47969f3896e391476a6dd1243",
"assets/assets/products/img_M_50.jpg": "45a92fbc591adae78fa998431e9bb9a4",
"assets/assets/products/img_M_45.JPG": "662b6aca260c0eb713813cfa64e47559",
"assets/assets/products/img_M_51.jpg": "a497042cea8709b25eea7416b9b08658",
"assets/assets/products/img_M_1.jpg": "3ccdf2dca69f32eb018dd6a0669198c7",
"assets/assets/products/img_M_47.JPG": "f887f85a40803b6827f2c890e8bf2b20",
"assets/assets/products/img_M_53.jpg": "72b5497fe27722443f0978095048458b",
"assets/assets/products/img_M_52.jpg": "41d891c9767f4b3025bdc6a5e63e90dc",
"assets/assets/products/img_M_6.jpg": "cba4f2ad85fdd6a928408e2cad788e5b",
"assets/assets/products/img_M_42.jpg": "8312c13869b885842d651c5bd1642115",
"assets/assets/products/img_M_7.jpg": "dc627f6a409372e43dd58f81063cb8e0",
"assets/assets/products/img_L_15.jpg": "b1056047c97328ec1942a982360b6321",
"assets/assets/products/img_M_5.jpg": "a6b4d9da4a621bed82798b2a6081e171",
"assets/assets/products/img_M_41.jpg": "1b66370f1f27f14c3b130754a1f4b1e8",
"assets/assets/products/img_M_40.jpg": "7bb696f7fbc54c9e8e0b7903ae57773d",
"assets/assets/products/img_M_54.jpg": "53239956f1a50ff9300ad73e32bc5df3",
"assets/assets/products/img_M_27.jpg": "f8efc03d1a65c4cd2c4b3bf814833fce",
"assets/assets/products/img_M_26.jpg": "ad09275057ead0f01ae2a4d522f5edf8",
"assets/assets/products/img_M_32.jpg": "0bc291e18945544c73e45906351eb451",
"assets/assets/products/img_M_25.jpg": "78f678f42a701ea39d954f540655ed4b",
"assets/assets/products/img_M_19.jpg": "9aba8e756917b3a7d37cf8d06038e1f3",
"assets/assets/products/img_L_49.jpg": "92b73ea2ca26ff07b39bc220a5e6bdab",
"assets/assets/products/img_M_35.jpg": "4717a9cff5990cbced51a08151cb374d",
"assets/assets/products/img_M_34.jpg": "e4ccc0b1bf651460366491daf0eac8d7",
"assets/assets/products/img_M_20.jpg": "fbbc77905d1411f74d0f17a21cedf55a",
"assets/assets/products/img_L_48.JPG": "75b89bdf290c13f6a1366ec106b8f9d2",
"assets/assets/products/img_M_36.jpg": "e9d521f526b6d78f618226068b49a485",
"assets/assets/products/img_M_22.jpg": "523bed94a0a78a0787957d8c1cc40f6c",
"assets/assets/products/img_M_23.jpg": "478eaad80d282341fd9be48fc15adeb9",
"assets/assets/products/img_M_37.jpg": "b90cd36168e4cd86b764809d1d2da2ae",
"assets/assets/images/telegram.png": "0788bd23d86360c661b8fa9a91d99550",
"assets/assets/images/cover_page.jpg": "3b72163db22cacb48ca8c66d53587116",
"assets/assets/images/tiktok.png": "c28071fcea9742f039d0ae44468caf22",
"assets/assets/images/logo.jpg": "931416d177e2613a2888feaa8f07ac70",
"assets/assets/images/facebook.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/fonts/NotoSansKhmer.ttf": "0d1259cabba8c1589517f776626b8e52",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

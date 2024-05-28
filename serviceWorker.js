const staticPixelCache = "pixel-v11"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/bootstrap.min.css",
  "/css/icomoon.css",
  "/css/fonts/icomoon.eot",
  "/css/fonts/icomoon.svg",
  "/css/fonts/icomoon.ttf",
  "/css/fonts/icomoon.woff",
  "/de/index.html",
  "/de/seiten/anleitung.html",
  "/de/seiten/datenschutz.html",
  "/de/seiten/impressum.html",
  "/de/seiten/kontakt.html",
  "/de/js/language.js",
  "/js/pixel-stitch.min.js",
  "/js/quantization.min.js",
  "/js/worker.min.js",
  "/js/language.js",
  "/sites/contact.html",
  "/sites/instruction.html",
  "/sites/legalnotice.html",
  "/sites/privacypolicy.html",
  "/images/schaubild.jpeg",
  "/images/schaubild.webp",
  "/images/boxes.jpg",
  "/images/created.jpg",
  "/images/erstellen.jpg",
  "/images/facebook.png",
  "/images/flags.png",
  "/images/linksgestrickt.gif",
  "/images/logo.jpg"  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPixelCache).then(cache => {
      cache.addAll(assets)
	  console.log('Install successful');
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

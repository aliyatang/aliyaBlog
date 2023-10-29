const resource = [
  /* --- CSS --- */
  '/aliyaBlog/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/aliyaBlog/app.js',
  '/aliyaBlog/sw.js',

  /* --- HTML --- */
  '/aliyaBlog/index.html',
  '/aliyaBlog/404.html',

  
    '/aliyaBlog/about/',
  
    '/aliyaBlog/notebook/',
  
    '/aliyaBlog/categories/',
  
    '/aliyaBlog/tags/',
  
    '/aliyaBlog/archives/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/aliyaBlog/assets/img/favicons/android-chrome-192x192.png',
    '/aliyaBlog/assets/img/favicons/android-chrome-512x512.png',
    '/aliyaBlog/assets/img/favicons/apple-touch-icon.png',
    '/aliyaBlog/assets/img/favicons/browserconfig.xml',
    '/aliyaBlog/assets/img/favicons/favicon-16x16.png',
    '/aliyaBlog/assets/img/favicons/favicon-32x32.png',
    '/aliyaBlog/assets/img/favicons/favicon.ico',
    '/aliyaBlog/assets/img/favicons/mstile-150x150.png',
    '/aliyaBlog/assets/img/favicons/safari-pinned-tab.svg',
    '/aliyaBlog/assets/img/favicons/site.webmanifest'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'aliyatang.github.io',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];


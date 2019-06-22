const sw = self;

sw.addEventListener('install', (event) => {
  console.log('[SW] Install');
});

sw.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
});

sw.addEventListener('fetch', (event) => {
  const sUrl = event.request.url;
  console.log('[SW] Fetch', sUrl);
});

/* eslint-disable no-use-before-define */

async function installServiceWorker () {
  const reg = await navigator.serviceWorker.register('./service-worker.js');
  console.log('[SW] Register', reg);
}

installServiceWorker();

navigator.serviceWorker.addEventListener('message', async (event) => {
  const message = event.data;
  if (message.type === 'ping') {
    console.log(`[main] ${message.text}`);
  }
});

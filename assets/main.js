/* eslint-disable no-use-before-define */

async function installServiceWorker () {
  const reg = await navigator.serviceWorker.register('./service-worker.js');
  console.log('[SW] Register', reg);
}

installServiceWorker();

navigator.serviceWorker.addEventListener('message', async (event) => {
  const message = event.data;
  switch (message.type) {
    case 'sw/install': {
      // eslint-disable-next-line no-alert
      const ok = window.confirm('New version is available. Reload now?');
      if (ok) {
        window.location.reload();
      }
      break;
    }

    default: // do nothing
  }
});


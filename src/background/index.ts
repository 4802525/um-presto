import { initializeWrappedStore } from '../app/store';
import { Session } from '../foundations/sfConnections';

initializeWrappedStore();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case 'getCurrentUrl':
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0]?.url;
        sendResponse(currentUrl ?? null);
      });
      return true;

    case 'getSfHost':
      chrome.cookies.get({ url: request.url, name: 'sid' }, (cookie) => {
        if (!cookie) {
          sendResponse(null);
          return;
        }

        const [orgId] = cookie.value.split('!');
        chrome.cookies.getAll(
          {
            name: 'sid',
            domain: 'salesforce.com',
            secure: true,
          },
          (cookies) => {
            const sessionCookie = cookies.find((c) => c.value.startsWith(orgId + '!'));
            console.log(sessionCookie);
            if (sessionCookie) {
              sendResponse(sessionCookie.domain);
              return;
            }

            chrome.cookies.getAll(
              {
                name: 'sid',
                domain: 'cloudforce.com',
                secure: true,
              },
              (cookies) => {
                const sessionCookie = cookies.find((c) => c.value.startsWith(orgId + '!'));
                if (sessionCookie) {
                  sendResponse(sessionCookie.domain);
                  return;
                }

                sendResponse(null);
              }
            );
          }
        );
      });
      return true;
    case 'getSession':
      chrome.cookies.get({ url: 'https://' + request.sfHost, name: 'sid' }, (sessionCookie) => {
        if (!sessionCookie) {
          sendResponse(null);
          return;
        }
        const session: Session = { sessionId: sessionCookie.value, hostname: sessionCookie.domain };
        sendResponse(session);
      });
      return true;
  }
  return false;
});

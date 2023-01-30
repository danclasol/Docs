# Storage

We have the following ways of storing data in our web applications.

- localStorage (Web Storage API)
- sessionStorage (Web Storage API)
- cookies
- IndexedDB (client-sizde database)

# Differencies

| X                  | Cookies           | LocalStorage | SessionStorage | IndexedDB    |
| ------------------ | ----------------- | ------------ | -------------- | ------------ |
| Capacity           | 4kb               | 10MB         | 5MB            | Depends      |
| Accessible from    | Any window        | Any window   | Same tab       | Any window   |
| Expires            | Manually set      | Never        | On tab close   | Never        |
| Storage Location   | Browser and sever | Browser only | Browser only   | Browser only |
| Sent with requests | Yes               | No           | No             | No           |

## Capacity

Due to cookies are sent on every request to the server, the size is restricted to 4kb. In order to not to slowdown the application.

Maximum Web storage (local and session storage) depends on each browser.

- Broser examples

  - Opera: 5MB
  - Google Chrome: 10MB
  - Firefox: 10MB
  - Internet Explorer: 10MB

In IndexedDB the maximum space is dynamic, it is based on your hard drive size.

## Accessibility

Cookies, localStorage and IndexedDB are accesible from any window. So if you have more than one tab o browser opened the information will be avaible.

However, sessionStorage is only available in the single tab opened.

## Expires

SessionStorage expires when the user closes the tab where the sessionStorage was set.

LocalStorage won't expired until is deleted by code of manually from the browser.
Idem IndexedDB.

In Cookies we need to set manually the expired date.

## Store location

LocalStorage, sessionStorage and IndexedDB are stored in the browser.

Cookies while are stored in the browser, are also sent to the server every the user makes a request to the server.

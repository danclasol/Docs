# Cookies

Cookies are stored in `document.cookie` and have the following format:

- it is a string
- it must have a `key-value` form.
- use semicolon to separate the different cookies.

# Properties

Any of the following attribute values can optionally follow the key-value pair, specifying the cookie to set/update, and preceded by a semicolon separator:

## Domain

If not specified, this defaults to the host portion of the current document location.

Contrary to earlier specifications, leading dots in domain names are ignored, but browsers may decline to set the cookie containing such dots.

If a domain is specified, subdomains are always included.

```js
document.cookie = "name=Peter; domain = example.com";
```

## Path

If not specified, defaults to the current path of the current document location.

```js
document.cookie = "name=Peter; path = /mydir";
```

## Expiration date

If neither expires nor max-age specified it will expire at the end of session.

Expiration date must has UTC format `Date.toUTCString()`

```js
document.cookie = "name=Peter; max-age=31536000"; // seconds
document.cookie = "name=Peter; expires=Mon, 23 Jan 2023 15:20:43 GMT"; // date
```

## Secure

Cookie to only be transmitted over secure protocol as https. Before Chrome 52, this flag could appear with cookies from http domains.

```js
document.cookie = "name=Peter; Secure";
```

## SameSite

SameSite prevents the browser from sending this cookie along with cross-site requests.

Possible values are lax, strict or none.

- The `lax` value will send the cookie for all same-site requests and top-level navigation GET requests. This is sufficient for user tracking, but it will prevent many Cross-Site Request Forgery (CSRF) attacks. This is the default value in modern browsers.

- The `strict` value will prevent the cookie from being sent by the browser to the target site in all cross-site browsing contexts, even when following a regular link.

- The `none` value explicitly states no restrictions will be applied. The cookie will be sent in all requests—both cross-site and same-site.

```js
document.cookie = "name=Peter; SameSite=lax;";
```

# Create cookies

In order to operate with cookies we need to use the document property `document.cookie`.

Only a single cookie can be set at a time.

```js
document.cookie = "name=Peter;";
document.cookie = "surname=Smith;";
console.log(document.cookie); // "name=Peter;surname=Smith"
```

# Update cookies

Only a single cookie can be update at a time.

```js
document.cookie = "surname=Griffin;";
```

# Delete cookies

To delete a cookie we need to set a passed expiration date

```js
document.cookie = "surname=Smith; expires=" + new Date(2000, 0, 1);
```

# Read cookies

With the document property `document.cookie` we are able to read all cookies accessible from this location.

There isn't a prettier way of reading cookies.

```js
console.log(document.cookie);
```

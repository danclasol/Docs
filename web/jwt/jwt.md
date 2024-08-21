# JSON Web Tokens (JWT)

https://jwt.io/

## Header

Algorithm & Token Type

```js
{
  "alg": "HS256",
  "typ": "JWT"
}
```

## Payload

Data

```js
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

## Verify Signature

```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),

your-256-bit-secret

) secret base64 encoded
```

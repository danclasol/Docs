# HTTP Response Status codes

Every HTTP request will return a response status code with the information of the requested resource.

Response status codes are divided in these groups:

- `1xx`: informative responses
- `2xx`: successfull responses.
- `3xx`: redirection responses.
- `4xx`: error responses.
- `5xx`: server error responses.

# Status Codes List

## Informative responses

### `100: Continue`

- Indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.

### `101: Switching Protocols`

- Indicates a protocol to which the server switches.
- The protocol is specified in the Upgrade request header received from a client.

### `103: Early Hints (Experimental)`

- Experimental
- Intended to be used with the Link header to allow the user agent to start preloading resources while the server is still preparing a response.

## Successful responses

### `200: OK`

- Request has succeeded.
- A 200 response is cacheable by default.

### `201: Created`

- Request has succeeded and has led to the creation of a resource.

### `202 Accepted`

- Request has been accepted for processing but the processing has not been completed

### `203: Non-Authoritative Information`

- Indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server's 200 (OK) response.

### `204: No Content`

- Indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.
- This might be used, for example, when implementing "save and continue editing" functionality

### `205: Reset Content`

- Tells the client to reset the document view, so for example to clear the content of a form, reset a canvas state, or to refresh the UI

### `206: Partial Content`

- Indicates that the request has succeeded and the body contains the requested ranges of data, as described in the Range header of the request.

## Redirection responses

### `300: Multiple Choices`

- Indicates that the request has more than one possible responses.
- The user-agent or the user should choose one of them. As there is no standardized way of choosing one of the responses.
- Very rarely used.

### `301: Moved Permanently`

- Indicates that the requested resource has been definitively moved to the URL given by the Location headers.
- A browser redirects to the new URL and search engines update their links to the resource.

### `302: Found`

- Indicates that the resource requested has been temporarily moved to the URL given by the Location header.
- A browser redirects to this page but search engines don't update their links to the resource

### `303: See Other`

- Indicates that the redirects don't link to the requested resource itself, but to another page

### `304: Not Modified`

- Indicates that there is no need to retransmit the requested resources.

### `307: Temporary Redirect`

- Indicates that the resource requested has been temporarily moved to the URL given by the Location headers.

### `308: Permanent Redirect`

- Indicates that the resource requested has been definitively moved to the URL given by the Location headers

## Error responses

### `400: Bad Request`

- Indicates that the server cannot or will not process the request due to something that is perceived to be a client error

### `401: Unauthorized`

- Indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.

### `402: Payment Required`

- Indicate that the requested content is not available until the client makes a payment.
- Experimental

### `403: Forbidden`

- Indicates that the server understands the request but refuses to authorize it.
- Similar to 401, but for the 403 Forbidden status code, re-authenticating makes no difference.
- The access is tied to the application logic, such as insufficient rights to a resource.

### `404: Not Found`

- Indicates that the server cannot find the requested resource

### `405: Method Not Allowed`

- Indicates that the server knows the request method, but the target resource doesn't support this method.

### `406: Not Acceptable`

- Indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation.

### `407: Proxy Authentication Required`

- Indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource.

### `408: Request Timeout`

- Indicates that the server would like to shut down this unused connection

### `409: Conflict`

- Indicates a request conflict with the current state of the target resource.

### `410: Gone`

- Indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.

### `411: Length Required`

- Indicates that the server refuses to accept the request without a defined Content-Length header

### `412: Precondition Failed`

- Indicates that access to the target resource has been denied.

### `413: Payload Too Large`

- Indicates that the request entity is larger than limits defined by server

### `414: URI Too Long`

- Indicates that the URI requested by the client is longer than the server is willing to interpret.

### `415: Unsupported Media Type`

- Indicates that the server refuses to accept the request because the payload format is in an unsupported format.

### `416: Range Not Satisfiable`

- Indicates that a server cannot serve the requested ranges

### `417: Expectation Failed`

- Indicates that the expectation given in the request's Expect header could not be met.

### `418: I'm a teapot`

- Indicates that the server refuses to brew coffee because it is, permanently, a teapot.
- Was defined in April Fools' jokes in 1998 and 2014.

### `422: Unprocessable Entity`

- Indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.

### `425: Too Early`

- Indicates that the server is unwilling to risk processing a request that might be replayed, which creates the potential for a replay attack.

### `426: Upgrade Required`

- Indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.

### `428: Precondition Required`

- Indicates that the server requires the request to be conditional.

### `429: Too Many Requests`

- Indicates the user has sent too many requests in a given amount of time ("rate limiting").

### `431: Request Header Fields Too Large`

- Indicates that the server refuses to process the request because the request's HTTP headers are too long. The request may be resubmitted after reducing the size of the request headers.

### `451: Unavailable For Legal Reasons`

- Indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.

## Server error responses

### `500: Internal Server Error`

- Indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
- This error response is a generic "catch-all" response.
- Usually, this indicates the server cannot find a better 5xx error code to response.

### `501: Not Implemented`

- Indicates that the server does not support the functionality required to fulfill the request.

### `502: Bad Gateway`

- Iindicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.

### `503: Service Unavailable`

- Indicates that the server is not ready to handle the request.

### `504: Gateway Timeout`

- Indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.

### `505: HTTP Version Not Supported`

- Indicates that the HTTP version used in the request is not supported by the server.

### `506: Variant Also Negotiates`

- Idicates an internal server configuration error in which the chosen variant is itself configured to engage in content negotiation, so is not a proper negotiation endpoint.

### `507: Insufficient Storage`

- Indicates that a method could not be performed because the server cannot store the representation needed to successfully complete the request.

### `508: Loop Detected`

- Indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity". This status indicates that the entire operation failed.

### `510: Not Extended`

- This code is sent in the context of the HTTP Extension Framework, defined in RFC 2774.
- In that specification a client may send a request that contains an extension declaration, that describes the extension to be used. If the server receives such a request, but any described extensions are not supported for the request, then the server responds with the 510 status code.

### `511: Network Authentication Required`

- Indicates that the client needs to authenticate to gain network access.

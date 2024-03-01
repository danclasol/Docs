# Template Literal Types

You can also use `template literal types` as types to ensure that a string matches a specific format.

```ts
type Greetings = `Hi ${string}`;
let hello: Greetings = "Hi Peter";

type HexColor = `#${number}`;
let color: HexColor = "#000000";
let color: HexColor = "000000"; // error
```

We can concatenated multiple types to create the template

```ts
type Uuid = `${string}-${string}-${string}-${string}`;
let id = "1234"; // error: doesn't match the type uuid
let id = "1234-5678-1234-5678-1234"; // OK
```

Also, is possible to mix with literal strings

```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
```

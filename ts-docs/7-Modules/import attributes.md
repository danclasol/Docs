# Import Attributes

Provide information about the expected format of a module to the runtime.

When we only want this to interpreted the import as a specific type,
and not a runnable/malicious JavaScript file with a file extension.

```ts
import obj from "./something.json" with { type: "json" };
```

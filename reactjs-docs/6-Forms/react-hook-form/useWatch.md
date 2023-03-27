# useWatch

Behaves similarly to the watch API, however, this will isolate re-rendering at the custom hook level and potentially result in better performance for your application.

## props

- `name` (_string | string[] | undefined_): Name of the field.
- `control` (Object): control object provided by _useForm_. It's optional if you are using FormContext.
- `defaultValue` (_unknown_): default value for _useWatch_ to return before the initial render.

  _Note_: the first render will always return defaultValue when it's supplied.

- `disabled` (_boolean=false_): Option to disable the subscription.

- `exact` (_boolean = false_): This _prop_ will enable an exact match for input name subscriptions.

```js
useWatch("inputName"); // unknown
useWatch(["inputName1"]); // unknown[]
useWatch(); // {[key:string]: unknown}
```

# Rules

- The initial return value from _useWatch_ will always return what's inside of _defaultValue_ or _defaultValues_ from _useForm_.

- The only difference between _useWatch_ and watch is at the root (useForm) level or the custom hook level update.

- _useWatch_'s execution order matters, which means if you update a form value before the subscription is in place, then the value updated will be ignored.

  ```js
  setValue("test", "data");
  useWatch({ name: "test" }); // ❌ subscription is happened after value update, no update received

  useWatch({ name: "example" }); // ✅ input value update will be received and trigger re-render
  setValue("example", "data");
  ```

  You can overcome the above issue with a simple custom hook as below:

  ```js
  const useFormValues = () => {
    const { getValues } = useFormContext();

    return {
      ...useWatch(), // subscribe to form value updates
      ...getValues(), // always merge with latest form values
    };
  };
  ```

- _useWatch_'s result is optimised for render phase instead of _useEffect_'s deps, to detect value updates you may want to use an external custom hook for value comparison.

# Example

```js
import React from "react";
import { useForm, useWatch } from "react-hook-form";

function Child({ control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });

  return <p>Watch: {firstName}</p>;
}

function App() {
  const { register, control } = useForm({
    firstName: "test",
  });

  return (
    <form>
      <input {...register("firstName")} />
      <Child control={control} />
    </form>
  );
}
```

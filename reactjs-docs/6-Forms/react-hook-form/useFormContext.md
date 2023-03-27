# useFormContext

This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop.

This hook will return all the useForm return methods and props.

```js
const methods = useForm()

<FormProvider {...methods} /> // all the useForm return props

const methods = useFormContext() // retrieve those props
```

You need to wrap your form with the FormProvider component for useFormContext to work properly.

# FormProvider

This component will host context object and allow consuming component to subscribe to context and use useForm props and methods.

```js
import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export default function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      {" "}
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}
```

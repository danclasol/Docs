# React Hook Form

_React Hook Form_ provide users with a smoother interaction experience by fine-tuning the performance and improving accessibility.

Some of the performance enhancements include:

- Introducing form state subscription model through the proxy
- Avoiding unnecessary computation
- Isolating component re-rendering when required

Introduce built-in validation and are closely aligned with HTML standards allowing further extension with powerful validation methods and integration with schema validation natively.

In addition, having a strongly type-checked form with the help of typescript provides early build-time feedback to help and guide the developer to build a robust form solution.

https://react-hook-form.com/

## Installation

```
npm i react-hook-form
```

# Register fields

This will make its value available for both the form validation and submission.

```js
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
```

# Validation

_React Hook Form_ makes form validation easy by aligning with the existing HTML standard for form validation.

List of validation rules supported:

- required
- min
- max
- minLength
- maxLength
- pattern
- validate

```js
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
```

# Integrating on an existing form component

We have two options to integrate React-hook-fom in our components

### 1. Passing as props the register and required

```js
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);
```

### 2. Using React.forwardRef to pass the ref

```js
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));
```

## Using this components

```js
const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};
```

# Handle errors

_React Hook Form _ provides an errors object to show you the errors in the form.

The following example showcases a required validation rule.

```js
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}

      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <input type="submit" />
    </form>
  );
}
```

## Schema Validation

It supports schema-based form validation with `Yup`, `Zod`, `Superstruct` & `Joi`, where you can pass your schema to useForm as an optional config.

It will validate your input data against the schema and return with either errors or a valid result.

### Install Yup into your project.

```
npm install @hookform/resolvers yup
```

### Prepare schema for validation and register inputs

```js
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
```

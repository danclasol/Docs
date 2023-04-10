# useForm

The hook _useForm_ is a custom hook for managing forms.

# props

It takes one object as optional argument. List of properties along with their default values.

- Generic props:

  - _mode_: validation strategy before submitting behaviour.
  - _reValidateMode_: validation strategy after submitting behaviour.
  - _defaultValues_: default values for the form.
  - _values_: reactive values to update the form values.
  - _resetOptions_: option to reset form state update while updating new form values.
  - _criteriaMode_: Display all validation errors or one at a time.
  - _shouldFocusError_: enable or disable build-in focus management.
  - _delayError_: delay error from appearing instantly.
  - _shouldUseNativeValidation_: use browser build-in form constraint API.
  - _shouldUnregister_: enable and disable input unregister after unmount.

- Schema validation props:
  - _resolver_: to plugin with your favour schema validation library.
  - _context_: A context object to supply for your schema validation.

```js
const App = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form>
      <div>
        <label>Nombre</label>
        <input type="text" name="name" />
      </div>
    </form>
  );
};
```

# register

Method that registers an input or select element and apply validation rules to React Hook Form.

By invoking the register function and supplying an input's name, you will receive the following methods:

```js
const { ref, name, onChange, onBlur } = register("firstName");
```

- _ref_ (`React.Ref<any>`): Input reference for hook form to register.
- _name_ (`string`): Input's name being registered.
- _onChange_ (`ChangeHandler`): onChange prop to subscribe the input change event.
- _onBlur_ (`ChangeHandler`): onBlur prop to subscribe the input blur event.

## options

We can register an input with validation and error message by passing an optional _options_ objets.

This options can be:

### ref

React element ref

```js
<input {...register("test")} />
```

### required

Indicates that the input must have a value before the form can be submitted. You can assign a string to return an error message in the errors object.

```js
<input
  {...register("test", {
    required: "error message",
  })}
/>
```

### maxLength

The maximum length of the value to accept for this input.

```js
<input
  {...register("test", {
    maxLength: {
      value: 2,
      message: "error message",
    },
  })}
/>
```

### minLength

The minimum length of the value to accept for this input.

```js
<input
  {...register("test", {
    minLength: {
      value: 1,
      message: "error message",
    },
  })}
/>
```

### max

The maximum value to accept for this input.

```js
<input
  type="number"
  {...register("test", {
    max: {
      value: 3,
      message: "error message",
    },
  })}
/>
```

### min

The minimum value to accept for this input.

```js
<input
  type="number"
  {...register("test", {
    min: {
      value: 3,
      message: "error message",
    },
  })}
/>
```

### pattern

The regex pattern for the input.

```js
<input
  {...register("test", {
    pattern: {
      value: /[A-Za-z]{3}/,
      message: "error message", // JS only: <p>error message</p> TS only support string
    },
  })}
/>
```

### validate

You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them.

This function will be executed on its own without depending on other validation rules included in the required attribute.

_Note: for object or array input data, it's recommended to use the validate function for validation as the other rules mostly apply to `string`, `string[]`, `number` and `boolean` data types._

```js
<input
  {...register("test", {
    validate: (value) => value === "1" || "error message",
  })}
/>
```

Object of callback functions

```js
<input
  {...register("test1", {
    validate: {
      positive: (v) => parseInt(v) > 0 || "should be greater than 0",
      lessThanTen: (v) => parseInt(v) < 10 || "should be lower than 10",
      checkUrl: async () => (await fetch()) || "error message",
      messages: (v) => !v && ["test", "test2"],
    },
  })}
/>
```

### valueAsNumber

Returns a Number normally. If something goes wrong NaN will be returned.

- valueAs process is happening before validation.
- Only applicable and support to `<input type="number" />`, but we still cast to number type without trim or any other data manipulation.
- Does not transform defaultValue or defaultValues.

```js
<input
  type="number"
  {...register("test", {
    valueAsNumber: true,
  })}
/>
```

### valueAsDate

Returns a Date object normally. If something goes wrong Invalid Date will be returned.

- valueAs process is happening before validation.
- Only applies to `<input />`.
- Does not transform defaultValue or defaultValues.

```js
<input
  type="date"
  {...register("test", {
    valueAsDate: true,
  })}
/>
```

### setValueAs

Return input value by running through the function.

- valueAs process is happening before validation. Also, setValueAs is ignored if either valueAsNumber or valueAsDate are true.
- Only applies to text input.
- Does not transform defaultValue or defaultValues.

```js
<input
  type="number"
  {...register("test", {
    setValueAs: (v) => parseInt(v),
  })}
/>
```

### disabled

Set disabled to true will lead input value to be undefined and input control to be disabled.

- Disabled prop will also omit build-in validation rules.
- For schema validation, you can leverage the undefined value returned from input or context object.

```js
<input
  {...register("test", {
    disabled: true,
  })}
/>
```

### onChange (e: SyntheticEvent) => void

onChange function event to be invoked in the change event.

```js
register("firstName", {
  onChange: (e) => console.log(e),
});
```

### onBlur (e: SyntheticEvent) => void

onBlur function event to be invoked in the blur event.

```js
register("firstName", {
  onBlur: (e) => console.log(e),
});
```

### value

Set up value for the registered input. This prop should be utilised inside useEffect or invoke once, each re-run will update or overwrite the input value which you have supplied.

```js
register("firstName", { value: "bill" });
```

### shouldUnregister

Input will be unregistered after unmount and defaultValues will be removed as well.

_Note: this prop should be avoided when using with useFieldArray as unregister function gets called after input unmount/remount and reorder._

```js
<input
  {...register("test", {
    shouldUnregister: true,
  })}
/>
```

### deps

Validation will be triggered for the dependent inputs,it only limited to register api not trigger.

```js
<input
  {...register("test", {
    deps: ["inputA", "inputB"],
  })}
/>
```

# handleSubmit

This function will receive the form data if form validation is successful.

## props

- `SubmitHandler` (data: Object, e?: Event): A successful callback.
- `SubmitErrorHandler` (errors: Object, e?: Event): An error callback.

Manages for us the submit form method:

- Avoid preventDefault form event
- Submit only if there are no errors.
- _disabled_ inputs will appear as `undefined` values in form values. If you want to prevent users from updating an input and wish to retain the form value, you can use readOnly.
- _handleSubmit_ function will not swallow errors that occurred inside your onSubmit callback, so we recommend you to try and catch inside async request and handle those errors gracefully for your customers.
  ```js
  const onSubmit = async () => {
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };
  ```

```js
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

# formState

This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application.

- `isDirty` (boolean): Set to true after the user modifies any of the inputs.
- `dirtyFields` (object): An object with the user-modified fields.
- `touchedFields` (object): An object containing all the inputs the user has interacted with.

- `defaultValues` (object): The value which has been set at useForm's defaultValues or updated defaultValues via reset API.

- `isSubmitted` (boolean): Set to true after the form is submitted. Will remain true until the reset method is invoked.

- `isSubmitSuccessful` (boolean): Indicate the form was successfully submitted without any runtime error.

- `isSubmitting` (boolean): true if the form is currently being submitted. false otherwise.

- `isLoading` (boolean): true if the form is currently loading async default values.

- `submitCount` (number): Number of times the form was submitted.

- `isValid (boolean): Set to true if the form doesn't have any errors.

- `isValidating` (boolean): Set to true during validation.

- `errors` (object): An object with field errors. There is also an ErrorMessage component to retrieve error message easily.

# watch

This method will watch specified inputs and return their values. It is useful to render input value and for determining what to render by condition.

Watch all inputs

```js
watch();
```

Watch input value by name

```js
watch("inputName");
```

Watch multiple inputs

```js
watch(["inputName1"]);
```

Watch all inputs and invoke a callback

```js
watch((data, { name, type }) => console.log(data, name, type));
```

# getValues

An optimized helper for reading form values. The difference between watch and getValues is that getValues will not trigger re-renders or subscribe to input changes.

Returns the entire form values

```js
getValues(); // { root: { test1: '', test2: ''} }
```

Gets the value at path of the form values

```js
getValues("root"); // { test1: '', test2: ''}
getValues("root.firstName"); // ''
```

Returns an array of the value at path of the form values

```js
getValues(["yourDetails.lastName"]); // [""];
```

# setValues

This function allows you to dynamically set the value of a registered field and have the options to validate and update the form state. At the same time, it tries to avoid unnecessary rerender.

Update input value

```js
setValue("yourDetails.firstName", "value");
```

Update an entry of an field array

```js
setValue("array.0.field1", "value1");
setValue("array.0.field2", "value2");
```

Update an entire field array

```js
setValue("fieldArray", [{ test: "1" }, { test: "2" }]);
```

# getFieldState

Return individual field state. It's useful in case you are trying to retrieve nested field state in a typesafe way.

```js
const {
  register,
  getFieldState,
  formState: { isDirty, isTouched, isValid, error },
} = useForm();

const fieldState = getFieldState("firstName");
const fieldStateDirty = getFieldState("firstName").isDirty;
```

# reset

Reset the entire form state, fields reference, and subscriptions. There are optional arguments and will allow partial form state reset.

We can provied an optional object options:

- keepErrors: field error will be retained
- keepDirty: dirtyFields will be retained.
- keepDirtyValues: DirtyFields and isDirty will remained, and only none dirty fields will be updated to the latest rest value
- keepValues: Form input values will be unchanged.
- keepDefaultValues: Keep the same defaultValues which are initialised via useForm.
- keepIsSubmitted: isSubmitted state will be unchanged.
- keepTouched: isTouched state will be unchanged.
- keepIsValid: isValid will temporarily persist as the current state until additional user actions.
- keepSubmitCount: submitCount state will be unchanged.

```js
const { register, handleSubmit, reset } = useForm();

reset(); // resets the entire form
```

# resetField

Reset an individual field state.

We can provied an optional object options:

- keepError: field error will be retained
- keepDirty: dirtyFields will be retained.
- keepTouched: touchedFields state will be unchanged.
- defaultValue: When this value is not provided, field will be revert back to it's defaultValue.

```js
resetField("fieldName");
resetField("firstName", { keepError: true });
```

# setFocus

This method will allow users to programmatically focus on input

```js
setFocus("firstName");
```

# trigger

Manually triggers form or input validation. This method is also useful when you have dependant validation (input validation depends on another input's value).

Triggers validation on all fields

```js
trigger():
```

Triggers validation on a specific field value by name

```js
trigger("yourDetails.firstName");
```

Triggers validation on multiple fields by name.

```js
trigger(["yourDetails.firstName", "yourDetails.lastName"]);
```

Should focus the input during setting an error.

```js
trigger("name", { shouldFocus: true }); //
```

# setError

The function allows you to manually set one or more errors.

- `name`: input's name.
- `error`: set an error with its type and message.
  - `{ type: string, message?: string, types: MultipleFieldErrors }`
- `config` - should focus the input during setting an error.
  - `{ shouldFocus?: boolean }`

```js
const {
  register,
  setError,
  formState: { errors },
} = useForm();

setError("test", { type: "focus" }, { shouldFocus: true });
```

# clearErrors

This function can manually clear errors in the form.

```js
register("test.firstName", { required: true });
register("test.lastName", { required: true });
clearErrors("test"); // will clear both errors from test.firstName and test.lastName
clearErrors("test.firstName"); // for clear single input error
```

# control

This object contains methods for registering components into React Hook Form.

_Important_: do not access any of the properties inside this object directly. It's for internal usage only

```js
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control } = useForm();

  return (
    <Controller
      render={({ field }) => <input {...field} />}
      name="firstName"
      control={control}
      defaultValue=""
    />
  );
}
```

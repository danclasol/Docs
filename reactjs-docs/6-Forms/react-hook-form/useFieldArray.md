# useFieldArray

Custom hook for working with Field Arrays (dynamic form).

## props

- `name` (required): Name of the field array
- `control`: control object provided by useForm. It's optional if you are using _FormContext_.
- `shouldUnregister`: Whether Field Array will be unregistered after unmount.
- `keyName`
- `rules`: The same validation rules API as for register, which includes:

  - required, minLength, maxLength, validate

## Return

- `fields`: This object contains the defaultValue and key for your component.

- `append`: Append input/inputs to the end of your fields and focus. The input value will be registered during this action.

  - _Important_: append data is required and not partial.

- `prepend`: Prepend input/inputs to the start of your fields and focus. The input value will be registered during this action.

  - _Important_: prepend data is required and not partial.

- `insert`: Insert input/inputs at particular position and focus.

  - _Important_: insert data is required and not partial.

- `swap`: Swap input/inputs position.

- `move`: Move input/inputs to another position.

- `update`: Update input/inputs at a particular position, updated fields will get unmount and remount. If this is not desired behavior, please use setValue API instead.

  - _Important_: update data is required and not partial.

- `replace`: Replace the entire field array values.

- `remove`: Remove input/inputs at particular position, or remove all when no index provided.

# Example

```js
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      // defaultValues: {}; you can populate the fields by this attribute
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`test.${index}.firstName`)} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}
```

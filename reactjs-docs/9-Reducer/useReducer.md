# useReducer

`useReducer` is a React Hook that lets you add a reducer to your component,

Very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.

Recommeneded when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

## Parameters

- `reducer`: function that specifies how the state gets updated.

  - It must be pure, should take the state and action as arguments, and should return the next state.
  - State and action can be of any types.

- `initialArg`: The value from which the initial state is calculated.

  - It can be a value of any type.
  - How the initial state is calculated from it depends on the next init argument.

  ```js
  const [state, dispatch] = useReducer(reducer, { name: "Taylor", age: 42 });
  ```

- `init` (optional): The initializer function that should return the initial state.

  - If it’s not specified, the initial state is set to `initialArg`.
  - Otherwise, the initial state is set to the result of calling init(`initialArg`).

  ```js
  const [state, dispatch] = useReducer(reducer, null, getInitialValue); // init function won't received any params
  const [state, dispatch] = useReducer(reducer, 35, getInitialValue); // init function receive  as params 35

  const getInitialValue = (param) => {
    return { name: "Taylor", age: param };
  };
  ```

## Returns

`useReducer` returns an array with exactly two values:

- `state`: current state.

  - Same behavoir as _useState_
  - During the first render, it’s set to init(`initialArg`) or `initialArg` (if there’s no `init`).

- `dispatch`: function that lets you update the state to a different value and trigger a re-render.

# dispatch function

The `dispatch` function lets you update the state to a different value and _trigger_ a _re-render_.

```js
const [state, dispatch] = useReducer(reducer, { name: "Taylor", age: 42 });

function handleButtonClick() {
  dispatch({ type: "incremented_age" });
}

function handleInputChange(e) {
  dispatch({
    type: "changed_name",
    nextName: e.target.value,
  });
}
```

React will set the next state to the result of calling the _reducer_ function you’ve provided with the current state and the action you’ve passed to `dispatch`.

## Parameters

- `action`: The action performed by the user.
  - It can be a value of any type.
  - By convention, an action is usually an object with a `type` property identifying it
  - Optionally, other properties with additional information.

## Returns

- `dispatch` functions do not have a return value.

# Avoiding recreating the initial state

React saves the initial state once and ignores it on the next renders.

# Implementation

## Reducer function

Reducer function will calculate and return the next state depending on the action recieved as parameter.

By convention, it's common to use a switch statement, where each case in the switch, calculate and return some next state.

```js
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
```

## Initial State

```js
const initialState = { name: "Taylor", age: 42 };
```

## Add useReducer in component

Call `useReducer` at the top level of your component to manage state with a reducer.

`useReducer` returns an array with exactly the state and the dispatch function

```js
import { useReducer } from 'react';

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
```

To update what’s on the screen, call dispatch with an object representing what the user did, called an action:

```js
function handleClick() {
  dispatch({ type: "incremented_age" });
}
```

# Forms

When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript.

It can be cumbersome to manually wire up value bindings and change event listeners

```html
<input :value="text" @input="event => text = event.target.value" />
```

The `v-model` directive helps us simplify the above to

```html
<input v-model="text" />
```

## Text​

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```

## Multiline Text

```html
<textarea v-model="message" placeholder="add multiple lines"></textarea>
<p>Message is: {{ message }}</p>
<textarea v-model="message"></textarea>
```

## Checkbox​

Single checkbox, boolean value

```html
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

## Multiple checkboxes

We can also bind multiple checkboxes to the same array or Set value:

```js
const checkedNames = ref([]);
```

```html
<div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames" />
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
<label for="mike">Mike</label>
```

## Radio

```html
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
```

## Select

Single select:

```html
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

Select options can be dynamically rendered with v-for:

```js
const selected = ref("A");

const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);
```

```html
<select v-model="selected">
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>

<div>Selected: {{ selected }}</div>
```



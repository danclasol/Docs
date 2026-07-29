# Loop Directives

## `v-for`

Loops through lists

- `:key` helps Vue to identify each element
- prevents rendering issues when items are added, removed, or reordered
- improves performance

```html
<li v-for="item in items" :key="item.id">
    {{ item.name }}
</li>
```

We can also destructurate to simplify the sintax

```html
<li v-for="{id, name} in items" :key="item.id">
    {{ id }} - {{ name }}
</li>
```

You can access the index as the second parameter.

```html
<li v-for="(item, index) in items" :key="item.id"> 
    {{ id }} - {{ name }}
</li>
```
# Template Syntax

Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data.

All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

Under the hood, Vue compiles the templates into highly-optimized JavaScript code. Combined with the reactivity system, Vue can intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.

If you are familiar with Virtual DOM concepts and prefer the raw power of JavaScript, you can also directly write render functions instead of templates, with optional JSX support.

However, do note that they do not enjoy the same level of compile-time optimizations as templates.

## Text Interpolation​

The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):

- the value of the msg property from the corresponding component instance will be replace by the mustage tag
- updated whenever the msg property changes

```html
<span>Message: {{ msg }}</span>
```

## Using JavaScript Expressions​

Vue supports the full power of JavaScript expressions inside all data bindings:

```
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
```

```html
<div :id="`list-${id}`"></div>
```

### Expressions Only​

Each binding can only contain one single expression. An expression is a piece of code that can be evaluated to a value. A simple check is whether it can be used after return.

Therefore, the following will NOT work:

```
{{ var a = 1 }}
{{ if (ok) { return message } }}
```

### Calling Functions​

It is possible to call a component-exposed method inside a binding expression:

```html
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

## Raw HTML​

The double mustaches interpret the data as plain text, not HTML. In
order to output real HTML, you will need to use the v-html directive:

```html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use v-html on trusted content and never on user-provided content.

# Strings

The String object is used to represent and manipulate a sequence of characters.

Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

```js
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
```

# Character access

There are two ways to access an individual character in a string.

The first is the `charAt()` method:

```js
return "cat".charAt(1); // returns "a"
```

The other way (introduced in `ECMAScript 5`) is to treat the string as an array-like object, where individual characters correspond to a numerical index:

```js
return "cat"[1]; // returns "a"
```

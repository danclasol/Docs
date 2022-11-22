# Modify style

```css
::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
```

# Avoid resize window width

```css
html {
  max-height: 100%;
  display: block;
  overflow: overlay;
}
```

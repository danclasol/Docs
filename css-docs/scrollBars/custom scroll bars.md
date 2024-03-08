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

## scrollbar-color

Sets the color of the scrollbar track and thumb.

When `scrollbar-color` value is set on the document's root element, the values are applied to the viewport scrollbars.

### Values

- the first value applies to color of the thumb
- the second value to the color of the track

```css
scrollbar-color: red green;
```

## scrollbar-width

Sets the maximum thickness of an element's scrollbars where they are shown

### Values

- `auto`: default width
- `thin`: thinner scrollbar width than default (if platform provides)
- `none`: hide scrollbar, but still be scrollable

```css
scrollbar-width: thin;
```

## scrollbar-gutter

Allows to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.

Reserve space for the scrollbar.

```css
scrollbar-gutter: stable;
```

Reserve space for the scrollbar on both edges.

```css
scrollbar-gutter: stable both-edges;
```

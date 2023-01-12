# with flexbox

Set container with `display: flex`, and use the properties `justify-center` and `align-items` to center the children

```html
<div class="container">
  <div class="item">1</div>
</div>
```

```css
.container {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

# with grid

All elements will have the `width` of the wider element.

```css
.container {
  display: grid;
  place-content: center;
}
```

# center position absolute element with transform

An item with `position: absolute` inside a `flexbox` container won't be centered with `justifiy-content` or `align-items`

Instead we can use `transform` to center elements with `absolute`.

```css
.container {
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px dashed #fff;
  display: flex;
  justify-content: center;
}
```

We can't achive this only with `top: 50%` and `left: 50%`, but we can move it 50% of its size

```css
.item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  background-color: lightgreen;
  transform: translateX(-50%, 50%);
}
```

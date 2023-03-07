# Event bubbling, capturing y stopPropagation

## Bubbling

```js
<div
	onClick={ev => {
		console.log('DIV - Target', ev.target)
		console.log('DIV - CurrentTarget',ev.currentTarget)}>
	<button
		onClick={ev => {
			ev.stopPropagation(); -> Para el bubbling, por lo que no se ejecutara el click del DIV
			console.log('BTN - Target',ev.target) -> <button>
			console.log('BTN - CurrentTarget',ev.currentTarget)> -> <div>
	}>Click</button>
}
</div>
```

## Capturing

```js
<div
	onClick={ev => {
		console.log('DIV - onClick')}

	onClickCapture={ev => {
		console.log('DIV - onClickCapture')}>
	<button
		onClick={ev => {
			console.log('BTN - onClick')}

		onClickCapture={ev => {
			ev.stopPropagation(); -> para la ejecucion de eventos
			console.log('BTN - onClickCapture')}
	}>Click</button>
}
</div>
```

# Atributos

## autofocus

Poner el focus automaticamente en un input

```html
<input type="text" autofocus />
```

## `pattern`

```html
<form>
  <input pattern="[0-9]{3}" type="text" required />
</form>
```

## multiple

En input type=file. Permite seleccionar varios archivos

```html
<input type="file" multiple />
```

En select permite seleccionar varios elementos

```html
<select multiple>
  <option>Cerveza Stout</option>
  <option>Cerveza IPA</option>
  <option>Cerveza Lager</option>
  <option>Cerveza Ale</option>
  <option>Cerveza Porter</option>
</select>
```

## step

Especifica el numero en el que queremos que vaya saltando los numeros

```html
<input type="number" min="1" max="100" step="3" />
<input type="range" min="1" max="100" step="10" />
```

Tambien funciona con input de tiempos.

En este caso seran saltos de 15 minutos

```html
<input type="time" min="09:00" max="100" step="900" />
```

# Utils

## Autocompletado de con datalist

Creamos la lista de posibles correos y lo asociamos con el input.

De esta manera, se autocompletar con los emails de la lista

```html
<input type="email" list="myEmails" required />

<datalist id="myEmails">
  <option value="peter@gmail.com">Peter</option>
  <option value="marie@gmail.com">Marie</option>
  <option value="john@gmail.com">John</option>
  <option value="daniel@gmail.com">Daniel</option>
</datalist>
```

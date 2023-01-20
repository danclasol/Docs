# API Drag & Drop

En la mayoría de navegadores, el texto seleccionado, las imágenes y los enlaces se pueden arrastrar de forma predeterminada.

Sin embargo, para hacer que otros tipos de contenido se puedan arrastrar hace uso de la API Drag and Drop

## Habilitar arrastre de un elemento

Hay que añadir el atributo `draggable=true` al elemento que queremos arrastrar

```html
<div id="item" class="item" draggable="true">Item</div>
```

# Eventos

Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo.

Para controlar estas acciones tenemos varios eventos de cada una de las partes

# Drag origen events

## dragstart

Se dispara al comenzar a arrastrar

```js
element.addEventListener("dragstart", () => {});
```

## drag

Se dispara mientras arrastramos

```js
element.addEventListener("drag", () => {});
```

## dragend

Se dispara cuando soltamos el objeto

```js
element.addEventListener("dragend", () => {});
```

# Drop destination events

## dragenter

Se dispara cuando el objeto entra en la zona de destino

```js
dropZone.addEventListener("dragenter", () => {});
```

## dragover

Se dispara cuando el objeto se mueve sobre la zona de destino

```js
dropZone.addEventListener("dragover", () => {});
```

## drop

Se dispara cuando soltamos el objeto en la zona de destino

```js
dropZone.addEventListener("drop", () => {});
```

## dragleave

Se dispara cuando el objeto sale de la zona de destino

```js
dropZone.addEventListener("dragleave", () => {});
```

# DataTransfer

Esta propiedad presente en todos los eventos de arrastre contiene datos sobre la operación de arrastre y colocación.

## setData(format, data)

Establece la información que queremos compartir

```js
e.dataTransfer.setData("text/plain", e.target.id);
```

## getData(format)

Establece la información que queremos obtener

```js
e.dataTransfer.getData("text");
```

## clearData(format)

Limpia el tipo de información establecido

```js
e.dataTransfer.clearData(); // elimina todos los tipos
e.dataTransfer.clearData("text"); // elimina solo el tipo 'text'
```

## dropEffect

Obtiene el tipo de operacion de transferencia de los ficheros:

- copy
- link
- move
- none

## effectAllowed

Obtiene todos los tipos de operaciones de transferencia disponibles.

- copy, copyLink
- link, linkMove
- move
- all
- uninitialized

# Drop files from system

Cuando arrastramos ficheros podemos utilizar las propiedades para obtener informacion sobre ellos.

## items

Contiene un objeto `DataTransferItemList` con una lista de los ficheros arrastrados.

```js
// Usar la interfaz DataTransferItemList para acceder a el/los archivos)
for (let i = 0; i < ev.dataTransfer.items.length; i++) {
  // Si los elementos arrastrados no son ficheros, rechazarlos
  if (ev.dataTransfer.items[i].kind === "file") {
    const file = ev.dataTransfer.items[i].getAsFile();
    console.log(file.name);
  }
}
```

## files

Contiene una lista de los ficheros locales disponibles en la transferencia de archivos.

```js
// Usar la interfaz DataTransfer para acceder a el/los archivos
for (let i = 0; i < ev.dataTransfer.files.length; i++) {
  const file = ev.dataTransfer.files[i].name;
  console.log(file.name);
}
```

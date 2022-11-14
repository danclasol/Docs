# Transitions

Las transiciones se basan en conseguir un efecto suavizado entre un estado inicial y un estado final al realizar una acción.

## Ejemplo

Ejemplo sencillo:

```css
.box {
  background: red;
  transition: background 1s;
}

.box:hover {
  background: blue;
}
```

# Propiedades animables y estado por defecto.

No todas las propiedades de CSS se pueden animar, por norma general, todas las propiedades que se puedan representar con valores numéricos son animables, hay algunas excepciones que no son animables directamente con CSS, pero que se pueden animar con la ayuda de JavaScript.

Es importante conocer qué propiedades tienen un estado por defecto y cual no, como el estado de las propiedades iran de A -> B, si tenemos un valor por defecto, scale(1) por ejemplo, no será necesario especificar el punto A, en otras propiedades como background, habrá que especificar el punto A y el B

# Transiciones y animaciones

Aunque puedan parecer lo mismo visualmente, en CSS tenemos dos formas distintas de realizar animaciones:

- `transition`
- `animation`, la principal diferencia es que `transition` necesita un trigger o disparador por parte del usuario (un hover por ejemplo), y las animaciones pueden lanzarse cuando nosotros queramos,

Otra diferencia importante es que las transiciones suelen ser simples (A -> B) y las animaciones permiten hacer cambios de estado mucho más complejos y con un mayor control.

# Propiedades

Las propiedades CSS que podemos utilizar relacionadas con las transciones son las siguientes:

## transition-property

Define las propiedades CSS en las que el efecto de la transición debe aplicarse.

- all (valor por defecto): no se recomienda usarlo nunca por temas de rendimiento.
- none: no se aplica transición.
- propiedad css: aplica solo la propiedad especificada

```css
/* Primer ejemplo: Anima todas las propiedades que cambien de estado */
transition-property: all 4s;

/* Segundo ejemplo: Anima sólo el ancho, el resto no transicionan, cambian de golpe */
transition-property: width 4s;
```

## transition-duration

Tiempo que debe tardar una animación de transición en completarse.

Este valor es obligatorio ya que el navegador necesita una duración para poder calcular la transición.

Podemos establecer el valor en "s" o "ms".

```css
transition-property: width;
transition-duration: 4s;
```

## transition-delay

Permite retrasar el inicio de la transición un número de segundos determinado. Si se omite, la transición comienza inmediatamente.

Podemos establecer el valor en "s" o "ms"

```css
/* Tardará 2 segundos en empezar la transición */
transition-property: width;
transition-duration: 4s;
transition-delay: 2s;
```

## transition-timing-function

Permite establecer una curva de aceleración para que la velocidad de la transición pueda variar a lo largo de su duración, tenemos varios valores disponibles.

- ease: Las animaciones comienzan a una velocidad media y se desaceleran hacia el final.
- ease-in: Las animaciones comienzan lentamente y se aceleran al final.
- ease-out: Las animaciones comienzan rápido y se frenan al final.
- ease-in-out: Las animaciones comienzan y terminan lentamente, pero se mueven rápidamente en el centro.
- linear: Las animaciones cambian a una velocidad constante.
- steps(n): Las animaciones se reproducen en el número de pasos que establezcamos.
- cubic-bezier(): Permite hacer animaciones avanzadas personalizando toda la curva de animación.

Interfaz para crear funciones cubic-bezier: https://cubic-bezier.com

```css
transition-property: width 4s;
```

## Transition shorthand

Es muy habitual usar `transition` con el shorthand, las propiedades se pueden escribir en cualquier orden, pero es importante que si utilizáis `transtion-delay`, el valor aparezca después de `transition-duration`.
Por norma general se suele usar un orden por convención para que todo el mundo lo escriba igual.

```css
transition: transition-property transition-duration transtion-delay
  transition-timing-function;
transition: transition-property transition-duration transition-timing-function
  transtion-delay;
```

## Animar varias propiedades

Para animar varias propiedades las pondremos dentro del valor `transition-property` separadas por comas, y en los valores de `transition-duration` y `transition-delay` si sólo ponemos un valor se aplicará a todas las propiedades y si queremos distintos tiempos los separaremos por comas en el mismo orden que las declaramos en `transition-property`

```css
transition-property: transform, color;
transition-duration: 1s, 2s;
transition-delay: 2s, 1s;

/* Shorthand */
transition: transform 1s 2s, color 2s 1s;
```

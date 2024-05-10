# Convenciones y nomenclaturas

En `JavaScript`, existen diferentes nomenclaturas para nombrar las variables:

- _camelCase_
- _snake_case_
- _SCREAMING_CASE_

# camelCase

`camelCase` es la forma más común de nombrar las variables en JavaScript. Consiste en escribir la primera palabra en minúsculas y las siguientes palabras con su primera letra en mayúsculas.

```js
let camelCase = 1;
let camelCaseIsCool = 2;
let userName = "midudev";
```

# snake_case

`snake_case` es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones bajos.

```js
let snake_case = 1;
let snake_case_is_cool = 2;
let user_name = "midudev";
```

En algunos lenguajes de programación es muy común usar `snake_case` para nombrar las variables. En _JavaScript_ no lo es tanto, pero todavía puedes encontrar código que lo use.

Lo más habitual, y es buena idea, es usarlo en los nombres de archivos. Por ejemplo, `mi_archivo.js`. Esto es porque algunos sistemas operativos distinguen entre mayúsculas y minúsculas y, por tanto, `mi_archivo.js` y Mi_archivo.js son dos archivos diferentes.

# kebab-case

También existe `kebab-case`, que es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones. Por ejemplo: `mi-archivo.js`.

Es muy similar a `snake_case` pero con guiones en vez de guiones bajos. No se puede usar para nombrar variables pero sí es común usarlo en los nombres de archivos.

# SCREAMING_CASE

`SCREAMING_CASE` es una forma de nombrar que consiste en escribir todas las palabras en mayúsculas y separarlas con guiones bajos.

```js
const SCREAMING_CASE = 1;
const SCREAMING_CASE_IS_COOL = 2;
const USER_NAME = "midudev";
```

Para las constantes, con valores que no van a cambiar, es muy común usar `SCREAMING_CASE`.

Así se puede distinguir fácilmente de las variables que sí cambian de valor. Por eso, no debes usarla para nombrar variables con let.

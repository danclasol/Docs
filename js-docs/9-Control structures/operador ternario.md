# Operador ternario

`(condición) ? true : false`

`(condición) ? (primera sentencia, segunda sentencia) : (primera sentencia, segunda sentencia) `

```js
let num = 3;

/_ if(num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`); _/

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ?
(
console.log(`${num} es par`),
console.log(`${num} es par 2`)
)
:
(
console.log(`${num} es impar`),
console.log(`${num} es impar`)
)
```

# Operadores binarios

Operadores a bajo nivel (a nivel de bits).

Permite trabajar a nivel binario, donde los operandos solo pueden tomar valores de 0 o 1.

No se utilizan demasiado.

## Operador AND

Devuelve 1 si ambos operandos son 1.

```js
a & b;
```

## Operador OR

Devuelve 1 si al menos un operando es 1.

```js
a | b;
```

## Operador XOR (OR exclusivo)

Devuelve 1 si ambos operandos son diferentes.

```js
a ^ b;
```

## Operador NOT (unario)

Invierte los bits del operando (por ejemplo, 000101 pasa a 111010). Trunca a 32 bits.

```js
~a;
```

## Operador LEFT SHIFT

Desplazamiento de bits hacia la izquierda. Ej: 11 (3) pasa a 110 #(6).

```js
a << b;
```

## Operador RIGHT SHIFT

Desplazamiento de bits hacia la derecha. Ej: 11 (3) pasa a 1 (1).

```js
a >> b;
```

## Operador RIGHT SHIFT sin signo

Desplazamiento de bits hacia la derecha, como un operador sin signo.

```js
a >>> b;
```

```
 a   b     AND   OR    XOR     NOT AND   NOT OR   NOT XOR
--- ---   ----- ----- -----   --------- -------- ---------
 0   0      0     0     0         1         1        1
 0   1      0     1     1         1         0        0
 1   0      0     1     1         1         0        0
 1   1      1     1     0         0         0        1
```

Sin embargo, pueden utilizarse valores mas complejos diferentes de 0 y 1, por lo que necesitaríamos más conocimientos de como operar con números binarios y sus fundamentos.

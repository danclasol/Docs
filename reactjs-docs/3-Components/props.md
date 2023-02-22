# Props

Las _props_ son las propiedades de un componente.

Se trata de un objeto que se pasa como argumento de un componente padre a un componente hijo. Además, son inmutables y no se pueden modificar dese el componente hijo.

Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.

Tienen como ventaja frente a si fuera una lista de parametros que:

- No importa el orden en el que añadamos las props
- Todas las props son opcionales

## Children

La propiedad _children_ es una _prop_ especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente.

```js
const Title = ({ children }) => <h1>{children}</h1>;
```

Todo lo que coloquemos entre la etiquetas de inicio y cierre, sera lo que reciba el componente como _children_

```js
const app = (
  <div>
    <Title>Hello world!</Title>
  </div>
);
```

# Destructuring props

Al tratarse de _props_ de un objeto, nos va a permitir usar eldestructuring para:

- Evitar tener que poner el props.
  - ~~`<span>{props.name}</span>`~~
  - `<span>{name}</span>`
- Nos permite poner valores por defecto a las props
  - `active='Activo'`
- Renombrar alguna props
  - `name: displayName`

## Ejemplo sin destructuring

```js
const User = (props) => {
  return (
    <div className="User">
      <span>{props.name}</span>
      <span>{props.active}</span>
      <span>{props.rol}</span>
    </div>
  );
};
```

## Ejemplo con destructuring

```js
const User = ({ name: displayName, active = "Activo", role = "student" }) => {
  return (
    <div className="User">
      <span>{displayName}</span>
      <span>{active}</span>
      <span>{rol}</span>
    </div>
  );
};
```

# Spread operator

Con el operador `...()`, podemos hacer lo siguiente:

- Podemos recoger el resto de parametros añadiendo el `...props`
  - `({ name, active, role, ...resto })`
  - Aqui iran el resto de _props_ que no sean los que ya se han añadido, es decir, los que no hayan sido desctructurados anteriormente (name, active o role)
- Lo podemos usar para pasarlo por ejemplo para pasarselo a una etiqueta

```js
const User = ({ name, active, role, ...resto }) => {
  return (
    <div className="User" {...resto}>
      <Title />
      <span>{name}</span>
      <span>{active}</span>
      <span>{rol}</span>
    </div>
  );
};
```

- En este ejemplo, _onClick_ no lo estamos destructurando, por lo que llegará en el `...resto`

```js
const app = (
  <div>
    <User
      name="John Smith"
      active="Activo"
      role="Profesor"
      onClick={() => {
        console.log("Click");
      }}
    />
  </div>
);
```

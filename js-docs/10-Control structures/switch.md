# switch

The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + expr + ".");
}
```

# Grouping cases

We can group _cases_ to avoid repeating the same code for diferentes _cases_.

```js
const day = new Date().getDay();

switch (day) {
  case 0:
  case 6:
    console.log("Today is weekend!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Work Day!");
    break;
  case 5:
    console.log("It's Friday!");
    break;
}
```

# switch(true)

We can ignore the value of the expression passed to the `switch` to evaluate conditions in every case.

This is an advanced alternative to `if...else`, it is not very common but is posible to use it.

```js
let age = 25;

switch (true) {
  case age >= 18 && age < 25:
    console.log("Young");
    break;
  case age >= 25 && age < 40:
    console.log("Mature");
    break;
  case age >= 40:
    console.log("Elder");
    break;
  default:
    console.log("Child");
}
```

# Problemas de switch

Esta estructura de control no esta del todo optimizada para usarse con JS. Por lo que es recomendable intentar evitar su uso.

Aqui mostramos un ejemplo de la alternativa a usar switch

```js
const GAME_RULES = {
  PIEDRA: { TIJERA: true, PAPEL: false },
  PAPEL: { PIEDRA: true, TIJERA: false },
  TIJERAS: { PAPEL: true, PIEDRA: false },
};

function game(player1, player2) {
  if (player1 === player2) return "Empate";

  if (GAME_RULES[player1][player2]) {
    return "Player 1 gana";
  } else {
    return "Player 2 gana";
  }

  // switch (player1) {
  //   case "PIEDRA":
  //     switch (player2) {
  //       case "PAPEL":
  //         return "Player 2 gana";
  //       default:
  //         return "Player 1 gana";
  //     }
  //   case "PAPEL":
  //     switch (player2) {
  //       case "TIJERA":
  //         return "Player 2 gana";
  //       default:
  //         return "Player 1 gana";
  //     }
  //   case "TIJERAS":
  //     switch (player2) {
  //       case "PIEDRA":
  //         return "Player 2 gana";
  //       default:
  //         return "Player 1 gana";
  //     }
  // }
}

console.log(game("PIEDRA", "PIEDRA"));
console.log(game("PIEDRA", "PAPEL"));
console.log(game("TIJERAS", "PAPEL"));
```

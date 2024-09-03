# Logical operators

### `&&`

Logical AND. Executes the second command only if the first one succeeds.

```sh
if [ $num -gt 0 ] && [ $num -lt 10 ]; then
```

### `||`

Logical OR. Executes the second command only if the first one fails.

```sh
if [ $num -gt 0 ] || [ $num -lt 10 ]; then
```

### `!`

Logical NOT. Inverts the result of a condition.

```sh
if ! [ $num -eq 10 ]; then
```

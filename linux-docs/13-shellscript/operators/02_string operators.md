# String operators

### `=`

Checks if two strings are equal.

```sh
if [ "$str1" = "$str2" ]; then
```

### `!=`

Checks if two strings are not equal.

```sh
if [ "$str1" != "$str2" ]; then
```

### `-z`

Checks if the string is null (empty).

```sh
if [ -z "$str1" ]; then
```

### `-n`

Checks if the string is not null (not empty).

```sh
if [ -n "$str1" ]; then
```

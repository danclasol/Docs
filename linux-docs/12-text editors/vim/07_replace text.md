# Replace on the current Line

## Replace first occurrence

Replaces the first occurrence of "oldtext" with "newtext" on the current line.

```sh
:s/oldtext/newtext/
```

## Replace all occurrences

The `g` at the end stands for global, meaning all occurrences on the current line will be replaced.

```sh
:s/oldtext/newtext/g
```

# Replace text in the entire file

## Replace first occurrence

Replace the first occurrence of _oldtext_ with _newtext_ in every line of the file.

```sh
:%s/oldtext/newtext/
```

## Replace all occurrences

The `g` ensures all occurrences in the file are replaced.

```sh
:%s/oldtext/newtext/g
```

# Count files content

Counts the number of lines, words, and characters in a file.

```sh
wc [options] [file...]
```

## Common use

Display the number of lines, words, and bytes in the file.

```sh
wc -l file.txt
```

## Options

### `-l`

Counts the number of lines.

```sh
wc -l file.txt
```

### `-w`

Counts the number of words.

```sh
wc -w file.txt
```

### `-c`

Counts the number of bytes.

```sh
wc -c file.txt
```

### `-m`

Counts the number of characters.

```sh
wc -m file.txt
```

### `-L`

Displays the length of the longest line (in terms of characters).

```sh
wc -L file.txt
```

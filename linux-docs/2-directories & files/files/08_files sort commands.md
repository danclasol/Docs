# Sort lines in files

Sort lines of text files or input data.

```sh
sort [options] [file...]
```

## Common Use

Sorts the lines in ascending order and outputs the sorted lines to the terminal.

```sh
sort file.txt
```

## Options

### `-r`

Sort lines in descending order.

```sh
sort -r file.txt
```

### `-n`

This will sort the lines numerically.

```sh
sort -n numbers.txt
```

### `-o`

Specifies an output file where the sorted results should be saved.

```sh
sort [options] -o output_file input_file
```

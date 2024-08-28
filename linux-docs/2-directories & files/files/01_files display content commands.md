# View file content

In Linux, there are several commands you can use to visualize or view the contents of a file.

- `cat`: Display the entire content of a file

Display only part of the file content

- `head`: Display the first 10 lines of a file
- `tail`: Display the last 10 lines of a file

Display

- `more`: View the content of a file page by page. Useful for large files.
- `less`: Similar to more, but with more features like backward navigation.

### `cat`

The `cat` command is used to display the contents of files, concatenate files, and redirect output to other files or commands.

```sh
cat fileName.txt
```

Display file content with line numbers

```sh
cat -n filename.txt
```

Concatenate and redirect output to a new file

```sh
cat file1.txt file2.txt > combined.txt
```

Append content from one file to another

```sh
cat notes.txt >> final_notes.txt
```

### `head`

Display the first few lines of a file or files. By default, it shows the first 10 lines.

```sh
head filename.txt
```

Specify the number of lines to display

```sh
head -n 5filename.txt
```

Display the first few bytes of a file

```sh
head -c 20 filename.txt
```

### `tail`

Display the last lines of a file or files. By default, it shows the last 10 lines.

```sh
tail filename.txt
```

Specify the number of lines to display

```sh
tail -n 5filename.txt
```

Display the first few bytes of a file

```sh
tail -c 20 filename.txt
```

### `file`

Shows the type of file

```sh
file file.txt
```

Try to look inside compressed files.

```sh
file -z compressed_file.gz
```

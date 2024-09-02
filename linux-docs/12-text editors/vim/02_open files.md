# Open files

Opens the file in the current directory. If the file doesn't exists it creates it with the specified filename.

```sh
vi file.txt
```

Opens the file in the specified directory. If the file doesn't exists it creates it with the specified filename.

```sh
vi /usr/local/filename.txt
```

Open multiple files at the same time.

```
vi file1 file2 file3
```

## Options

## `-R`

Open a file in read-only mode.

```sh
vi -R file.txt
```

### `-r`

Recovery file

```sh
vi -r file.txt
```

### `+[number]`

Open a file at a specific line number

```sh
vi +[number] file.txt
```

### `+/[]`

Open a file at a specific word.

```sh
vi +/[word] file.txt
```

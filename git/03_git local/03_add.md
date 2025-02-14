# `add`

Add file contents to the index.

```sh
git add <FILE>
```

## Common use

Add file from a directory.

```sh
git add <DIRECTORY>/<FILE>
```

Add multiple files

```sh
git add file1.js file2.js
```

Add all files of an specific type

```sh
git add *.js
git add *.html
```

Add all modified files from the current workspace

```sh
git add .
```

Add all modified files from a directory

```sh
git add resources/*
```

## Options

### `--all` or `--A`

Add all modified files

```sh
git add --all
git add --A
```

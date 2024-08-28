# Path

In Linux, the path of a directoy refers to the location of that directory within the filesystem.

## Path Separators

Linux uses the forward slash `/` as the directory separator.

```bash
/home/user/documents
```

Windows uses the backslash `\) as the directory separator.

```bash
C:\Users\user\documents
```

## Case Sensitivity

Linux is case-sensitive, so the following files are all different.

```bash
File.txt
file.txt
FILE.TXT
```

However, Windows is case-insensitive, but case-preserving. This means that **File.txt** and **file.tx**t refer to the same file, but the original case is preserved in the file name.

## Types

Routes can be relative or absolute

### absolute

It provides the complete path to the file or directory.

- Always begin with a `/`

```bash
/home/user/documents
```

### relative route

Specifies a location starting from the current working directory

- It does not start with a `/`.

```bash
documents/dir1/file
```

## Special Symbols

### `.`

Refers to the current directory.

```bash
ls . # List contents of the current directory
```

### `..`

Refers to the parent directory.

```bash
cd .. # Moves to the parent directory
```

### `~`

Refers to the current user's home directory.

```bash
cd . # Moves to the home directory
```

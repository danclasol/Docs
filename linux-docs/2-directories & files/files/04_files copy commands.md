# Copy files

Copy files and directories from one location to another.

```sh
cp [options] source destination
```

## Common uses

Copy a file to a new location:

```sh
cp file1.txt /home/user/documents/
```

Copy a file and rename it

```sh
cp file1.txt file2.txt
```

Copy multiple files to a directory

```sh
cp file1.txt file2.txt file3.txt /home/user/documents/
```

## Options

### `-r` or `-R`

Copy a directory and its contents recursively, including all files and subdirectories

```sh
cp -r /home/user/documents/ /home/user/backup/
```

### `-i`

Interactive mode. Prompt before overwriting files.

```sh
cp -i file1.txt /home/user/documents/
```

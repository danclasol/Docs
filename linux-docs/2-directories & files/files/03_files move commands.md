# Move files

Move or rename files and directories.

```sh
mv [options] source destination
```

## Common uses

Move a File to a Different Directory:

```sh
mv file1.txt /home/user/documents/
```

Rename a file

```sh
mv oldname.txt newname.txt
```

Move multiple files to a directory

```sh
mv file1.txt file2.txt /home/user/documents/
```

Move a directory and its contents

```sh
mv /home/user/documents/ /home/user/backup/
```

Move folder up in hierarchy

```sh
mv <folderName>/ ..
```

## Options

### `-i`

Interactive mode. Prompts before overwriting existing files.

```sh
mv -i file1.txt /home/user/documents/
```

### `-f`

Force move by overwriting the destination file without prompting.

```sh
mv -f file1.txt /home/user/documents/
```

### `-n`

Do not overwrite an existing file.

```sh
mv -n file1.txt /home/user/documents/
```

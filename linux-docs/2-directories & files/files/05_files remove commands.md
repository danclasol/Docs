# Remove files

Remove (delete) files and directories.

```sh
rm [options] file_name(s)
```

## Common uses

Remove a single file

```sh
rm file1.txt
```

Remove multiple files

```sh
rm file1.txt file2.txt file3.txt
```

## Options

### `-d`

Remove an empty directory

```sh
rm -d empty_directory/
```

### `-r`

This command deletes a directory and all its contents, including subdirectories and files.

```sh
rm -r directory/
```

### `-f`

Force remove files without prompting, for confirmation, even if the file is write-protected.

```sh
rm -f file1.txt
```

### `-i`

Remove files interactively (Prompt before each removal)

```sh
rm -i file1.txt
```

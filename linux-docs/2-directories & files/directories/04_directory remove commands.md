# Remove directory

The `rmdir` command in Linux is used to remove empty directories.

Unlike the `rm -r` command, which can delete directories and their contents, `rmdir` only works on directories that are empty.

```sh
rmdir [options] directory_name
```

## Common uses

Removes a directory if it is empty.

```sh
rmdir empty_directory/
```

Remove multiple directories if they are all empty

```sh
rmdir dir1 dir2 dir3
```

## Options

### `-p`

Remove directory and its parent directories if they are empty.

```sh
rmdir -p dir1/dir2/dir3/
```

### `-v`

Verbose mode. Print a message for each directory that is removed.

```sh
rmdir -v dir1/
```

# `rm`

Remove files from the working tree and from the index

```sh
git rm <FILES>
```

## Options

Removing a directory, all files will be removed recursively

```sh
git rm -r old_directory/
```

Force removing a modified file

```sh
git rm -f modified_file.txt
```

Remove file from repository but keep it locally in the workspace

```sh
git rm --cached file.txt
```

Check the files that will be remove

```sh
git rm -dry-run directory/
```

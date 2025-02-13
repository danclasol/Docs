# `clean`

Remove untracked files from the working tree.

Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.

```sh
git clean
```

## Options

### `-x`

Ignored files will also be removed

```sh
git clean -x
```

### `-f` or `--force`

Forces to removed all files avoing any configuration

```sh
git clean -f
```

### `-d`

Remove also files that didn't exists before

```sh
git clean -d
```

### `-i` or `--interactive`

Show what would be done and clean files interactively

```sh
git clean -i
```

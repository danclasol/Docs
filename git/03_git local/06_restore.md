# `restore`

Restore working tree files. The file must already be committed before in the repository.

```sh
git restore <FILE>
```

## Common use

Restore all files from current workspace

```sh
git restore .
```

Restore all files of an specific type

```sh
git restore '*.js'
```

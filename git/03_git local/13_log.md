# log

Show commit logs

- `q` to exit

```
git log
```

## Options

### `--pretty=<format>`

Pretty-print the contents of the commit logs in a given format

```sh
git log --pretty=oneline
```

### `--abbrev-commit`

Instead of showing the full 40-byte hexadecimal commit object name, show a prefix that names the object uniquely.

```sh
git log --abbrev-commit
```

### `--oneline`

This is a shorthand for `--pretty=oneline --abbrev-commit` used together

```sh
git log --oneline
```

# `reset`

Allows you to undo changes in your repository. It modifies the `HEAD` and optionally the index and working directory.

Reset current `HEAD` to the specified state.

- `HEAD`
- `HEAD^`
- `HEAD~2`

```sh
git reset
```

## Options

### `--`

Unstage any staged changes for the given file

```sh
git reset -- file.txt
```

### `--soft`

Undo last commit but keeping changes in working directory

```sh
git reset --soft HEAD~1
```

### `--hard`

Undo last commit discarding changes permanently

```sh
git reset --hard HEAD~1
```

### `--mixed`

Unstage Changes but Keep them in working directory

```sh
git reset --mixed HEAD~1
```

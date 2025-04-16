# `fetch`

Download changes (commit, branches, tags) from the remote repository without
merging those changes into your current working branch.

Allows to check what’s new on the remote before you decide to merge or rebase.

```sh
git fetch
```

## Common Uses

Fetch updates from the default remote (usually `origin`)

```sh
git fetch
```

Fetch from a specific remote

```sh
git fetch origin
```

Fetch a specific branch

```sh
git fetch origin main
```

After fetching, you can see the fetched changes by checking the remote branches

```sh
git log origin/main
```

You can also compare changes between your current branch and the fetched remote branch

```sh
git diff main..origin/main
```

## Options

### `--[no-]all`

Fetch all remotes, except for the ones that has the `remote.<name>.skipFetchAll` configuration variable set. This overrides the configuration variable `fetch.all`.

```sh
git fetch --all
```

### `-a` or `--append`

Append ref names and object names of fetched refs to the existing contents of `.git/FETCH_HEAD`. Without this option old data in `.git/FETCH_HEAD` will be overwritten.

```sh
git fetch -a
git fetch --append
```

# `pull`

Fetch from and integrate with another repository or a local branch

- downloads changes from the remote
- merges those changes into your current branch
- updates your working directory with the changes

It is essentially a combination of two commands

```sh
git fetch
git merge
```

The first time it will asked you enter a config

```sh
git pull
```

## Common Use

Sync your branch with the remote and automatically integrate changes

### With fetch and merge

- Step 1: Fetch the latest changes

  ```sh
  git fetch origin
  ```

- Step 2: Review the changes on the remote

  ```sh
  git diff main..origin/main
  ```

- Step 3: If you’re happy with the changes, merge them into your branch

  ```sh
  git merge origin/main
  ```

### With pull

Alternatively, if you want to skip the review process, you could do

```sh
git pull origin main
```

## Options

### `--rebase`

Rewrites your local commits on top of the fetched changes, leading to a linear history

The defaul is Merge which combines your changes and the fetched changes in a new commit

```sh
git pull --rebase origin main
```

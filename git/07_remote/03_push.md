# `push`

Update remote refs along with associated objects

```sh
git push
```

## Common Use

Push to a specific remote and branch

```sh
git push origin main
```

First time push (new branch), If you’ve created a new local branch and want to push it to the remote

- `-u` flag sets the upstream so future pushes can just be git push

```sh
git push -u origin new-branch
```

## Options

### `-f` or `--force`

Overwrites the remote branch with your local branch.

Useful for fixing history (e.g. after a rebase), but can delete others' work if you're not careful.

```sh
git push --force
```

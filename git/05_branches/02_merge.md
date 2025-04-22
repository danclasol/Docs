# `merge`

Join two or more development histories together

```sh
git merge
```

## Types of Merges

- Fast-forward merge:

  - when there are no new commits on the base branch since it diverged from the feature branch
  - git simply moves the pointer forward

- Three-way merge:
  - when both branches have new commits
  - git will create a merge commit

## Common Use

Merge a feature branch into your main branch (like main or master) after the feature is complete

```sh
git checkout main
git merge feature-branch
```

If there are merge Conflicts, git will pause and ask you to resolve the conflicts manually.

After resolving, you complete the merge with

```sh
git add .
git commit
```

Or

```sh
git merge --continue
```

## Options

### `--no-ff`

Forces a merge commit, even if a fast-forward is possible. Good for keeping branch history.

```sh
git merge --no-ff feature-branch
```

### `--abort`

Cancels a merge in progress if you've run into problems.

```sh
git merge --abort
```

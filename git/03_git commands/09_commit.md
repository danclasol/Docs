# `commit`

Create a new commit containing the current contents of the index and the given log message describing the changes.

```sh
git commit
```

## Options

### `-a` or `--all`

Automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.

```sh
git commit -a
```

### `-m` or `--message`

Add message

```sh
git commit -m "Add new search feature"
git commit --message="Add new search feature"
```

If multiple `-m` options are given, their values are concatenated as separate paragraphs

```sh
git commit -m "Add new search feature" -m "This new feature is awesome"
```

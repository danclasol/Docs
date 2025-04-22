# `commit`

Create a new commit containing the current contents of the index and the given log message describing the changes.

```sh
git commit
```

## Common Use

Creates a commit and adds a message describing the changes directly in the command line

```sh
git commit -m MESSAGE
```

Change the most recent commit message

- it opens your default text editor
- `i` to enter Insert mode (if you're not already in it)
- modify the commit message
- `ESC` to leave Insert mode
- `:wq` to save and close

```sh
git commit --ammend
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

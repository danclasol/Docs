# branch

```
git branch <>
```

# checkout

Switch branches or restore working tree files. Updates files in the working tree to match the version in the index or the specified tree.

```
git checkout <BRANCH>
```

Not recommend command because does too many thing and can be confusing.

- Better to use `restore` to restore files
- Better to use `switch` to switch between branches

If you want to check out all `js` source files out of the index

```
git checkout -- '\*.js'
```

Restore all files from current workspace

```
git checkout .
```

# switch

```
git switch <>
```

# merge

```
git merge <>
```

# mergetool

```
git mergetool <>
```

# stash

```
git stash <>
```

# tag

```
git tag <>
```

# worktree

```
git worktree <>
```

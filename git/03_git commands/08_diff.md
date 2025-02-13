# `diff`

Show changes between commits, commit and working tree, etc.

Changes in the working tree not yet staged for the next commit

```sh
git diff
```

## Common use

Changes between the index and your last commit; what you would be committing if you run git commit without `-a` option.

```sh
git diff --cached
```

Changes in the working tree since your last commit; what you would be committing if you run git commit `-a`

```sh
git diff HEAD
```

Changes in the working tree you've made to resolve textual conflicts so far.

```sh
git diff AUTO_MERGE
```

Changes between branches.

```sh
git diff <BRANCH_1> <BRANCH_2>
```

# `reflog`

Shows a log of all the changes made to the HEAD — basically, it keeps track of where your branches and commits have pointed, even if they’re no longer reachable through normal Git history.

- git's "undo" history tracker
- useful for recovering lost work
- only works locally

```sh
git reflog
```

Output might look like

```less
a1b2c3d HEAD@{0}: commit: Fix login bug
e4f5g6h HEAD@{1}: checkout: moving from main to feature-branch
z7y8x9w HEAD@{2}: commit (amend): Update README
...
```

Each entry tells you:

- commit ID
- action happened
- when it happened

## Recover a lost commit

If you accidentally deleted something, find the commit ID in `reflog`

```sh
git checkout a1b2c3d
```

Or to move a branch back to it

```sh
git reset --hard a1b2c3d
```

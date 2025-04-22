# `checkout`

Switch branches or restore working tree files. Updates files in the working tree to match the version in the index or the specified tree.

```sh
git checkout <BRANCH>
```

Not recommend command because does too many thing and can be confusing.

- Better to use `restore` to restore files
- Better to use `switch` to switch between branches

## Common Use

If you want to check out all `js` source files out of the index

```sh
git checkout -- '\*.js'
```

Restore all files from current workspace

```sh
git checkout .
```

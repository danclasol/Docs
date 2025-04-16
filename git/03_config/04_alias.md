# alias

In Git, an alias is a shortcut you can set up to make frequently used commands faster and easier to type.

- `alias.shortcut`: name of your custom shortcut

```sh
git config --global alias.shortcut 'actual command'
```

## Example

shorten git status

```sh
git config --global alias.st 'status'
```

Now you can run:

```sh
git st
```

## List aliases

To see all your aliases

```sh
git config --global --get-regexp alias
```

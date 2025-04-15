# `stash`

Git stash allows you to temporarily save your changes, or "stashes", when they're not yet ready for commit.

Useful when you need to work on multiple tasks, and want to switch between them without committing changes that are not complete.

```sh
git stash
```

## Create a stash

Add a message to the stash

```sh
git stash push -m "WIP: working on login form"
```

## Apply stash

Apply the latest stash and removes it from the stash list

```sh
git stash pop
```

Apply the latest stash without removing from stash list

```sh
git stash apply
```

Apply a specific stash

```sh
git stash apply <stash_name>
```

## View stash

List current stash

```sh
git stash list
```

## Remove stash

Remove the latest stash

```sh
git stash drop
```

Clear all stashes

```sh
git stash clear
```

# Branches

Branches in Git let you work on different versions of a project at the same time without affecting the main codebase.

Every repository has at least one main branch. This branch is usually called main or master.

## `main`

It is the main branch of a repository and is usually created when a repository is initialized.

It is commonly called master for historical reasons, but it can be given another name. Nowadays, services like GitHub or GitLab recommend naming the main branch main.

## Basic Commands

Create a new branch

```sh
git branch NEW_FEATURE_NAME
```

Switch to a branch

```sh
git checkout FEATURE_NAME
```

Or combine both in one step

```sh
git checkout -b FEATURE_NAME
```

From Git 2.23+, you can also use

```sh
git switch -c FEATURE_NAME
```

## List branches

The current branch will be marked with a `*`

```sh
git branch
```

List remote branches

```sh
git branch -r
```

List all (local + remote)

```sh
git branch -a
```

## Rename branches

```sh
git branch -m main
```

## Delete branches

When you delete a branch, you’re removing the pointer, making that line of development no longer accessible through the branch name.

Delete local branch

```sh
git branch -d FEATURE_NAME
```

Use `-D` to force delete (e.g., if unmerged)

Delete remote branch

```sh
git push origin --delete FEATURE_NAME
```

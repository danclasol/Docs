# `switch`

Change branches or create and switch to a new branch in Git.

Introduced from Git 2.23+ to make branch switching more user-friendly than using git `checkout`

```sh
git switch BRANCH_NAME
```

## Common Use

Create and switch to a new branch

```sh
git switch -c NEW_BRANCH_NAME
```

Switch to an existing branch

```sh
git switch main
```

Create a new branch and switch to it

```sh
git switch -c feature/login-form
```

## `switch` vs `checkout`

- `checkout` is powerful but a bit confusing (used for both files and branches)

- `switch` is more focused and clearer — it only deals with branches

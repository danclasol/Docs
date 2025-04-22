# `remote`

In Git, a remote is a reference to a version of your repository hosted somewhere else, like GitHub, GitLab, or Bitbucket.

The `remote` sync your local code with the remote repository, collaborate with others, and back up your work.

```sh
git remote -v
```

## Common Uses

List all configured remotes with their URLs.

```sh
git remote -v
```

Add a new remote repository. This allows you to track changes and push/pull updates from the remote.

- `origin`: name of the remote (named 'origin' by convention)

```sh
git remote add origin https://github.com/yourname/project.git
```

Remove a remote

```sh
git remote remove origin
```

Change a remote’s URL

```sh
git remote set-url origin https://new-url.com/user/repo.git
```

Update the name of an existing remote

```sh
git remote rename [old-name] [new-name]
```

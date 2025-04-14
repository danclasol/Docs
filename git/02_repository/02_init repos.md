# Getting and Creating Projects

## `init`

Create an empty Git repository

- convert an existing, unversioned project to a Git repository

- initialize a new, empty repository

Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project

```
git init
```

- Creates an `.git` directory
- Creates a initial branch called `master`
- It will not overwrite things that are already there

### Specified the directory

You can specify a directory where the repository will be created

```
git init <directory_name>
```

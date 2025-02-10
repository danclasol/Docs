# `add`

Add file contents to the index.

```sh
git add <FILE>
```

Add file from a directory.

```sh
git add <DIRECTORY>/<FILE>
```

Add multiple files

```sh
git add file1.js file2.js
```

Add all files of an specific type

```sh
git add *.js
git add *.html
```

Add all modified files

```sh
git add --all
git add --A
```

Add all modified files from the current workspace

```sh
git add .
```

Add all modified files from a directory

```sh
git add resources/
```

# `status`

Show the working tree status

```sh
git status
```

# `diff`

Show changes between commits, commit and working tree, etc.

Changes in the working tree not yet staged for the next commit

```sh
git diff
```

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

# `commit`

Create a new commit containing the current contents of the index and the given log message describing the changes.

```sh
git commit
```

## Options

### `-a` or `--all`

Automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.

```sh
git commit -a
```

### `-m` or `--message`

Add message

```sh
git commit -m "Add new search feature"
git commit --message="Add new search feature"
```

If multiple `-m` options are given, their values are concatenated as separate paragraphs

```sh
git commit -m "Add new search feature" -m "This new feature is awesome"
```

# `restore`

Restore working tree files. The file must already be committed before in the repository.

```sh
git restore <FILE>
```

Restore all files from current workspace

```sh
git restore .
```

Restore all files of an specific type

```sh
git restore '*.js'
```

# `clean`

Remove untracked files from the working tree.

Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.

```sh
git clean
```

## Options

### `-x`

Ignored files will also be removed

```sh
git clean -x
```

### `-f` or `--force`

Forces to removed all files avoing any configuration

```sh
git clean -f
```

### `-d`

Remove also files that didn't exists before

```sh
git clean -d
```

### `-i` or `--interactive`

Show what would be done and clean files interactively

```sh
git clean -i
```

# `reset`

Reset current `HEAD` to the specified state

```sh
git reset <FILE>
```

Unstage any staged changes for the given file

```sh
git reset -- <FILE>
```

# `rm`

Remove files from the working tree and from the index

```sh
git rm <FILES>
```

Removing a file

```sh
git rm file.txt
```

Removing a directory

```sh
git rm -r old_directory/
```

Force removing a modified file

```sh
git rm -f modified_file.txt
```

# `mv`

Move or rename a file, a directory, or a symlink

```sh
git mv <SOURCE> <DESTINATION>
```

Change name of a file

```sh
git mv old_filename.txt new_filename.txt
```

Move file to another directory

```sh
git mv file.txt new_directory/
```

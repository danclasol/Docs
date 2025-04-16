# Github Repositories

## Create a new repository

To create a new repository go to repositories tab:
https://github.com/new/

Click on button "New"

Fill the repository information:

- Repository template: Start your repository with a template
- Owner / Repository name
- Description
- Public / Private
- Initialize this repository with:
  - Add a `README` file
  - Add `.gitignore`
  - Choose a license

Click on "Create Repository"

## Clone repository

To clone a remote repository, you need to know its address. This address can be either its HTTPS or SSH URL.

Normally, the preferred method is to use SSH.

### SSH

```
git clone git@github.com:user1234/project-name.git
```

### HTTPS

```
git clone https://github.com/user1234/project-name.git
```

## Push local repository to GitHub

From the terminal inside your project folder:

### 1. Initialize a Git repository in the project

```
git init
```

### 2. Create a .gitignore file

This file specifies which files or folders Git should ignore (i.e., not track).

For example, to ignore node_modules:

```
node_modules/
```

### 3. Add files to the staging area

This prepares the files you want to include in the next commit.

```sh
git add .
```

### 4. Commit the changes

```sh
git commit -m "First commit"
```

### 5. Create the main branch

```sh
git branch -M main
```

### 6. Link to Github Repository

The `git remote` command adds a remote repository URL to your local Git repository.

- HTTPS

  ```sh
  git remote add origin https://github.com/user1234/project-name.git
  ```

- SSH

  ```
  git@github.com:user1234/project-name.git
  ```

### 7. Push changes

```sh
git push -u origin main
```

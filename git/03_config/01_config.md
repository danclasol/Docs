# Git Configuration

Git allow to set configuration values on a global or local project level.

Use the `git config` command to set configuration settings.

- local: applies to current repository

  ```sh
  git config --local [key] [value]
  ```

- global: applies to all repositories on your system

  ```sh
  git config --global [key] [value]
  ```

## `.gitconfig` file

Correspond to the text file `.gitconfig`, normally located in _C:\Users\[USER]_

## Display settings

To display the configuration settings

```sh
git config --list
```

Display only global settings

```sh
git config --global --list
```

Display system settings, if exists

```sh
git config --system --list
```

The parameter `--show-scope` indicated the origin of each setting

```sh
git config --list --show-scope
```

Display a specific setting

```sh
git config user.email
```

## Set username and email

Set your username and email to your commits so will be shown in GitHub

```sh
git config --global user.name "<your_name>"
git config --global user.email "<your_email>"
```

Without the `--global` option, this setting will only apply to a specific repository.

## Set default editor

For example, to set Visual Studio Code as the default editor use the following code:

```sh
git config --global core.editor "code"
```

Other examples:

```sh
git config --global core.editor "atom" # Atom
git config --global core.editor "subl" # Sublime Text
git config --global core.editor "nano" # Nano
```

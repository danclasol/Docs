# Variables Configuration Files

Environment variables are often configured in specific files that are sourced during the startup of shells or user sessions.

These files can be divided into

- _system-wide_
  - apply to all users
- _user-specific_
  - individual user customizations

## System-Wide Configuration Files

### `/etc/profile`

This file that is executed whenever a login shell is initiated.

Affects all users on the system.

Commonly used to set global environment variables, `PATH`, and other system-wide settings.

### `/etc/profile.d/*.sh`

Scripts in this directory are sourced by `/etc/profile`.

Used to modularize environment variable settings and other configurations, making it easier to manage.

### `/etc/environment`

A simple key-value pair file used to set system-wide environment variables.

Unlike `/etc/profile`, it’s not a script but rather a list of variable
assignments.

```sh
LANG="en_US.UTF-8"
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
...
```

### `/etc/bash.bashrc`

Sourced by interactive non-login shells.

Commonly used to set environment variables and aliases that should apply to all users in interactive shells.

## User-Specific Configuration Files

### `~/.bash_profile`, `~/.bash_login`, `~/.profile`

Sourced by login shells.

User-specific files where environment variables can be set.

If multiple of these files exist, Bash will only source the first one it finds.

### `~/.bashrc`

Sourced by interactive non-login shells.

Typically used for setting up user-specific environment variables, aliases, and functions.

Often sourced by `~/.bash_profile` to ensure that settings are available in login shells as well.

```sh
# Add custom bin directory to PATH
export PATH="$HOME/bin:$PATH"

# Set editor preference
export EDITOR=nano

# Set custom prompt
export PS1="\u@\h:\w\$ "
```

### `~/.bash_logout`

Sourced when a user logs out of a login shell.

Can be used to unset variables or clean up resources.

## Execution Order

### Login Shells

When a user logs in (e.g., via SSH or terminal login), the following files are typically sourced in this order:

1. `/etc/profile`

2. The first file found among `~/.bash_profile`, `~/.bash_login`, and `~/.profile`

### Non-Login Shells

For interactive non-login shells (e.g., opening a new terminal in a graphical session), the following files are sourced:

1. `/etc/bash.bashrc`
2. `~/.bashrc`

## Customiza

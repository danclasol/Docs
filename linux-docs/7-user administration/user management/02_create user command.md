# Create user

To create an user you can use the `adduser` or the `useradd` command.

There are configuration files for adding new users that can be customized depending on what you want to allocate to a default user.

```sh
sudo useradd [options] username
```

This command creates an entry in:

- `/etc/passwd`
- `/etc/group`
  - if no group is specify it sets up a default group
- `/etc/shadow`
  - creates an entry
  - requiers the user enter a password

## Options

### `-m`

Create a home directory for the user.

```sh
sudo useradd -m username
```

### `-d`

Specify a custom home directory.

```sh
sudo useradd -d /home/customdir username
```

### `-s`

Specify the user’s login shell.

```sh
sudo useradd -s /bin/bash username
```

### `-G`

Add the user to a supplementary group.

```sh
sudo useradd -G groupname username
```

### `-c`

Add a comment (usually the user's full name).

```sh
sudo useradd -c "User Name" username
```

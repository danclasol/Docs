# `sudo`

This command allows to run a command as the another user.

If we don't specify any user, it will use the `root` user.

- sudo gives elevated permissions, allowing you to make changes that could affect the entire system.

```sh
sudo command
```

## Common Uses

### Getting a Root Shell

You can open a root shell with.

```sh
sudo -i
```

or

```sh
sudo su -
```

## File `/etc/sudoers`

Configuration file that defines permissions for users and groups to execute commands as the superuser (`root`) or another user.

This file is critical because it controls who can gain elevated privileges and how those privileges are granted.

Always use `visudo` to edit the file.

### Granting a user root privileges

This allows username to run any command as any user on any host.

```sh
username ALL=(ALL) ALL
```

### Granting a user permission to run specific commands

This allows the user to run specific commands.

```sh
username ALL=(ALL) /usr/bin/apt-get, /usr/bin/apt-cache
```

### Allowing a group to run

Groups are represented with `%`.

This allows all users in the _admin_ group to run any command as any user.

```sh
%admin ALL=(ALL) ALL
```

# Change ownership of a file or directory

Use the command `chown` to change the ownership of a file or directory.

Changing ownership typically requires `root` privileges. If you’re not logged in as the root user, you’ll need to use sudo.

```sh
chown [options] user[:group] file...
```

- `user`: new owner of the file or directory
- `group` (optional): new group associated with the file or directory.
- `file...`: file(s) or directory(ies) for which you want to change the ownership

## Change the owner of a file

To change the owner of a file to a user

```sh
chown username example.txt
```

## Change the owner and group of a file

To change the owner of example.txt to username and the group to groupname

```sh
chown username:groupname example.txt
```

## Change only the group of a file

To change only the group of example.txt to groupname without changing the owner

```sh
chown :groupname example.txt
```

## Change ownership recursively

To change the ownership of a directory and all its contents recursively.

```sh
chown -R username:groupname /path/to/directory
```

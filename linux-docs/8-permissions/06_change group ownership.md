# Change group ownership

Use the command `chgrp` to change the group ownership of a file or directory.

```sh
chgrp [options] group file...
```

- `group`: new group associated with the file or directory.
- `file...`: file(s) or directory(ies) for which you want to change the ownership

## Change the group of a file

To change the group of a file to a group.

```sh
chgrp groupname example.txt
```

## Change the group of a directory

To change the group of a directory to a group.

```sh
chgrp groupname mydir
```

## Change group ownership recursively

To change the group ownership of a directory and all of its contents recursively.

```sh
chgrp -R groupname /path/to/directory
```

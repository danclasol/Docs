# Symbolic Mode

In Symbolic Mode permissions are represented with letters.

Each character represent a different permission

- `r`: readable
- `w`: writable
- `x`: executable
- `-`: no permision

## `chmod`

Changes the file permissions for a file or directory.

```sh
chmod [group | operation | permissions] filename
```

Specify the group:

- `u`: stands for the user (owner).
- `g`: stands for the group.
- `o`: stands for others.
- `a`: stands for all (user, group, others).

Speficy the permission operation

- `+`: adds a permission.
- `-`: removes a permission.
- `=`: sets the exact permissions, removing all others.

### Add permission

Adds execute permission for the owner

```sh
chmod u+x filename
```

### Remove permissions

Removes write permission from the group

```sh
chmod g-w filename
```

### Set exact permissions

Sets read-only permission for others

```sh
chmod o=r filename
```

### Modify more than one group

Adds execute permission for the owner and sets read-only permission for others

```sh
chmod u+x,g-w filename
```

Adds execute permission for all groups

```sh
chmod a+x filename
chmod +x filename
```

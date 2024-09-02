# Modify Group

Modify an existing group’s properties.

```sh
sudo groupmod [options] groupname
```

## Options

### `-n`

Changes the name of the group.

```sh
sudo groupmod -n newgroupname groupname
```

### `-g`

Change the GID of the group.

If another group already has that GID, this command will fail unless you also use the `-o` option.

```sh
sudo groupmod -g newGID groupname
```

### `-o`

Allows the GID to be non-unique.

This option is used with the `-g` option when you want to assign an existing GID to another group.

```sh
sudo groupmod -g newGID -o groupname
```

This forces the change even if GID 1050 is already in use by another group.

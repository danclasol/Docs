# Create a new group

Create a new group on the system.

```sh
groupadd [options] groupname
```

## Options

### `-g`

Specifies the Group ID (GID) for the new group.

If not provided, the system will automatically assign the next available GID.

```sh
sudo groupadd -g 1050 groupname
```

### `-r`

Creates a system group.

System groups typically have GIDs below 1000.

```sh
sudo groupadd -r groupname
```

### `-f`

If the group already exists, this option forces the command to exit successfully without creating a new group or returning an error.

```sh
sudo groupadd -f groupname
```

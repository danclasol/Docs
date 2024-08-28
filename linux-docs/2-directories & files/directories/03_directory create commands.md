# Create directory

The `mkdir` command is used to create new directories.

Can create one or multiple directories at once, with options to set permissions or create parent directories if they don't exist.

```sh
mkdir [options] directory_name
```

## Common uses

Create multiple directories at once

```sh
mkdir dir1 dir2 dir3
```

Create new subdirectory

```sh
mkdir myStuff
```

## Options

### `-p`

Create nested directories.

This will create both directories

```sh
mkdir -p myStuff/pictures/
```

### `-m`

Create a directory with specific permissions

```sh
mkdir -m 700 myStuff/pictures/
```

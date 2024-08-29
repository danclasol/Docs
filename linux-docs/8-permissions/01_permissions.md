# Files Permissions Groups

Every file or directory will have three permission group

- _Owner_: permission for who owns the file or directory
- _Group_: permission that applies to the group assigned to the file or directory
- _Other_: permissions that all other users have

# Files Permissions Types

- _Read_ (`r`):
  - Allows viewing the contents of a file or listing a directory’s contents.
- _Write_ (`w`):
  - Allows modifying a file or adding/removing files from a directory.
- _Execute_ (`x`):
  - Allows running a file as a program or script
  - For directories, it allows entering the directory and accessing its contents.

# Files Permissions Notation

Permissions can be represented in two ways:

- **Symbolic Mode**: Using letters (e.g., r, w, x).
- **Numeric Mode (Octal)**: Using numbers (e.g., 7, 6, 5, 4).

There are four parts to a file's permissions.

```sh
d | rwx | rwx | r-x
```

- The first character indicates the file type
  - `-` for a regular file,
  - `d` for a directory
- The next three characters are the owner's permissions
- The following three characters are the group's permissions
- The last three characters are the other's permissions

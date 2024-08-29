# Default permissions

When you create a file or directory, the default permissions assigned to it are influenced by the `umask` value.

```
final permissions = default permissions − umask Value
```

## Umask value

The umask value is applied by subtracting it from the default permission set to determine the actual permissions for newly created files and directories.

### Umask Format

Display the current umask value in octal form

```sh
umask # 0022 (default)
```

The umask if has four-digit format

- **First Digit** (Special Permissions)

  - optional
  - additional digit for special permissions like setuid, setgid, and the
    sticky bit.

- **Second Digit** (Owner Permissions)
- **Third Digit** (Group Permissions)
- **Fourth Digit** (Others Permissions)

## Default permissions (without umask)

Without any umask applied, the default permissions would be:

- Files: `666` (read and write for owner, group, and others)
- Directories: `777` (read, write, and execute for owner, group, and others)

## Default permissions with umask

For example, with a umask value of `0022` the default permissions will be:

If first digit is `0`, it can be ommited.

- Files: `644` -> (666 - 022)
- Directories: `755` -> (777 - 022)

## Changing umask value

### Setting `umask` temporarily

To temporarily set a different umask for your session.

This changes will affect the permissions of files and directories created thereafter:

- Files: 640 (rw-r-----)
- Directories: 750 (rwxr-x---)

```sh
umask 0027
```

### Setting `umask` permanent

To make the umask setting permanent, you can add the umask command to your shell's startup files, such as

```sh
 .bashrc
 .profile
```

Add the following line at the end of the file. Changes will be applied on the next loggin.

```
umask 033
```

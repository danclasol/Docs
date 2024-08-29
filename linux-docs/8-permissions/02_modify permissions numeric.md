# Modfify Permissions Numeric Mode (Octal)

In Numeric Mode permissions are represented with numbers.

Each digit is a sum of values representing permissions:

- `4`: readable `r`
- `2`: writable `w`
- `1`: executable `x`
- `0`: no permision `-`

By adding these values, you can define the permissions:

- `7`: rwx (read, write, execute) -> (4 + 2 + 1)
- `6`: rw- (read, write) -> (4 + 2)
- `5`: r-x (read, execute) -> (4 + 1)
- `4`: r-- (read only) -> (4)
- `3`: -wx (write, execute) -> (2 + 1)
- `2`: -w- (write only) -> (2)
- `1`: --x (execute) -> (1)
- `0`: --- (no permission) -> (0)

This allows to represent permissions for all groups as a three-digit number:

- `755`
  - `7` = rwx for the owner (4 + 2 + 1)
  - `5` = r-x for the group (4 + 1)
  - `5` = r-x for others (4 + 1)

## `chmod`

```sh
chmod [octal-mode] filename
```

Example setting permissions using numeric mode

- `7` = Owner can read, write, and execute.
- `5` = Group can read and execute.
- `5` = Others can read and execute.

```sh
chmod 755 filename
```

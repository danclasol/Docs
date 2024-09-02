# Show user information

Display the user ID (`UID`), group ID (`GID`), and the groups that a user belongs to.

```sh
id [options] [username]
```

### Common use

This command shows the UID, GID, and groups of the currently logged-in user.

```sh
id # uid=1001(user1) gid=1001(user1) groups=1001(user1),27(sudo),4(adm)
```

Display identity information for a specific user.

```sh
id username
```

### Options

### `-u`

Display only the UID of the user

```sh
id -u
```

### `-g`

Display only the GID of the user

```sh
id -g
```

### `-G`

Displays the numeric `GIDs` of all the groups the user belongs to.

```sh
id -G
```

### `-n`

Display names instead of numeric IDs (use with -u, -g, or -G).

```sh
id -un
id -gn
```

## Show the last logins of users

```sh
last username
```

## Show who is logged on and what they are doing

```sh
w
```

## Show who is logged into the system

```sh
who
```

## Show the last login times for all users

```sh
sudo lastlog
```

## Show the last login times for all users

```sh
sudo lastlog
```

## Show current logged user

Display the name of the user currently logged into the system, in case we are logged as a different user with the command `su`

```sh
logname
```

### Get user information

```bash
getent passwd username
```

### Get group information

```bash
getent group groupname
```

# User Management Files

## `/etc/passwd`

Contains information about each user accounts on the system.

This file is readable by all users on the system, but only writable by the root user or through system commands like _useradd_, _usermod_, or _userdel_.

### Format

```sh
username:x:UID:GID:comment:home_directory:shell
```

### Fields

- `username`

  - must be unique
  - typically between 1 and 32 characters long

- `x`

  - it doesn't show any password just an `x`
  - passwords are stored in `/etc/shadow`

- `UID` (User ID)

  - unique number assigned to each user
    - `0` -> for root user usually
    - `<1000` -> typically system users
    - `>1000` -> regular users start

- `GID` (Group ID)

  - primary group ID that the user belongs to
  - This ID corresponds to an entry in the `/etc/group` file

- `comment`:

  - often used to store the full name of the user or other information (also called the GECOS field).

- `home_directory`

  - path to the user’s home directory. This is where the user’s personal files and configurations are stored.

- `shell`
  - user's default shell (e.g., /bin/bash, /bin/sh, /bin/zsh).

## `/etc/shadow`

Contains the hashed passwords and related security information for user accounts.

Unlike `/etc/passwd`, which is readable by all users, `/etc/shadow` is highly protected and readable only by the root user and certain privileged processes.

### Format

```sh
username:password:lastchg:min:max:warn:inactive:expire:reserved
```

### Fields

- `username`: The user’s login name. This should match the username in /etc/passwd.
- `password`

  - user's encrypted password
  - `!` -> locked account
  - `!!` -> password not set yet
  - `*` -> disabled account or password not set

- `lastchg`

  - date of the last password change
  - represented as the number of days since January 1, 1970 (the Unix epoch).

- `min`

  - minimum number of days required between password changes.

- `max`

  - maximum number of days a password is valid before the user must change it.

- `warn`

  - number of days before the password expires that the user is warned to change it.

- `inactive`

  - number of days after the password expires before the account is locked.

- `expire`

  - date when the account will be disabled
  - represented as the number of days since January 1, 1970

- `reserved`
  - field is reserved for future use and is typically left empty.

## /etc/group

Contains group information, including group names and GIDs.

Each line in this file represents a group and contains information about the group name, group ID (`GID`), and the list of users that are members of the group.

```sh
groupname:x:GID:user_list
```

### Fields

- `groupname`

  - name of the group
  - must be unique and is used to identify the group

- `x`

  - placeholder, historically, used for group passwords
  - not used in modern systems

- `GID` (Group ID)

  - unique number that identifies the group within the system

- `user_list`
  - comma-separated list of usernames that are members of this group.
  - can be empty if no users are explicitly assigned to the group
  - but users may still belong to the group if it is their primary group (as defined in `/etc/passwd`)

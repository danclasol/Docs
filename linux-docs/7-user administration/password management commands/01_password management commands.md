# Change password

The `passwd` command is used to change a user's password.

## Common Use

### Change current user password

```sh
passwd
```

### Change password of another user

Set or change a user's password.

```sh
sudo passwd username
```

### Disable password

This locks the account by disabling the password.

```sh
sudo passwd -l username
```

### Unlock a user's password

This unlocks the account.

```sh
sudo passwd -u username
```

# Change password expiration information

The `chage` command is used to manage and view user password expiration and aging policies.

Change password expiration information

```sh
sudo chage [options] username
```

## Options

### `-l`

List the password aging information.

```sh
sudo chage -l username
```

### `-M`

Set the maximum number of days a password remains valid.

```sh
sudo chage -M days username
```

### `-m`

Set the minimum number of days between password changes.

```sh
sudo chage -m days username
```

### `-E`

Set the account expiration date.

```sh
sudo chage -E date username
```

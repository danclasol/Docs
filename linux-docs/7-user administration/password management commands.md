# Change password

Set or change a user's password.

```sh
sudo passwd username
```

# Change password expiration information

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

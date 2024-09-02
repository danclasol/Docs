# Modify existing user

Modify an existing user account.

```sh
sudo usermod [options] username
```

## Options

### `-l`

Change the username.

```sh
sudo usermod -l newname username
```

### `-d`

Change the home directory.

```sh
sudo usermod -d /new/home username
```

### `-m`:

Move the content from the old home directory to the new one.

```sh
sudo usermod -m /old/home /new/home username
```

### `-s`

Change the login shell.

```sh
sudo usermod -s /bin/zsh username
```

### `-G`

Add the user to additional groups.

```sh
sudo usermod -G group1,group2 username
```

### -`aG`

Append the user to a group without affecting membership in other groups.

```sh
sudo usermod -aG groupname username
```

### `-L`:

Lock the user account.

```sh
sudo usermod -L username
```

### `-U`:

Unlock the user account.

```sh
sudo usermod -U username
```

# Remove users

Delete a user account.

```sh
sudo userdel [options] username
```

## Options

### `-r`

Remove the user’s home directory and mail spool along with the user account.

This basically does its best to undo the file changes by useradd.

```sh
sudo userdel -r username
```

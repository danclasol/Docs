# Variable `$PATH`

Defines a list of directories where the shell looks for executable files when you type a command. If a command is not specified with an absolute or relative path, the shell searches through the directories listed in $PATH to find it.

## Modify `$PATH`

### Temporarily for the Current Session

To add a directory to $PATH temporarily (i.e., for the duration of the current session or terminal window):

```sh
export PATH="$PATH:/path/to/directory"
```

### Permanently

1. Edit the .profile or .bashrc file:

   ```sh
   nano ~/.profile
   ```

2. Add the export command.

   ```sh
   export PATH="$PATH:/path/to/directory"
   ```

3. Save and close the file, then apply changes with.

```sh
source ~/.profile
```

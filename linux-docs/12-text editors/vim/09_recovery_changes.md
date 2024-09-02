# Recovery unsaved changes

If vim crashes or if your system unexpectedly shuts down while you're editing a file, vim provides mechanisms to recover unsaved changes.

## Swap Files

When you edit a file in _vim_, a temporary file called a _swap file_ is created. This file has the same name as your original file but with a `.swp` extension.

The swap file is used to store your changes as you work, allowing you to recover them if vim is unexpectedly closed.

## Recovery Process

### Automatic Recovery When Reopening the File

When you reopen a file after a crash, vim automatically detects the existing swap file. You'll see a message like this:

To recover the file, press `R`.

```sh
E325: ATTENTION
Found a swap file by the name ".myfile.txt.swp"
        owned by: user_name   dated: Mon Sep  2 12:34:56 2023
       file name: ~user_name/path/to/myfile.txt
        modified: YES
       user name: user_name   host name: host_name
      process ID: 12345 (still running)
While opening file "myfile.txt"
             dated: Mon Sep  2 12:00:00 2023
(1) Another program may be editing the same file.
(2) An edit session for this file crashed.
(3) An edit session for this file is already running.
Options:
[O]pen Read-Only, (E)dit anyway, (R)ecover, (D)elete it, (Q)uit, (A)bort:
```

### Manual Recovery Using the Swap File

If vim doesn’t automatically detect the swap file or if you want to manually recover the file, you can do so with the following command

This opens the file in recovery mode, allowing you to restore the most recent changes from the swap file.

```sh
vim -r myfile.txt
```

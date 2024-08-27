# Show history

Display the list of commands that have been previously executed in the shell.

```sh
history
```

## Common Use

Limit the number of commands displayed

```sh
history N
```

Execute a Command from History. Where N is the number associated with the command in the history list.

For example, `!45` would re-execute the command numbered 45 in your history.

```sh
!45
```

Clear the command history.

```sh
history -c
```

Delete a specific command from history.

```sh
history -d N
```

Write history to the history file.

```sh
history -w
```

Read history from the history file.

```sh
history -r
```

Append current session's history to the history file:

```sh
history -a
```

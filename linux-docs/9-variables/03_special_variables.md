## Special Variables

### `$?`

The exit status of the last command.

```sh
ls
echo $?  # Outputs: 0 (success) or an error code
```

### `$$`

The process ID of the current shell.

```sh
echo $$  # Outputs the process ID of the current shell
```

### `$!`

The process ID of the last background command.

```sh
sleep 100 &
echo $!  # Outputs the process ID of the sleep command
```

### `$0`

The name of the script or program.

```sh
echo $0 # Outputs the script name
```

### `$1`, `$2`, etc

Positional parameters (arguments) passed to a script.

```sh
echo "First argument: $1"
echo "Second argument: $2"
```

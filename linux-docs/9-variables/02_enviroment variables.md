# Enviroment Variables

Environment variables are variables that are available system-wide or to specific users. They provide a way to influence the behavior of various processes and applications running on the system.

They are available to all child processes and applications launched from the shell or terminal where the variables are set.

### `PATH`

A list of directories where executable programs are located. It determines where the shell looks for commands.

```sh
echo $PATH
```

### `HOME`

The current user’s home directory.

```sh
echo $HOME
```

### `USER` or `LOGNAME`

The name of the current user.

```sh
echo $USER
```

### `SHELL`

The path of the current user’s shell.

```sh
echo $SHELL
```

### `LANG`

Language and locale settings.

```sh
echo $LANG
```

### `PWD`

Current current working directory.

```sh
echo $PWD
```

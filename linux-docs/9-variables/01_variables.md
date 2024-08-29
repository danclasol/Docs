# Variables

Variables are used to store data that can be referenced and manipulated in scripts and command-line operations.

There are two main types of variables in Linux:

- _environment variables_
  - available to all processes started from the shell in which they are set
  - typically used to store configuration settings and system information
- shell variables
  - local to the shell or script in which they are defined
  - not available to other programs or shells

## Setting Variables

### Shell Variable

No spaces around the =.

```sh
variable_name=value
```

### Enviroment variable

```sh
export VARIABLE_NAME=value
```

## Unsetting Variables

To remove an variable, use the `unset` command.

```sh
unset VARIABLE_NAME
```

## Accessing Variables

```sh
echo $variable_name
```

## Viewing environment variables

### Enviroment variables

List all environment variables

```sh
printenv
```

or

```sh
env
```

To view a specific environment variable

```sh
echo $VARIABLE_NAME
```

### Shell variables

Display all shell variables and functions

```sh
set
```

# Shellscript

A shell script is essentially a text file containing a series of commands that the shell (the command-line interpreter) executes in sequence.

It allows users to:

- automate repetitive tasks
- execute multiple commands in sequence
- control the flow of execution (loops and conditionals)

## Basic structure of a shell script

A typical shell script starts with a shebang (`#!`) followed by the path to the shell that should execute the script.

This line tells the system to use the Bash shell to execute the script.

```bash
#!/bin/bash
echo "Hello, World!"
```

## Execute script

### Make the script executable

Before running the script, you need to make it executable using the

```sh
chmod +x myscript.sh
```

### Run the script

Now, you can execute the script by typing.

```sh
./myscript.sh
```

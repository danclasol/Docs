# Metacharacters

In Linux, metacharacters are special characters that have specific meanings or functions in the shell.

## Wildcards (Globbing)

### `*`

Matches zero or more characters.

```sh
ls \*.txt # Matches any file ending with .txt
```

### `?`

Matches exactly one character.

```sh
ls file?.txt # Matches file1.txt, file2.txt, but not file10.txt
```

### `[]`

Matches any one of the enclosed characters.

```sh
ls file[12].txt # Matches file1.txt and file2.txt
```

### `[! ]`

Matches any one character not enclosed.

```sh
ls file[!1].txt # Matches file2.txt, file3.txt, but not file1.txt
```

## Quoting

### `"`

Double quotes preserve the literal value of all enclosed characters, except $, \, and `.

```sh
echo "Hello $USER" # Expands the variable USER
```

### `'`

Single quotes preserve the literal value of all enclosed characters.

```sh
echo 'Hello $USER' # Prints $USER literally
```

### `` ` ``

Backticks are used for command substitution, allowing the output of a command to be used as an argument.

```sh
echo `date` # Prints the current date and time
```

### `$()`

Also used for command substitution, and often preferred over backticks.

```sh
echo $(date) # Prints the current date and time
```

## Redirection

### `>`

Redirects standard output to a file, overwriting the file if it exists.

```sh
ls > filelist.txt  # Writes output of ls to filelist.txt
```

### `>>`

Redirects standard output to a file, appending to the file if it exists.

```sh
ls >> filelist.txt  # Appends output of ls to filelist.txt
```

### `<`

Redirects standard input from a file.

```sh
sort < filelist.txt  # Sorts contents of filelist.txt
```

### `2>`

Redirects standard error to a file.

```sh
ls non_existent_file 2> error.log  # Writes errors to error.log
```

### `&>`

Redirects both standard output and standard error to a file.

```sh
command &> output.log  # Redirects all output to output.log
```

## Pipes

### `|`

Takes the output of one command and uses it as the input for another.

```sh
ls -l | grep "txt"  # Lists files and filters for "txt"
```

## Command Control

### `;`

Executes multiple commands sequentially.

```sh
cd /var/log; ls  # Changes directory, then lists contents
```

### `&&`

Executes the second command only if the first succeeds.

```sh
mkdir newdir && cd newdir  # Creates and enters newdir if successful
```

### `||`

Executes the second command only if the first fails.

```sh
cd newdir || mkdir newdir  # If cd fails, create newdir
```

## Background Execution

### `&`

Runs a command in the background.

```sh
sleep 60 &  # Runs sleep command in the background
```

## Grouping Commands

### `()`

Groups commands, executing them in a subshell.

```sh
(cd /var/log && ls)  # Changes directory and lists files in a subshell
```

### `{}`

Groups commands to be executed in the current shell.

```sh
{ cd /var/log; ls; }  # Changes directory and lists files in the current shell
```

## Escaping

### `\`

Escapes the following character, treating it literally.

```sh
echo \$USER  # Prints $USER literally instead of expanding it
```

## Comments

### `#`

Begins a comment, which is ignored by the shell.

```sh
# This is a comment
echo "Hello World"  # This is also a comment
```

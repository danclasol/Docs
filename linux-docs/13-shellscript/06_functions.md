# Functions

Functions in shell scripting are used to group a set of commands into a single block that can be executed multiple times throughout the script.

- parameters: Functions can take parameters and process them using $1, $2, etc.
- return: Use echo and command substitution to return values
- local variables: Use local to limit the scope of variables to the function.
- recursion: Functions can be recursive, but this is not commonly used in shell scripts.

```sh
function_name() {
    # Commands
    # ...
}
```

Or, alternatively:

```sh
function function_name {
    # Commands
    # ...
}
```

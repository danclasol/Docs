## Variables

In shell scripting, you create a variable by simply assigning a value to a name.

- no need to declare the type of the variable.
- oo spaces are allowed around the `=` sign.

```sh
variable_name=value
```

To access the value of a variable, prefix the variable name with a `$` symbol.

```sh
echo $variable_name
```

## Variable yypes

### String

Store text values.

```sh
greeting="Hello, World!"
echo $greeting
```

### Integer

Store numeric values.

However, shell variables are treated as strings, so arithmetic operations require special syntax.

```sh
$(())
```

```sh
num1=10
num2=20
sum=$((num1 + num2))
echo $sum
```

### Array

Store multiple values in a single variable (Bash only).

```sh
fruits=("Apple" "Banana" "Cherry")
echo ${fruits[0]} # Accessing first element
echo ${fruits[@]} # Accessing all elements
```

## Command Substitution

You can assign the output of a command to a variable using command substitution.

```sh
variable_name=$(command)
```

```sh
current_date=$(date)
echo "Today's date is: $current_date"
```

## Positional arguments

Arguments can be passed to a script.

`$1`, `$2`, etc., refer to the arguments passed to a script or a function.

```bash
echo "First argument: $1"
echo "Second argument: $2"
```

## Read-only variables

You can make a variable read-only using the `readonly` command, which prevents it from being modified or unset.

```sh
readonly pi=3.14
pi=3.14159 # This will result in an error
```

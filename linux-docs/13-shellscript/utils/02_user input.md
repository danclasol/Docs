# User input

In shell script is possible to take input from the user or from a file.

The `read` command waits for the user to input a value and then stores it in the variable name.

```sh
echo "Please enter your name:"
read name
echo "Hello, $name!"
```

## Options

### `-p`

The `-p` option allows you to display a prompt on the same line as the input

```sh
read -p "Enter your favorite color: " color
echo "Your favorite color is $color."
```

### `-s`

The `-s` option makes the input silent, which is useful for entering passwords

```sh
read -s -p "Enter your password: " password
echo
echo "Password entered."
```

### `-t`

The `-t` option specifies a timeout, after which read will stop waiting for input

```sh
if read -t 5 -p "Enter something within 5 seconds: " input; then
echo "You entered: $input"
else
echo "Timed out!"
fi
```

## Reading from a File

You can use the read command to read input from a file line by line:

```sh
while read line; do
echo "Read line: $line"
done < input.txt
```

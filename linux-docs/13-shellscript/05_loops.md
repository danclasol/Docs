# Loops

In shell scripting, the most common types of loops are for, while, and until. Below are examples of each type of loop.

## `for`

The `for` loop is used to iterate over a list of items.

```sh
for i in 1 2 3 4 5
do
echo "Iteration number $i"
done
```

## `while`

The `while` loop repeatedly executes a block of code as long as the specified condition is true.

```sh
counter=1

while [ $counter -le 5 ]
do
echo "Counter: $counter"
((counter++))
done
```

## `until`

The `until` loop is similar to the while loop, but it executes the block of code until the condition becomes true (i.e., it loops while the condition is false).

```sh
counter=1

until [ $counter -gt 5 ]
do
echo "Counter: $counter"
((counter++))
done
```

## Controlling Loops

You can control the flow of loops using `break` and continue `statements`.

### `break`:

Exits the loop entirely

```sh
for i in {1..5}
do
if [ $i -eq 3 ]; then
break
fi
echo "Number: $i"
done
```

### `continue`

Skips the current iteration and moves to the next one

```sh
for i in {1..5}
do
    if [ $i -eq 3 ]; then
        continue
    fi
    echo "Number: $i"
done
```

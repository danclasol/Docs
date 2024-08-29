## `sed`

A stream editor used to perform basic text transformations on an input stream.

This command replaces all occurrences of "oldtext" with "newtext" in file.txt.

```sh
sed 's/oldtext/newtext/g' file.txt
```

## `tr`

Translates or deletes characters from the input.

This command converts lowercase letters to uppercase.

```sh
echo "hello" | tr 'a-z' 'A-Z'
```

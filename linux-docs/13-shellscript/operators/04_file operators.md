# File operators

### `-e`

Checks if the file exists.

```sh
if [ -e "$file" ]; then
```

### `-f`

Checks if the file exists and is a regular file.

```sh
if [ -f "$file" ]; then
```

### `-d`

Checks if the file exists and is a directory.

```sh
if [ -d "$file" ]; then
```

### `-r`

Checks if the file exists and is readable.

```sh
if [ -r "$file" ]; then
```

### `-w`

Checks if the file exists and is writable.

```sh
if [ -w "$file" ]; then
```

### `-x`

Checks if the file exists and is executable.

```sh
if [ -x "$file" ]; then
```

### `-s`

Checks if the file exists and is not empty.

```sh
if [ -s "$file" ]; then
```

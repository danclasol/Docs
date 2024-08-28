# Create files

Create an empty file or to update the access and modification timestamps of an existing file

```sh
touch [options] file_name
```

## Common uses

If the file doesn't exists it will create an empty file

```sh
touch newfile.txt
```

If the file already exists, it will update its timestamp without modifying its content.

This updates the access and modification times of existingfile.txt to the current time.

```sh
touch existingfile.txt
```

Create Multiple Files at Once

```sh
touch file1.txt file2.txt file3.txt
```

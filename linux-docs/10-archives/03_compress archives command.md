# Compress archives

Compressing archives involves using various tools to reduce the size of an archive file by applying compression algorithms.

This can be done during the creation of the archive or after the archive has been created.

Common methods to compress archives:

- gzip
- zip

## `gzip`

Gzip is a widely-used compression tool in Linux.

- uses GNU zip algorithm
- only compress files (including archives), not directories
- extension compress files `.gz`

```sh
gzip [options] [file...]
```

## Common Use

### Compress an existing archive

If you already have a `.tar` archive, you can compress it with `gzip`.

This will produce an archive with the extension `.tar.gz`.

```sh
gzip archive_name.tar
```

### Compress a Directory (with tar)

`gzip` itself cannot compress a directory directly, but you can combine it with `tar` to compress a directory.

```sh
tar -czvf archive_name.tar.gz directory_name/
```

### Decompress a file

Decompresses a file, restoring the original file.

```sh
gzip -d filename.gz
```

Also available with the command as `gunzip`.

```sh
gunzip -filename.gz
```

## Options

### `-k`

Allows you to keep the original file and create a compressed version alongside it.

```sh
gzip -k filename
```

### `-r`

Compress all files in a directory recursively.

```sh
gzip -r directory_name/
```

### `-l`

Display compression statistics.

```sh
gzip -r directory_name/
```

## `zip`

`Zip` is a widely used format that compresses files and creates an archive in one step.

Unlike `tar`, `zip` doesn't just archive files, it compresses them as it adds them to the archive.

```sh
zip [options] archive_name.zip file1 file2 directory/
```

## Common Use

### Create a zip archive

The option `-r` recursively include all files and directories.

```sh
zip -r archive_name.zip directory_name/
```

### Compress individual files

This creates a compressed zip file containing file1, file2, and file3.

```sh
zip archive_name.zip file1 file2 file3
```

### Unzip a zip archive

Extract the contents of a file into the current directory.

```sh
unzip archive_name.zip
```

## Options

### `-x`

Exclude certain files.

```sh
zip -r my_archive.zip my_directory/ -x "*.tmp"
```

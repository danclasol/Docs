# Manipulate archives

The `tar` command is used to manipulates archives.

- Create archives
- Extract the content of an archive
- List archive content

```sh
tar [options] [archive-file] [file or directory to be archived]
```

## Create files

Create a new archive.

```sh
tar -c directory_name
```

## Extract files

Extract the contents of archive_name.tar in the current directory.

```sh
tar -x archive_name.tar
```

## List files

List the contents of the archive.

```sh
tar -t archive_name.tar
```

## Compress archives

The `tar` command doesn't provide any compression tool. However, we can use the option `-z` to compress using `gzip`.


```sh
tar -czf archive_name.tar.gz directory_name/
```


## Options

### `-f`

Specify the filename of the archive.

```sh
tar -cf archive_name.tar directory_name
```

### `-v`

Verbose mode, shows the progress in the terminal.

```sh
tar -cvf archive_name.tar directory_name
```

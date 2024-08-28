# Filters

_Filters_ are tools for processing and manipulating text data.

They can be used individually or combined in pipelines to perform powerful data transformations and analyses.

## `grep`

Allows to search for lines in a file that match a given regular expression.

```sh
grep [options] pattern [file...]
```

This command searches for lines in _file.txt_ that match the string pattern and prints them to the terminal.

```sh
grep 'hello' file.txt
```

### Options

#### `-i`

Searches for "_hello_" in a case-insensitive manner (e.g., Hello, HELLO, etc.).

```sh
grep -i 'hello' file.txt
```

#### `-r`

Searches for hello in all files within the specified directory and its subdirectories.

```sh
grep -r 'hello' /path/to/directory
```

#### `-n`

Shows the line numbers along with lines that contain hello.

```sh
grep -n 'hello' file.txt
```

#### `-c`

Counts the number of lines that contain "_hello_" in _file.txt_.

```sh
grep -c 'hello' file.txt
```

#### `-l`

Lists the names of all _.txt_ files in the current directory that contain the word "_hello_".

```sh
grep -l 'hello' *.txt
```

#### `-s`

Suppresses error messages for files that cannot be read.

```sh
grep -s 'pattern' file1.txt file2.txt
```

## `awk`

A powerful text processing tool that can be used to manipulate and analyze text, typically by fields.

This command prints the first and third fields from each line in data.txt.

```sh
awk '{print $1, $3}' data.txt
```

## `uniq`

Filters out or reports repeated lines in a file.

This command sorts data.txt and then removes duplicate lines.

```sh
sort data.txt | uniq
```

## `cut`

Extracts specific columns or fields from a file or input stream.
This command extracts the second field from each line of data.csv, assuming the fields are comma-separated.

```sh
cut [options] [file...]
```

### Options

#### `-b`

Selects specific bytes

This command extracts the first 5 bytes from each line of file.txt.

```sh
cut -b 1-5 file.txt
```

#### `-c`

Selects specific characters

This extracts characters 2 through 4 from each line of file.txt.

```sh
cut -c 2-4 file.txt
```

#### `-f`

Selects specific fields

This extracts the 1st and 3rd fields from file.csv, where fields are separated by commas.

```sh
cut -f 1,3 -d ',' file.csv
```

#### `-d`

Specifies a different delimiter

This extracts the 2nd field from /etc/passwd, where fields are separated by colons `:`.

```sh
cut -f 2 -d ':' /etc/passwd
```

#### `-s`

Suppress lines without delimiter

This extracts the 2nd field from file.csv, but only for lines that contain the comma delimiter.

```sh
cut -d ',' -f 2 -s file.csv
```

#### `-b`

Complementing the Selection

This command extracts all bytes except for the first 5 bytes from each line of _file.txt_.

```sh
cut -b 1-5 --complement file.txt
```

## `head`

Display the first few lines of a file or files. By default, it shows the first 10 lines.

```sh
head filename.txt
```

Specify the number of lines to display

```sh
head -n 5filename.txt
```

Display the first few bytes of a file

```sh
head -c 20 filename.txt
```

## `tail`

Display the last lines of a file or files. By default, it shows the last 10 lines.

```sh
tail filename.txt
```

Specify the number of lines to display

```sh
tail -n 5filename.txt
```

Display the first few bytes of a file

```sh
tail -c 20 filename.txt
```

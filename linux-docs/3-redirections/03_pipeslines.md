# Pipeline

_Pipelines_ are used to create a chain of commands where the output of one command serves as the input for the next.

A pipeline connects the output of one command directly to the input of another.

This is done using the pipe symbol `|`.

### Example

The _cat_ command send the file content to the standard ouput. The output of _cat_ is then passed through a pipe to the _wc_ command, which counts the number of lines of a file. So the final output will be the number of lines.

```sh
cat file.txt | wc -l
```

We can also chain multiple commands.

In this example, the output will be sent before to the command _tr_ and then send to _wc_.

```sh
cat file.txt | tr a p | wc -l
```

# Using filters with pipelines

Filters are often combined in pipelines to perform complex data processing tasks. For example:

```sh
cat file.txt | grep "error" | sort | uniq | wc -l
```

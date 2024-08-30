# Watch jobs

The `watch` command is a useful tool that allows you to run a command repeatedly at regular intervals and watch the output in real-time.

Usefull to monitor the status of various system processes and resources in real-time.

```sh
watch [options] command
```

## Common Use

### Monitor a directory for new files

List contents of the current directory every second.

```sh
watch -n 1 ls -l
```

### Monitor disk usage

This will show disk usage information every 5 seconds.

```sh
watch -n 5 df -h
```

#

### Monitoring a specific log file

This will show the last 20 lines of the syslog file and update it in real-time.

```sh
watch tail -n 20 /var/log/syslog
```

## Options

### `-n`

Specify the interval in seconds between executions (default is 2 seconds).

```sh
watch -n 2 [command] # every 2 seconds the command will be executed
```

### `-d`

Highlight the differences between consecutive outputs.

```sh
watch -d [command]
```

### `-t`

Turn off the header showing the interval, command, and current time.

```sh
watch -t [command]
```

### `-c`

Interpret ANSI color and style sequences.

```sh
watch -c -n 1 'ls --color=auto'
```

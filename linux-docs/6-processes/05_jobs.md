# Jobs

_Jobs_ are processes or commands that are started and managed within a shell session.

## Types of Jobs

### Foreground Jobs

- A foreground job is a process that runs in the active terminal session.
- It occupies the terminal and interacts with the user.
- Eg: Running a command like nano file.txt directly in the terminal.

### Background Jobs

- A background job runs independently of the terminal session and does not occupy the terminal.
- This allows you to continue using the terminal for other commands.
- You can start a job in the background by appending `&` to the command.
- The job will run in the background, and you'll get a job number and PID.

### Suspended Jobs

- A suspended job is one that was running in the foreground and has been paused (stopped) by pressing `ctrl+z`.
- This stops the process and puts it in the background in a suspended state.
- You can then resume it in the _foreground_ or _background_.

## Job Status

The status of the jobs listed can be:

- _Running_
  - The job is currently running in the background.
- _Stopped_
  - The job is suspended (paused) and not currently executing.
  - This usually happens when you suspend a job with `ctrl+z`.

## Managing Jobs

### Lists current jobs

Lists all jobs in the current shell session, showing their status (e.g., running, stopped).

```sh
jobs
```

### Start a command in the background

The command sleep 600 starts in the background, with job number 1 and PID 1234.

```sh
sleep 600 & # Output: [1] 1234
```

### Suspend a Foreground Job

```sh
long-running-command
(Ctrl+Z)
[1] + 5678 suspended
```

### Bring a job to the foreground

Brings a background or suspended job to the foreground.

You specify the job number.

```sh
fg %1
```

### Resume a job in the background

Resumes a suspended job in the background.

```sh
$ bg %1
```

### Kill a job

Sends signals to terminate or control jobs.

```sh
$ kill %1
$ kill -9 %1 # Forcefully terminate job number 1
```

disown Command:

# Removes jobs from the shell’s job table

Removes jobs from the shell’s job table, so they are no longer affected by job control commands (like fg, bg).

Useful if you want to log out but keep jobs running.

```sh
disown %1
```

# Crontab

`crontab` is a command used to schedule jobs to run periodically at fixed times, dates, or intervals.

These scheduled tasks or commands are known as "cron jobs."

Cron jobs can be:

- User crontabs
  - Every user, including root, can have their own crontab file.
- System crontabs

## `cron`

The `cron` daemon is a background process that runs and checks the `crontab` files for commands that need to be executed.

```sh
ps -ef | grep cron
```

Is started at boot time by the system's initialization process.

```
root    1703       1  0 12:13 ?        00:00:00 /usr/sbin/cron -f -P
```

## File `/etc/crontab`

The system-wide crontab located at `/etc/crontab` can be used for system-level scheduling.

### Structure

#### `SHELL`

Specifies the shell to be used by cron jobs. By default, this is set to /bin/sh.

#### `PATH`

Specifies the directories to be searched for executables. This ensures that cron jobs can find the commands they need to run.

#### Scheduling tasks table

This table contains the following fields:

- `m` (minute) -> (0-59)
- `h` (hour): -> (0-23)
- `dom` (day of month) -> (1-31)
- `mon` (month) -> (1-12)
- `dow` (day of week) -> (0-7)
- `user`: which the command should be executed
- `command`: command to be executed

Example

This runs the `run-parts` command, which executes all scripts in the `/etc/cron.hourly` directory at the 17th minute of every hour.

```sh
17 * * * * root cd / && run-parts --report /etc/cron.hourly
```

## Editing crontabs

Edit the user's crontab.

This opens your crontab in the default text editor. After editing, the cron daemon will automatically pick up the changes.

```sh
crontab -e
```

## Display user's crontab

List the contents of a user's crontab.

```sh
crontab -l
```

## Remove crontab

To remove a user's crontab.

```sh
crontab -r
```

# Command Prompt

The command prompt is the text interface that indicates the shell is ready to accept commands.

Typically appears in the terminal as a string of text followed by a blinking cursor. It may display information like the current user, hostname, and current directory.

## Default Prompt

For a regular user

```
user@hostname:~/directory$
```

For the root user

```
root@hostname:/directory#
```

## Customize Command Prompt

The prompt is controlled by the `PS1` environment variable.

`PS1` defines the appearance of the main command prompt. You can customize it by assigning different values to PS1 in your shell configuration file (e.g., .bashrc or .zshrc).

```sh
export PS1="your_custom_prompt"
```

## Common Escape Sequences

- `\u`: Username of the current user

  ```sh
  export PS1="Username \u" # Outputs the current username
  ```

- `\h`: Hostname up to the first . (e.g., hostname for hostname.domain.com)
- `\H` Full hostname (e.g., hostname.domain.com)
- `\w` Current working directory (e.g., ~/folder)
- `\W`: Basename of the current working directory (e.g., folder)
- `\t`: Current time in 24-hour HH:MM
  format
- `\T`: Current time in 12-hour HH:MM
  format
- `\d`: Date in "Weekday Month Date" format (e.g., "Tue May 26")
- `\n`: Newline
- `\!`: History number of the current command
- `\$`: # if the user is root, otherwise $

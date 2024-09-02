# Command mode (Ex mode)

In vim, Command mode (also known as Ex mode or Last Line mode) is used to enter commands that perform various actions, such as:

- saving a file
- quitting vim
- searching
- replacing text

These commands are typically preceded by a colon (:) and are entered while in Normal mode.

## Entering Command Mode

- Press `:` while in Normal mode:

  - vim will display a colon at the bottom of the screen, indicating that you can now enter a command

- Type your command
- Then press Enter

# Common Commands

## File Management

Save the current file

```sh
:w
```

Save the current file with a new name:

```sh
:w newfilename
```

Save and quit

```sh
:wq
```

Quit vim if there aren't any changes

```sh
:q
```

Quit without saving changes

```sh
:q!
```

Save all open files and quit

```sh
:wqa
```

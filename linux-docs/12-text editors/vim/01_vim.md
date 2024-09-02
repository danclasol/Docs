# Vi

`vi` is a text editor available on almost all UNIX-like operating systems, including Linux.

## Vim

`vi` has several clones and derivatives, with `vim` (_Vi IMproved_) being the most popular.

`vim` includes additional features like syntax highlighting, better undo/redo capabilities, and extended functionality compared to the original vi.

# Modes

`vi` operates with several modes, each designed for different types of interactions with text.

## Normal Mode

This is the mode vim starts in by default.

- how to enter

  - default mode at vim start
  - press `Esc` from any other mode.

- common actions
  - navigate with arrow keys or `h`, `j`, `k`, `l`
  - delete text with `d`
  - copy (yank) text with `y`
  - paste text with `p`
  - enter Insert mode with `i`, `a`, `o`

## Insert Mode

This mode is used for inserting or modifying text. You type text just like in any other text editor.

- how to enter

  - Press `i` to insert text before the cursor
  - Press `a` to insert text after the cursor
  - Press `o` to open a new line below the current line and insert text

- how to exit

  - Press `Esc` to return to Normal mode

- common actions

  - typing text
  - editing existing text

## Visual Mode

This mode is used for selecting text. Once selected, you can perform actions like copying, cutting, or formatting the selected text.

- how to enter

  - Press `v` for character-wise selection.
  - Press `V` for line-wise selection.
  - Press `Ctrl` + `v` for block (column) selection (Visual Block mode).

- how to exit

  - Press `Esc` to return to Normal mode

- common actions
  - Select text with arrow keys
  - Delete the selection with `d`
  - Yank (copy) the selection with `y`
  - Change the selection with `c`

## Command Mode (Ex Mode or Last-Line Mode)

This mode is used to execute commands that usually affect the entire file, such as saving, quitting, searching, and replacing.

- how to enter

  - Press `:` from Normal mode. The cursor moves to the bottom of the screen, indicating Command mode.

- how to exit

  - press `Enter` after typing a command
  - press `Esc` to cancel the command and return to Normal mode.

- common Commands
  - `:w` to save
  - `:q` to quit
  - `:wq` to save and quit
  - `:s/old/new/g` to search and replace

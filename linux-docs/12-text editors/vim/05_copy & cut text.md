# Copy

Copying text in vim involves using the "yank" command, which is similar to copying in other text editors.

## Copy a line

Copy the entire line where the cursor is located

- Press `yy`

Copy multiple lines, prefix with a number.

- For example, to copy 3 lines, type `3yy`

## Copy a word

Copy the word under and after the cursor.

- Press `yw`

## Copy a character

Copy the character under the cursor

- Press `yl`

## Copy to the end of the line

Copy from the cursor position to the end of the line:

- Press `y$`

## Copy to the beginning of the line

Copy from the cursor position to the beginning of the line.

- Press `y0`

# Cut

In vim, the cut command is a combination of delete (d) and yank (y), since anything you delete is automatically placed in the buffer (vim's clipboard) and can be pasted.

## Cut a line

Cut the entire line where the cursor is located.

- Press `dd`

Cut multiple lines, prefix with a number.

- For example, to cut 3 lines, type `3dd`.

## Cut a word

Cut the word under and after the cursor.

- Press `dw`

## Cut a character

Cut the character under the cursor.

- Press `x`

## Cut to the end of the line

Cut from the cursor position to the end of the line.

- Press `d$`

## Cut to the beginning of the line

Cut from the cursor position to the beginning of the line.

- Press `d0`

# Pasting text

After copying or cutting the text, you can paste it

### Paste after the cursor

- Press `p`

### Paste before the cursor:

- Press `P`

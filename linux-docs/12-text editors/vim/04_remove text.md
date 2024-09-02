# Remove text

Removing text in vim can be done in several ways, depending on how much text you want to delete.

## Deleting a Single Character

Delete the character under the cursor

- Press `x`

Delete the character before the cursor

- Press `X`

## Deleting a Word

Delete the word under and after the cursor

- Press `dw`

Delete the word before the cursor

- Press `db`

Delete the word under the cursor, including the whitespace after it

- Press `diw`

## Deleting a Line

Delete the entire line where the cursor is located

- Press `dd`

Delete multiple lines

- For 3 lines, type `3dd`.
- For 5 lines, type `5dd`, and so on.

## Deleting to the End of the Line

Delete from the cursor position to the end of the line

- Press `d$`

## Deleting to the Beginning of the Line

Delete from the cursor position to the beginning of the line

- Press `d0`.

## Deleting a block of text

Delete from the cursor position to a specific line number

For example, to delete from the current line to line 10, type `d10G`.

## Undoing Deletions

Undo the last deletion

- Press `u`

Redo the undone deletion

- Press Ctrl + r.

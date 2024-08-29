# Archives

An archive is a collection of files and directories that are bundled together into a single file.

### Use Case

- storage, backup, or transfer of multiple files as a single unit
- compress files to save space
- bundle multiple files for easier distribution or backup
- not manage software installation or dependencies

## Common types

### Tar files (`.tar`)

- collection of files and directories bundled into a single file without any compression
- most common archive formats in Linux
- Usage:
  - Typically used to bundle files together before compression.

### Tar compressed files (`.tar.gz`, `.tar.bz2`, `.tar.xz`)

These are `tar` files that have been compressed to reduce their size.

Different compression algorithms can be applied:

- `.tar.gz`: compressed with `gzip`
- `.tar.bz2`: compressed with `bzip2`
- `.tar.xz`: compressed with `xz`

### Zip Files (`.zip`)

The zip format is widely used across different operating systems, including Linux.

Unlike tar, which separates the archiving and compression steps, zip archives both bundles and compresses the files simultaneously.

Handy for creating cross-platform archives.

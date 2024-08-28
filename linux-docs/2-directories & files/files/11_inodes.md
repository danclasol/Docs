# Inodes

An `inode` is a data structure that contains metadata about a file or directory in a Unix/Linux filesystem.

## Inode Information

Every file or directory has an inode associated with it, storing information such as:

- File size
- Permissions (read, write, execute)
- Owner and group
- Timestamps (creation, modification, access)
- Number of hard links pointing to the file
- Pointers to the disk blocks where the file's data is stored

Note: The inode does not store the file's name; the name is associated with the inode through directory entries.

## Creation

In Linux, you don't directly create an inode; instead, inodes are automatically created and managed by the filesystem when you create a file or directory.

Each time you create a new file or directory the filesystem:

- allocates an inode to the file of directory
- creates a _hard link_ (the filename) that points to the inode

Inodes are a finite resource on a filesystem, meaning that if you create a large number of small files, you could run out of inodes even if you still have disk space available.

Filesystems typically allocate a fixed number of inodes when they are created, based on the filesystem's configuration.

## Checking Inode Information

### File Number of Inodes

Use the `ls` command with the `-i` option to show information of the _inodes_.

It shows the following:

- Inode number id
- Number of links of the file or directory

```sh
ls -li
```

### Inode Usage

If you want to check _inode_ usage on your filesystem (e.g., how many inodes are free and how many are used), you can use the `df` command with the `-i` option

This shows inode usage for all mounted filesystems.

```sh
df -i
```

# Links

In Linux, links are pointers or references to files and directories.

## Hard links

A `hard link` is a direct reference to a specific _inode_. This means a file can have multiple names (hard links) that point to the same inode.

- If one name (_hard link_) is deleted, the others remain, and the file is not actually deleted until all hard links are remove.

- All hard links share the same data and _metadata_ (except for the name and location in the directory structure).

## Soft links (or Symbolic Link)

A `symbolic link` is a special file that contains a reference to another file or directory by name, not by inode.

- If the target file is deleted, the symbolic link becomes "broken" and does not point to a valid location.

- Unlike hard links, symbolic links can point to files on different filesystems.

## Create Links

### Create _hard link_

When you create a _hard link_ to an existing file, no new inode is created; instead, the link count in the existing inode is incremented.

```sh
ln filename hard_link_name
```

### Create _symbolic link_

When you create a _symbolic link_, a new file with its own inode is created, but the content of this file is simply the path to the original file.

```sh
ln -s filename symbolic_link_name
```

## Deleting Links

### Delete _hard link_

Hard links are just additional filenames pointing to the same inode, so to remove a hard link just remove the filename.

```sh
rm hard_link_name
```

When you delete a hard link, you're only removing one name pointing to the inode. The actual file data is only deleted when the last hard link (name) is removed.

- If there are no other hard links pointing to the same inode, the file data is deleted from the filesystem.

- If there are other hard links, the data remains until the last hard link is removed.

### Delete _symbolic link_

Deleting a _symbolic link_ does not affect the target file or directory.

To delete a symbolic link, you also use the rm command

```sh
rm symbolic_link_name
```

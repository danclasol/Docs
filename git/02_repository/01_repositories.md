# Repositories

A repository is a folder where the different versions of a project's files are stored, along with the history of changes made to them.

Repositories can be:

- local: located on our computer

- remote: hosted on an external server

  - allow other people to make changes to the project, which are visible and can be synchronized by other users

## Working directory

A working directory in Git is the local environment where files are stored and modified as part of a project.

It reflects the current state of the project's files, allowing developers to edit, add, or delete files.

Changes made in the working directory can be staged for commit, which means they're prepared for inclusion in the next commit.

The working directory is connected to the Git repository, and it helps manage the differences between the committed history and the current state of the files. It plays a central role in tracking changes, testing, and developing new features.

## Staging Area

In Git, a staging area serves as an intermediate step between your local repository changes and the actual commit.

- Temporary storage:
  - The staging area holds changes that are intended to be part of the next commit
- Previewing changes:
  - It allows you to preview your changes before committing them

## Status

When using Git, project files can be in one of the following states, which represent the file lifecycle within the repository:

- `modified`: file has changes, but they haven’t been marked to be committed yet

  - located in the working directory

- `staged`: files modified in the working directory and marked as ready to be committed to the local repository

  - located in a temporary staging area
  - this action is called `add`

- `committed`: file has been saved in the local repository

  - this action is called `commit`

- `ignored`: files can be marked so they are no longer tracked in your project directory — in practice, they are invisible to Git

  - excluded from the control flow and are not affected by the modified, staged, or committed states

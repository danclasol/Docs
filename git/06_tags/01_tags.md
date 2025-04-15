# Tags

In Git, tags are used to mark specific points in history—typically used for releases (like v1.0, v2.1.3, etc).

Tags are like named bookmarks pointing to a particular commit.

## Types

Tags can be:

- **Lightweight tag**: name pointing to a commit

  ```sh
  git tag v1.0
  ```

- **Annotated tag**: Contains metadata like tagger’s name, date, and a message

  ```sh
  git tag -a v1.0 -m "Release version 1.0"
  ```

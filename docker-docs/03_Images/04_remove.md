# `rmi`

Remove one or more Docker images from your local system.

- if an image is being used by a container (even if stopped), Docker won’t let you remove it without the `--force` option

```bash
docker rmi [OPTIONS] IMAGE [IMAGE...]
```

## Common use

### Remove a single image by name

```bash
docker rmi nginx
```

### Remove an image by tag

```bash
docker rmi ubuntu:20.04
```

### Remove an image by ID

```bash
docker rmi 231d40e811cd
```

### Remove multiple images at once:

```bash
docker rmi ubuntu alpine nginx
```

### Remove dangling images

Removes all images that are not tagged and not referenced by any container.

```bash
docker image prune
```

### Remove all images

Remove all unused images, not just dangling ones.

```bash
docker image prune -a
```

## Options

### `-f` or `--force`

Force removal of the image (even if it's used by containers)

### `--no-prune`

Do not delete untagged parent images

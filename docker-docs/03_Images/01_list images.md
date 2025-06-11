# `images`

Lists all the Docker images available locally on your machine.

```bash
docker images [OPTIONS]
```

## Common use

### List all images

```bash
docker images
```

## Options

### `-a` or `--all`

Show all images (default hides intermediate layers)

```bash
docker images -a
```

### `--digests`

Shows the content digest (content hashes) for each image

```bash
docker images --digests
```

### `--filter` or `-f`

Filter images by criteria (e.g., dangling, label, etc.)

```bash
docker images -f "dangling=true"
```

### `--format`

Format output using a Go template

```bash
docker images --format "{{.Repository}}:{{.Tag}} - {{.Size}}"
```

### `--no-trunc`

Prevents Docker from shortening fields like the `IMAGE ID`, `DIGEST`, and `CREATED BY`.

```bash
docker images --no-trunc
```

### `-q`, `--quiet`

Only show image IDs (useful for scripting)

```bash
docker images -q
```

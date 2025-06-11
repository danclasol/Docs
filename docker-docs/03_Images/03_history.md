# `history`

Shows the history of an image, specifically, the layers that make up a Docker image, including their size and creation commands.

```bash
docker history [OPTIONS] IMAGE
```

## Common use

Get history of an image

```bash
docker history ubuntu
```

## Options

### `--no-trunc`

Don’t truncate output (shows full image IDs and commands).

```bash
docker history --no-trunc ubuntu
```

### `--quiet` or `-q`

Only show layer IDs (useful for scripting or filtering).

```bash
docker history -q alpine
```

### `--format`

Format the output using a Go template.

```bash
docker history --format "Created by: {{.CreatedBy}} | Size: {{.Size}}" node
```

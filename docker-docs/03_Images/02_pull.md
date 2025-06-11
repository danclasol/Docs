# `pull`

Download a Docker image from a registry (typically Docker Hub) to your local machine.

```bash
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

## Common use

### Pull the latest version of an image

```bash
docker pull ubuntu
```

### Pull a specific version/tag

```bash
docker pull ubuntu:20.04
```

### Pull from a specific registry

```bash
docker pull myregistry.com/myimage:1.0
```

### Pull by digest (advanced use)

```bash
docker pull ubuntu@sha256:<digest>
```

## Options

### `--all-tags` or `-a`

Download all tagged images in the repository (not just the latest tag).

```bash
docker pull -a nginx
```

### `--quiet` or `-q`

Suppress verbose output (only show the image ID when done).

```bash
docker pull -q redis
```

### `--platform`

Set the platform (e.g., linux/amd64, linux/arm64, etc.).

```bash
docker pull --platform linux/arm64 alpine
```

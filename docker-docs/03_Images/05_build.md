# `build`

Create a Docker image from a Dockerfile and the application files in your directory.

- `PATH`: current directory, where your Dockerfile is located
  - usually `.`

```bash
docker build [OPTIONS] PATH
```

## Common use

Given this folder structure

```
my-app/
│
├── Dockerfile
├── package.json
├── index.js
```

Build an image named `my-app` with the content of the current folder `.`

```bash
docker build -t my-app .
```

## Options

### `-t`

Tags the image with a name (e.g., myapp:latest)

- `-t my-image:v1`: names and tags the image

```bash
docker build -t my-app .
```

### `-f`

Specifies a custom Dockerfile name or path

- `-f ./Dockerfile.prod`: uses a custom Dockerfile called `Dockerfile.prod`

```bash
docker build -f ./Dockerfile.prod .
```

### `--no-cache`

Builds the image without using any cached layers

```bash
docker build --no-cache -t my-app .
```

### `--build-arg`

Passes build-time variables into the Dockerfile

- `USERNAME=alice`: creates a user named alice inside the image

```bash
docker build --build-arg USERNAME=alice .
```

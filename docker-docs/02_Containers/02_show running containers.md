# `ps`

Show active (running) containers on your system.

```bash
docker ps -a
```

### Options

### `-a`

Show all containers (running + stopped)

```bash
docker ps -a
```

### `-q`

Show only container IDs

```bash
docker ps -q
```

### `--filter`

Filter by name, status, etc.

```bash
docker ps --filter "status=exited"
docker ps --filter "name=my-nginx"
```

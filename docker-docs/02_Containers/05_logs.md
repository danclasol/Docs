# `logs`

Shows the standard output (stdout) and standard error (stderr) from a running (or stopped) container.

- only works for containers that use the default logging driver (json-file)

```
docker logs <id_contenedor>
```

## Options

### `-f`

Follow the logs in real time.

```bash
docker logs -f my-app
```

### `--tail`

Show only the last `n` lines

```bash
docker logs --tail 50 my-app
```

### `--since` <time>

Show logs since a specific time (5m, 1h, etc.)

```bash
docker logs --since 10m my-app
```

### `--timestamps`

Show log timestamps

```bash
docker logs --timestamps my-app
```

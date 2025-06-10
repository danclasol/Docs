# Stop running a container

Used to gracefully stop a running container.

If sends a SIGTERM signal, waits (by default 10 seconds), then forces the container to stop if it hasn't shut down.

- stopping a container doesn't removes it

```bash
docker stop <container_name_or_id>
```

## Common uses

### Stop multiple containers

```bash
docker stop container1 container2 container3
```

### Stop all running containers

```bash
docker stop $(docker ps -q)
```

## Options

### `-t`

Set a custom timeout (in seconds).

```bash
docker stop -t 5 my-nginx
```

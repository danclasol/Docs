# Remove containers

The docker `rm` command is used to delete one or more stopped containers from your system.

It does not remove images or volumes—only the container.

```bash
docker rm <container_name_or_id>
```

## Common uses

### Remove multiple containers

```bash
docker rm container1 container2 container3
```

### Remove all stopped containers

```bash
docker container prune
```

## Options

### `-f` or `--force`

Force remove a running container (sends SIGKILL)

```bash
docker rm -f my-nginx
```

### `-v`

Remove the associated volumes

```bash
docker rm -v my-nginx
```

# `exec`

Allows you to run a command inside an already running container.

Useful for debugging or managing containers from within.

```bash
docker exec [OPTIONS] <container_name_or_id> <command>
```

## Common uses

### List files in a directory

```bash
docker exec my-container ls /usr/src/app
```

### View contents of a file

```bash
docker exec my-container cat /etc/hosts
```

### Run a shell inside a container

```bash
docker exec -it my-container bash
```

## Options

### `-i`

Run the command in interactive mode

```bash
docker exec -i my-container bash
```

### `-t`

Allocate a pseudo-TTY (gives you a terminal-like interface)

```bash
docker exec -t my-container bash
```

### `-u <user>`

Run the command as a specific user inside the container

```bash
docker exec -u root my-container whoami
```

### `--privileged`

Give the command extended privileges (not often needed)

### `--detach` or `-d`

Run the command in the background (detached mode)

```bash
docker exec -d my-container touch /tmp/testfile
```

### `--env` or `-e`

Set an environment variable for the command

```bash
docker exec -e MY_VAR=123 my-container printenv MY_VAR
```

### `--workdir` or `-w`

Set the working directory inside the container before running the command

```bash
docker exec -w /usr/src/app my-container ls
```

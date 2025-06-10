# Run Container

Create and start a new container from a Docker image.

```bash
docker run <image_name>
```

## Options

### `-d`

Run in detached mode (in the background).

```bash
docker run -d nginx
```

### `-p`

Map host port to container port

- access NGINX on http://localhost:8080

```bash
docker run -p 8080:80 nginx
```

Define a range of port numbers

- port from 8080 to 9000

```bash
docker run -p 8080-9000:80 nginx
```

### `-v`

Mount a volume (share files)

```bash
docker run -v /host/path:/container/path nginx
```

### `--name`

Name your container

```bash
docker run --name my-nginx nginx
```

### `--rm`

Auto-remove container after exit

```bash
docker run --rm ubuntu echo "Hello"
```

### `-e`

Set environment variables

```bash
docker run -e MYSQL_ROOT_PASSWORD=mysecret mysql
```

### `--env-file`

Instead of writing manually variables with multiple `-e` options pass a container from a file.

```bash
docker run --env-file <path-to-env-file> IMAGE
```

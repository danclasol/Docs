# Container

A container is an instance of an image.

It’s also a process that contains an application and all its dependencies, including both the libraries of the programming language you’re using and the required system libraries.

## Main command

The main command is the default process that a Docker container runs when it starts.

When this command finishes, the container also stops. This is important because a container can either:

- run a task and exit
- or run a service that stays active continuously

It is defined in the _Dockerfile_ before building the image, using the `CMD` or `ENTRYPOINT` instruction (we’ll see the difference between them later).

```
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

# Managing containers

## Run a container

Multiple containers from the same image can be runned

```
docker run <imagen>
```

## View running containers

Shows a list of currently running containers.

```
docker ps
```

Use `-a` to include stopped containers

```
docker ps -a
```

## Stop container

```
docker stop <container_id or name>
```

## Restart container

```
docker restart <container_id or name>
```

## Remove contianer

Deleting a container does not delete the image, because a container is just an instance of that image.

```
docker rm <container_id or name>
```

## Remove All Stopped Containers

```
docker container prune
```

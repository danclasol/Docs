# Instalation Docker Desktop

Docker is the desktop application for Docker

- includes Docker Engine
- UI tools utils

## Docker Desktop Windows

Download and install Docker Desktop

- https://www.docker.com/get-started/

### Settings

### Resources

- CPU limit
- Memory limit
- Swap
- Virtual disk limit

# Instalation Docker Engine

Docker Engine is part of the Docker software that create and execute containers.

- can only be install in Linux
- suitable for most use cases
- only provides CLI

## Docker Engine Linux

Execute oficial instalation script for Docker.

- install all dependencies
- settings to run Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
```

# Test instalation

To test Docker is install iun your machine.

```bash
docker --version
```

You can also run the _hello-world_ container test

```bash
docker run hello-world
```

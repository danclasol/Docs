# Images

A Docker image is a read-only template used to create containers.

It includes:

- application code
- dependencies (libraries, packages, OS files)
- environment variables
- configuration files

## Dockerfile

Dockerfile is a set of sequential instructions that tell Docker how to build an image.

- allo multiple instructions
- can install dependencies, copy files, define environment variables, and more

Example of a Dockerfile that builds an image that includes _Node.js_, your app code, dependencies, and starts your app with node _index.js_.

```bash
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
```

## Docker Hub

Docker Hub is the official cloud-based repository where you can store, share, and discover Docker images.

- like GitHub, but for Docker containers
- easy to share your images
- access to thousands of ready-to-use images
- great for CI/CD pipelines
- secure and trusted base images

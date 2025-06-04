# Basic concepts

Basic conecept to understand Docker

## Container

A container is an instance of an image.

It is also a process running in an isolated environment.

## Imagen

An image is a binary file that contains everything needed to run a container.

It acts as a template used to create containers.

## Dockerfile

A Dockerfile is a text file that contains the instructions required to build an image.

## Docker Hub

Docker Hub is a container image repository. It is like GitHub, but for container images, where you can store, share, and download images.

## Docker Compose

Docker Compose is a tool used to define and run multi-container Docker applications.

- easy orchestration of multiple services
- consistent environments for development and testing
- fewer commands to manage complex apps

## Docker Scout

Docker Scout is a tool that provides security analysis and insights about your container images.

- scans images for vulnerabilities
- shows dependency chains
- suggests secure base images
- helps maintain compliance

## TestContainers

Testcontainers is a Java (and multi-language) library that allows you to run real Docker containers in automated tests.

- reliable integration tests with real dependencies
- automatically starts and stops containers in test lifecycle
- supports Java, Node.js, .NET, Python, etc

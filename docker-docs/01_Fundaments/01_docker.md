# Docker

Docker is an open-source platform that allows developers to build, ship, and run applications inside lightweight, portable containers.

It provides a way to package, distribute, and run applications consistently across different environments, whether in development, testing, or production.

- use operating system-level virtualization technologies to create lightweight and portable environments
- each container runs independently, with its own file system, libraries, and configurations, but shares the same underlying operating system kernel

Docker uses containers, a software unit that encapsulates an application and all its dependencies in an isolated environment.

## History

Docker was launched in 2013 by the company Docker, Inc., and it quickly became one of the most widely adopted technologies in the IT world.

The concept of containers did not begin with Docker. Technologies such as LXC (Linux Containers) already existed and allowed operating system-level virtualization.

However, Docker made containers popular by providing a simple, efficient, and user-friendly way to create, distribute, and run software.

## Container vs Virtual Machine

Containers and Virtual Machines are virtualization technologies that allow multiple applications to run on the same physical server.

However, there are significant differences between the two in terms of architecture, performance, and resource usage:

### Virtual machines

Virtual maachiens emulate an entire hardware system, including an operating system, a virtualization layer, and an application

- each VM runs on its own hypervisor which manages the physical server’s resources and provides isolation between VMs
- VMs are independent and portable, but also more resource-intensive and less efficient than containers

### Containers

Containers, on the other hand, share the same underlying operating system kernel and run in isolated environments while sharing system resources such as CPU, memory, and storage.

- containers are lighter and faster than VMs, as they don’t carry the overhead of a full operating system and an additional virtualization layer

## Benefits

- portability

  - containers bundle the application and its dependencies
  - can be run anywhere

- lightweight

  - containers share the host OS kernel, so they use less memory and CPU
  - can start in seconds

- isolation

  - each container runs in its own isolated enviroment, preventing conflicts between applications or services

- scability

  - containers can be easily scaled to handle varying workloads and make the most of system resources

## Use cases

Containers can be used in a wide variety of scenarios

- Application Development and Testing

  - allow developers to create consistent environments across different stages of development and testing, reducing compatibility issues

- Microservices Deployment

  - ideal for running microservices since each service can run independently in its own container and be updated or scaled individually

- Cloud Application Deployment

  - lightweight and portable, making them perfect for deploying applications across cloud platforms (AWS, Azure, GCP, etc.)

- CI/CD (Continuous Integration / Continuous Deployment)

  - enable fast, repeatable builds, tests, and deployments
  - improving automation and delivery speed in DevOps pipelines

- Application Isolation

  - containers isolate applications from each other, ensuring that one app doesn't interfere with another — useful in shared environments

- Scalability and High Availability

  - can be easily scaled up or down to handle changing loads
  - can be orchestrated for high availability using tools like Kubernetes

- Cross-Platform Development
  - developers can build and test applications on one platform and run them reliably on another, thanks to container portability

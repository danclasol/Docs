# Git on the server

Remote repositories allow teams of people to collaborate on the same codebase.

## Repositories

Remote repositories are repositories hosted on a server and serve as a synchronization point between different local repositories.

## Protocols

Git can use four types of protocols to transfer data between repositories.

### Local

The remote repository is simply another folder on the disk.

Used when team members have access to the same file system:

- NFS (Network File System) mount point
- When everyone connects to the same computer

### HTTP

Runs over standard HTTP/S ports and can use different
HTTP authentication mechanisms.

Authentication via username and password,
with all transfers being encrypted and authenticated.

### SSH (Secure Shell)

SSH is a secure communication protocol that allows users on a network
to connect to a remote server.

This allows us to work with remote repositories
without needing to enter a username and password every time.

Access via SSH is secure, as all transfers are encrypted and authenticated.

### Git

The Git protocol is a special daemon that comes built into Git.

It listens on a dedicated port (9418) and offers a service
similar to SSH, but without any authentication.

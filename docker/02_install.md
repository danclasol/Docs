# Install Docker Engine

## Ubuntu (using apt repository)

### Actualizar el sistema

```sh
sudo apt update
```

### Set up Docker's apt repository

- Add Docker's official GPG key 
```sh
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

- Add the repository to Apt sources:
```sh
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

# Install the Docker packages.

```sh
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

# Install Docker Desktop

### Download the latest DEB package

For checksums, see the Release notes.

### Install the package using apt

```sh
sudo apt-get update
sudo apt install ./docker-desktop-amd64.deb
```
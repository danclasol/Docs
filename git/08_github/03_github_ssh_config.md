# Setting SSH Keys in Github

GitHub offers a way to set up an SSH connection.

- Documentation GitHub: https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## Create SSH Key

To do this, you need to log in to your GitHub account and go to https://github.com/settings/keys.

Click the "New SSH key" button.

## Algorithm

We must select one of the following key generation algorithms:

- `rsa`: A fairly old algorithm. Not recommended.

  - Minimum size: 2048 bits. 4096 bits is more recommended.

- `dsa`: Also an old algorithm. Not recommended.

  - Common key size: 1024 bits.

- `ecdsa`: The most commonly used due to high compatibility.

  - Supports 3 key sizes: 256, 384, 521 bits.

- `ed25519`: The newest algorithm, but not yet widely supported.

## Key Size

You also need to choose a key size, which depends on the selected algorithm and its supported range.

It’s generally recommended to use the largest key size available for increased security.

## Generar clave

AOpen Git Bash and run the following:

- `ssh-keygen`: command to generate the key
- `ecdsa`: type of algorithm
- `521`: key size for the selected algorithm
- `email`: used as a comment to identify the key

```sh
ssh-keygen -t ecdsa -b 521 -C "your_email@example.com"
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> You can choose either algorithm. ed25519 is more modern but may not be compatible with all systems.

After running the command, Git will ask you to confirm the following:

- location where the key should be saved (default is usually fine).
- optional passphrase to protect the private key
  - adds an extra layer of security
  - will be required each time the key is used

Once complete, two key files will be created in the directory you specified:

- private key: your_key
- public key: your_key.pub

## Fichero configuracion

In order for the system to know how to use these keys, we must create the configuration file on our system, if we do not already have it created.

We will create it in the same folder where the keys with the name `config` are

### Definir hosts

In this file, we will indicate that when we make requests to the different services or IPs, use one of the keys that we have generated in `./ssh`.

- _Host_ [HOST_NAME]: service or host name
  - _User_: Github username
  - _Hostname_: service address or domain
  - _PreferredAuthentications_: type of SSH authentication
  - _IdentifyFile_: private key location

```
Host github.com
    User username
    Hostname github.com
    PreferredAuthentications publickey
    IdentifyFile ~/.ssh/github
```

# Conect to Github

After generating the key, you can add the key to your account on GitHub.com to enable authentication for Git operations via SSH.

1. Go to Settings > Access - SSH and GPG keys
2. Click "New SSH Key" button
3. Add key
   - Title: identification name for the SSH key
   - Key: copy the content of the file of the public key

From now on, every time the system connects to Github it will do so through this SSH key and it will not ask us for a password, unless we have entered a password for the key.

We can do a test with:

```sh
ssh -T git@github.com
```

Next, you will ask us the following question, to which we will answer _yes_:

```
Are you sure you want to continue connectinog (yes/no/[fingerprint])? yes

Warning: Permanently added 'github.com,192.1.1.16' (ECDSA) to the list of known hosts.
Hi user! You've successfully authenticated, but GitHub does not provide shell access.danclg186473
```

# Clone projects using SSH Key

Now you can use the SSH key to clone projects:

1. Go to the project we want to clone
2. Click on "Code" > Local > SHH
3. Copy the SSH key

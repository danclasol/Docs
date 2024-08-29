## `root`

The `root` user is the superuser in Linux with full administrative privileges.

The root account has the highest level of control over the system, allowing it to perform any operation, including system-wide changes, installation of software, managing other users, and accessing all files.

- `username`: typically used "root"
- typically located at `/home/root`
- `UID`: 0
- prompt: usually is `#`

## Regular users

Regular users are non-administrative accounts created for individuals who use the system.

These users have limited permissions and are confined to their own home directories.

Cannot perform administrative tasks unless they have been granted `sudo` privileges, which temporarily elevates their privileges for specific commands.

- must be created by the `root` user
- typically located at `/home/username`
- UID: `>1000` (on most Linux distributions)
- prompt: usually `$`

## System users

System users are non-human users created by the system or during software installation to run specific services or processes.

Used internally by the system for running services like web servers, databases, and background processes (daemons).

For example, accounts like nobody, bin, daemon, and www-data are system users.

- automatically created
- not intended for direct login
- don`t have home directory or shell assigned
- UID: `<1000`

# Linux File System Hierarchy

Linux uses a standardized directory structure known as the Filesystem Hierarchy Standard (FHS) to organize files and directories.

## Root Directory (`/`)

The top-level directory of the Linux file system hierarchy.

All other directories are subdirectories of the root directory.

## Common Directories

### `/bin`

Contains essential user binaries (executables) needed for system booting and basic operations.

- Basic commands like `ls`, `cp`, `mv`, `cat`

### `/boot`

Contains the Linux kernel and bootloader files. This directory is crucial for the boot process.

- `vmlinuz` (kernel)
- `initrd` (initial RAM disk)
- bootloader configuration files

### `/dev`

Contains device files that represent hardware devices and virtual devices.

- `/dev/sda`: disk drives
- `/dev/tty`: terminals
- `/dev/null`

### `/etc`

Contains system-wide configuration files and shell scripts.

- `passwd`
- `fstab`
- `network`
- `init.d`

### `/home`

Contains user home directories. Each user has a directory here named after their username.

- User-specific files and configuration files
  - e.g. `/home/john`

### `/lib`

Contains shared library files required by system binaries and applications.

- `libc.so`
- `libm.so`

### `/media`

Mount point for removable media such as CDs, DVDs, and USB drives.

- `/media/usb`

### `/mnt`

Traditionally used for mounting filesystems temporarily.

### `/opt`

Contains optional software packages that are not part of the default system installation.

- Third-party software packages and applications.

### `/proc`

A virtual filesystem that provides information about system processes and hardware.

- `/proc/cpuinfo`
- `/proc/meminfo`

### `/root`

The home directory for the root user (superuser).

- Root user’s personal files and configurations.

### `/run`

Contains runtime information for system processes since the last boot.

- PID files
- system logs
- application-specific runtime data.

### `/srv`

Contains data for services provided by the system, such as web servers and FTP servers.

- `/srv/www`: for web server data

### `/sys`

A virtual filesystem that provides information and control over the kernel’s devices and subsystems.

- `/sys/class`
- `/sys/devices`

### `/tmp`

Contains temporary files created by system and user processes.

Files are typically deleted upon reboot.

- Temporary files and directories

### `/usr`

Contains user-related programs and data. It is a major part of the system where most user utilities and applications reside.

- `/usr/bin`: Non-essential user binaries
- `/usr/lib`: Libraries for user programs
- `/usr/share`: Architecture-independent data, like documentation and icons
- `/usr/local`: Locally installed software and packages

### `/var`

Contains variable data files that change as the system runs, such as logs and spool files.

- `/var/log`: Log files
- `/var/mail`: mail spools
- `/var/tmp`: temporary variable files

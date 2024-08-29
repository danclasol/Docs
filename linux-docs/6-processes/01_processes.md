# Processes

_Processes_ are instances of executing programs or commands.

Multiple processes can run at the same time, as Linux is multitasking and multiuser.

Processes can:

- Use the system's CPU to execute their instructions.
- Use memory to store themselves and their data.
- Access and manage their files.
- Interact with connected devices.

## Process Hierarchy

Linux processes are organized in a hierarchical tree structure, with each process having a parent.

Every proccess must have a initial parent process, called init or systemd, which is started by the kernel.

## Types of Processes

- **Foreground Processes**

  - These are processes that the user interacts with directly via the terminal.
  - They can be started and stopped manually.

- **Background Processes**

  - These processes run without direct user interaction, allowing the user to continue working in the terminal.

- **Daemon Processes**
  - Special types of background processes that run continuously, typically providing some kind of service (e.g., cron, sshd).

## Process States

- _*Running*_ (`R`)

  - The process is currently being executed by the CPU.

- _Sleeping_ (`S`)

  - The process is not currently running but is ready to run when needed.

- _Stopped_ (`T`)

  - The process has been stopped, usually by receiving a signal.

- _Zombie_ (`Z`):
  - The process has completed execution but still has an entry in the process table. This usually occurs because the parent process has not yet read the process's exit status.

## Process Attributes

- `PID` (Process ID)

  - A unique identifier assigned by the kernel to each process. PIDs are crucial for managing processes.

- `PPID` (Parent Process ID)

  - The PID of the parent process that created the current process.

- `UID` (User ID)

  - The UID identifies the user that owns the process.

- `EUID` (Effective User ID)

  - The EUID is used for permission checks, allowing a process to temporarily assume different privileges.

- `GID` (Group ID)
  Similar to UID/EUID, but for group permissions.

- `EGID` (Effective Group ID)

  - Similar to UID/EUID, but for group permissions.

- `TID` (Thread ID)

  - In multi-threaded processes, each thread is assigned a TID.

- `PGID` (Process Group ID)

  - Processes can be grouped into process groups, allowing them to be managed together. This is useful in managing signals sent to a group of related processes.

- Session ID:
  - Each session can contain multiple process groups, typically used in terminal management where all processes started by a user in a terminal are part of the same session.

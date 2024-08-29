# Delete a group

Delete a group from the system.

```sh
sudo groupdel groupname
```

This command will

- remove the group, but doesn't delete the users member's of the group
- remove the group entry from:

  - `/etc/group`
  - `/etc/gshadow` if group contains passwords or administrative information

If the group being deleted is the primary group of any user, the command will not allow you to delete it until you change the primary group of those users.

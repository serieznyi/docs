#Монтирование sshfs не под собой

```bash
sudo su

apt-get install sshfs

modprobe fuse

adduser <username> fuse

chown root:fuse /dev/fuse

chmod +x /dev/fuse

mkdir ~/remoteser

sshfs -o idmap=user <username>@<ipaddress>:/home/user ~/remoteserv

```
# Пробрасываем хостовые директории в Live CD
Иногда нужно обновить поврежденный дистрибутив Linux.

# TODO 
Загружаемся с Live CD

Смотрим ROOT-PARTITION ("/dev/sda1")


```sudo fdisk -l```


Монтируем все хостовые директории в Live OS

```
sudo mount ROOT-PARTITION /mnt
for i in /sys /proc /run /dev /dev/pts; do sudo mount --bind "$i" "/mnt$i"; done
sudo cp /etc/resolv.conf /mnt/etc/
sudo chroot /mnt
```
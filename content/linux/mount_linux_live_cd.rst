Пробрасываем хостовые директории в Live CD
==========================================

Иногда нужно обновить поврежденный дистрибутив Linux.

Загружаемся с Live CD

Смотрим ROOT-PARTITION (`/dev/sda1`)

.. code-block:: shell

    $ sudo fdisk -l

Монтируем все хостовые директории в Live OS

.. code-block:: shell

    $ sudo mount ROOT-PARTITION /mnt
    $ for i in /sys /proc /run /dev /dev/pts; do sudo mount --bind "$i" "/mnt$i"; done
    $ sudo cp /etc/resolv.conf /mnt/etc/
    $ sudo chroot /mnt

С этого момента можно делать upgrade пакеток и любые другие правки
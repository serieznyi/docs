# Очистка /boot

Иногда забивается загрузочный раздел

# TODO

Узнаем версию ядра 

`uname -r`

Выводим список доступных ядер

`sudo dpkg --list 'linux-image*'`

Удаляем не используемые

`sudo apt-get remove linux-image-VERSION`

Обновляем информацию в grub

`sudo apt-get autoremove; sudo apt-get autoremove;`
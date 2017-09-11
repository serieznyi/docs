# Очистка /boot

Иногда забивается загрузочный раздел

# TODO

Узнаем версию ядра 

```bash
uname -r
```

Выводим список доступных ядер

```bash
sudo dpkg --list 'linux-image*'
```

Удаляем не используемые

```bash
sudo apt-get remove linux-image-VERSION
```

Обновляем информацию в grub

```bash
sudo apt-get autoremove
```

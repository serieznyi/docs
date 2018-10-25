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

Удаляем неиспользуемые ядра

```bash
sudo apt-get remove linux-image-<VERSION>
```

Вызываем автоочистку

```bash
sudo apt-get autoremove
```

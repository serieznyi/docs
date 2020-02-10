# Установка новой версии ядра

> Была ситуация на Ubuntu 19.10 связанная с подвисанием.
> https://askubuntu.com/questions/1185491/ubuntu-19-10-freezes-and-lags-reguarly
> Был какой-то косяк в версии ядра.
> Кажется появилось исправление в последней patch версии ядра. Но она не ставилась через dist-upgrade
> Т.ч. делаем это ручками

# TODO

Узнаем версию текущего ядра 

```bash
uname -r
```

Смотрим список доступных для установки ядер

```bash
apt-cache search linux-generic
```

Устанавливаем самое свежее ядро

```bash
sudo apt install linux-image-unsigned-<VERSION>-generic
```

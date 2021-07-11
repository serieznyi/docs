Очистка /boot
=============

Иногда забивается загрузочный раздел

Узнаем версию ядра

.. code-block:: shell

    $ uname -r

Выводим список доступных ядер

.. code-block:: shell

    $ sudo dpkg --list 'linux-image*'

Удаляем неиспользуемые ядра

.. code-block:: shell

    $ sudo apt-get remove linux-image-<VERSION>

Вызываем автоочистку

.. code-block:: shell

    $ sudo apt-get autoremove

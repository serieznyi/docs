Глобальный .gitignore
======================

1) Создаем файл

.. code-block:: shell

    $ echo ".idea" > ~/.gitignore

2) Говорим git где он лежит

.. code-block:: shell

    $ git config --global core.excludesfile ~/.gitignore

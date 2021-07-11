Глобальные настройки
======================

Глобальный .gitignore
---------------------

1) Создаем файл

.. code-block:: shell

    $ echo ".idea" > ~/.gitignore

2) Говорим git где он лежит

.. code-block:: shell

    $ git config --global core.excludesfile ~/.gitignore
    
Глобальные настройки под разные организации
---------------------

Основной файл настроек

.. code-block:: shell

    ~ cat ~/.gitconfig

.. code-block:: shell

    [user]
            name = OgromniiZver123
            email = zver123@gmail.com
            signingKey = main-gpg-key
            
    [includeIf "gitdir:/home/zver/Projects/Org1/"]
            path = .gitconfig-org1    

    [includeIf "gitdir:/home/zver/Projects/Org2/"]
            path = .gitconfig-org2 
            
Дополнительный файл настроет под конкретную организацию
 
.. code-block:: shell
    
    ~ cat ~/.gitconfig-org1

.. code-block:: shell

    [user]
            name = Ivanov Ivan
            email = ivanov.ivan@org1.com
            signingKey = org1_gpg_key
            

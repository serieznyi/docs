Отправка изменений в несколько remote
=====================================

.. code-block:: shell

    $ git remote add bitbucket ssh://git@bitbucket.org/username/somerepo.git

    $ git remote add github ssh://git@github.org/username/somerepo.git

    $ git push -u bitbucket --all

    $ git config -e


Добавляем основной remote

::

    [remote "origin"]
        url = git@github.com:serieznyi/somerepo.git
        url = ssh://git@bitbucket.org/serieznyi/somerepo.git
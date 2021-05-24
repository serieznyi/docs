Сброс кеша DNS (Ubuntu)
=======================

You may use this command

.. code-block:: shell

    $ sudo systemd-resolve --flush-caches

To verify that flush was sucessfull, use

.. code-block:: shell

    $ sudo systemd-resolve --statistics

Sample output::

    Cache
      Current Cache Size: 0
              Cache Hits: 101
            Cache Misses: 256


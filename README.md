# База знаний

Содержит личную базу знаний

# Сборка

- Локальная сборка осуществляется с помощью Docker

```shell
$ docker run -it --rm -v $PWD:/docs sphinxdoc/sphinx make html
```

- Удаленная сборка описана в `.github/workflows`

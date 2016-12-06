# Несколько github deploy ключей на одной машине

Бывает требуется использовать на одной машине несколько deploy ключей с github.com 
для выкачивания разных приватных репозиториев

# TODO

Имеем 2 репозитория

`https://github/serieznyi/repo1.git`

`https://github/serieznyi/repo2.git`

1. Устанавливаем следующие remote у наших репозиториев

```
# Repository 1
[remote "origin"]
url = "ssh://git@repo1.github.com/serieznyi/repo1.git"

# Repository 2
[remote "origin"]
url = "ssh://git@repo2.github.com/serieznyi/repo2.git"
```

2. Настраиваем файл `~/.ssh/config`

```

Host repo1.github.com
    HostName github.com
    User git
    IdentityFile /home/serieznyi/.ssh/repo1.id_rsa
    IdentitiesOnly yes

Host repo2.github.com
    HostName github.com
    User git
    IdentityFile /home/serieznyi/.ssh/repo2.id_rsa
    IdentitiesOnly yes

```
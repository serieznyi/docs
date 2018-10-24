# Отправка изменений в несколько remote

```
# git remote add bitbucket ssh://git@bitbucket.org/serieznyi/somerepo.git

# git remote add github ssh://git@bitbucket.org/serieznyi/somerepo.git

# git push -u bitbucket --all

# git config -e

// Добавляем основной remote
[remote "origin"]
    url = git@github.com:serieznyi/somerepo.git
    url = ssh://git@bitbucket.org/serieznyi/somerepo.git
```
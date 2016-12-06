# Показывать diff зашифрованных файлов в git

Указываем в `.gitattributes` маски зашифрованных файлов

```
*-vaul.yml diff=ansible-vault
*.vaul diff=ansible-vault

```

Указываем чем открывать зашифрованные файлы

`git config --global diff.ansible-vault.textconv "ansible-vault view"`

# VERIFICAR SE HÁ CHAVES SHH EXISTENTES
> verificar
```ls -al ~/.ssh```
- se tiver alguma estara com a extensao .pub
- ex: id_rsa.pub

> gerar nova chave shh no linux:
> [doc: ](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
ssh-keygen -t ed25519 -C "<SEU EMAIL DO GITHUB>"
ssh-keygen -t ed25519 -C "rzjprogramador@gmail.com"
> DE ENTER EM TODAR AS OPCOES

> se rodar de novo o verificar shh vai ver :
id_ed25519.pub
 
 > iniciar agent shh
 ```eval "$(ssh-agent -s)"```

> executar o ssh-agent
```ssh-add ~/.ssh/id_ed25519```

> gerar chave shh no github : via terminal
> [doc: ](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
```cat ~/.ssh/id_ed25519.pub```
// [VAI GERAR UMA CHAVE COLE NO SHH KEYS DO GITHUB NAS NUVENS EM: ](https://github.com/settings/keys)

// CONCLUSAO : APOS ESTAS CONFIGS DE ADD CHAVES SHH O VSCODE E O CLI VAI FUNCIONAR NORMALMENTE PARA COMMITS E ACESSO AO GITHUB NAS NUVENS REMOTO
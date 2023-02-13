# COMANDOS GITHUB
# logger_pass: Rzj30...

> ver repositorio remoto mapeado:
git remote -v

> senao tiver mapeado ainda mapear projeto da maquina com o da nuvem com:
git remote add origin <url do projeto>

> configuracoes do nosso git: ver em lista
git config --list

> configuracoes disponiveis
[ 
    system : doSistema >> È global vale para qualquer usuario e projeto que usar a maquina, 

    doUsuario: é pra quqlquer projeto que esteja no meu usuario configurado ,

    doProjeto: é somente apra este projeto mesmo..noa depende de usuario,
]

> local_arquivo_de_configuracao_no_linux:  /home/rzj/.gitconfig

> mudar editor gitconfig:
do_usuario: git config --global core.editor code // mudara o editor do usuario para vscode
> depois apra abrir o editor no modo usuario: git config --global --edit

> abrir para edicao de arquivo de configuracao:
abrir_edicao_do_sistema: git config --system --edit // dificil precisar mecher

abrir_edicao_do_usuario: git config --global --edit

abrir_edicao_local_especifica_do_projeto: na pasta do projeto especifico: git config --local --edit  // este acaba nao mechendo muito...o git ja o configura...posso reescrever o email neste especifico na identificacao dos commits com [user] email: <email desejado pra identificar commits neste projeto>

> prioridade de configuracoes:
local tem prioridade sobre o do usuario/global
usuario/global tem prioridade sobre o do sistema/system 

neste_gitconfig no modo global de usuario definira as informacaoes que sairam nos commits pra identifica-los

### ARMAZENAMENTO DE CREDENCIAIS
> [armazenamento de credenciais do Git : ](https://www.shellhacks.com/git-config-username-password-store-credentials/#:~:text=To%20connect%20to%20a%20Git,by%20using%20Git%20credential%20helper.)

> no credential:
criar no /usuario o arquivo de credencial : .git-credentials
nele configurar: 
https://username:password@yourgitserver

> no arquivo git config mandar buscar este de credencial com :
[credential]
    helper = store --file ~/.git-credentials

ou fazer pela linha de comando:
git remote set-url origin https://rzjprogramador:<PASSWORD>@github.com/path/to/repo.git
exemplo: git remote set-url origin https://rzjprogramador@universo__PYTHON.git

habilitar: git config credential.helper store
habilitar globalmente: git config --global credential.helper store

aparecera no gitconfig a definicao: 
[credential]
	helper = store

<!-- helper = oexkeychain estava no do mango -->
# GITHUB EDITOR VSCODE
> [desabilitar autenticacao vscode: ](https://stackoverflow.com/questions/62649022/how-to-disable-github-login-in-vscode)
>  desativar autenticacao no settings do vscode:
```
# settings.jsonarquivo:

{
    // ...
    "github.gitAuthentication": false,
    "git.terminalAuthentication": false
}

```
Ativar dispositivo device vscode via url:
https://github.com/login/device
colocar codigo que aparece no aviso vscode :

# SETAR HABILITAR O REPOSITORIOATUAL PARA PUSH

Se você ativou a autenticação de dois fatores em sua conta do GitHub, não poderá enviar via HTTPS usando a senha de sua conta. Em vez disso, você precisa gerar um token de acesso pessoal. Isso pode ser feito nas configurações do aplicativo da sua conta do GitHub. Usar este token como sua senha deve permitir que você envie para seu repositório remoto via HTTPS. Use seu nome de usuário como de costume.

Criando um token de acesso pessoal

Você também pode precisar atualizar a origem do seu repositório se estiver definido como HTTPS. Faça isso para mudar para SSH:

> SETAR O REMOTO EM TODOS PROJETO - SETAR O GIT REMOTE PARA FUNCIONAR STATUS, COMMIT, PUSH VIA CLI : TODO
git remote -v
sintaxe: git remote set-url origin git@github.com:rzjprogramador/<REPOSITORIO_NOME>.git

> SETA O REPO NA MAQUINA COM O REMOTO E PERMITE O PUSH
usando: git remote set-url origin https://github.com/rzjprogramador/master_ecommerce_ts.git


# AVISOS GIT NO VSCODE
the extension github wants to sign in using github = a extensão github deseja entrar usando o github


allow == permitir

ok__5
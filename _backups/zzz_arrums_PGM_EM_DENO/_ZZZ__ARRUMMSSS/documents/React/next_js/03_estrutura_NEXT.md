# ESTRUTURA NEXT

> porta inicial Next Extruturas Page: \_app.tsx
> é o arquivo de estrutura que configura o index: nele usamos a tipagem de paginas e components do next
> { AppProps } from 'next/app'

### PONTO GLOBAL DOS COMPONENTS

importante: este component App é o centralizador da aplicacao toda vez que trocar d eapgina este componente sera chamado. entao se quiser components globais tem que ser utilizado aqui.

no component App recebemos { Component, pageProps }: AppProps
avisando que receberemos Components Next e pageProps e retornara o Component e todas pageProps que forem criadas.


> index.tsx
> Será a home automaticamente o \_app onde esta configurado a inicial do app puxa este index...que será o componente Home.

> obs:

- Posso separar em pasta o \_app ..somente o index.ts tem que ficar no nivel do diretorio pages/
- O Index.ts sera a porta de entrada de todos components globais ..no component Home
---

# DOCUMENT

O \_document será carregado apenas uma vez na app.. mesmo o clinet mudandno de pagina ... ele representa a pagina statica ... seria como o index.html do React, ele deve estar no primeiro nivel da pasta \_app/ ... nele poderemos configurar o title do site , scripts tudo que seja global e precise carregar apenas uma vez para toda a app.

- Dinamica: importando a tag vinda do \_document com from 'next/head' ... podemos personalizar onde ela for importada o \_document atravez da tag importada fara este dinamismo.

> TAGS: as tags html definidas no _document podem ser configuradas dado seus valores nos components
> importando : aTAG from 'next/head'
> exemplo: import Head from 'next/head'
> e usando dentro do component ex:

````
// USANDO A TAG HEAD VINDA DO DOCUEMNT INSERINDO A TAG HTML TITLE PARA DAR TITULO DINAMICO AO SITE
// OBS: ASSIM O TITULO DA PAGINA PODE SER DINAMICO APRA CADA PAGINA CRIADA
return (
        <div>
            <Head>
            <title>Bem vindo a Home</title>
            </Head>
            Alo Mundo - Home
        </div>
    )
    ```
````

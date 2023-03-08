package main

var EntradaDeDado_Universal = EntradaDeDado{
    Conceito: "o valor tem que vir de algum lugar: para entrar na funcionalidade para ser processado… pode entrar via parametro ou variavelDeEscopo o importante é sua origem.",

    Missao: []string{"O Valor Entra", "Processamos", "DevolvemosResposta", },

    QuemMandaOValor_Origem: `Quem precisa ou sabe montar a informacao manda o valor.`,

    ConceitoOrigens: ConceitoOrigens{
        Dinamica: `forma Dinamica é a #ideal :: vem sempre de uma funcao ou objeto.Funcao ou variavel que representa o retorno de uma funcao .. que é dinamico pode sofrer mudancas de origem, é personalizavel porque quem usa a funcao pode enviar da sua forma a informacao.`,
        
        Literal: `é um valor que forçado de forma  magica marretada e estatico nao muda… ideal para #tester`,
    },

    Origens: OrigensPossiveis{
        ClientCode: OrigemInformacao{
            OrigemEnviadoPor: `ClientCode`,
            DeForma: `dinamicaRetornoDeFuncao | MagicoLiteralVariavelOuObjetoModelado`,
            EntraVia: `paramFuncao`,
        },

        ClientHttp: OrigemInformacao{
            OrigemEnviadoPor: `ClientHttp`,
            DeForma: `DinamicaFuncaoApiRest | DinamicaoApiGraphql `,
            EntraVia: `paramRequest`,
        },
    }, // Origens

   
}


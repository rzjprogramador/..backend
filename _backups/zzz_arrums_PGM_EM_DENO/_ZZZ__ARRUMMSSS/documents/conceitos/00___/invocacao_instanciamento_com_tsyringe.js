// INVOCACAO INSTANCIAMENTO INJECAO COM TSYRINGE PARA TYPESCRIPT

{
  criar_singleton: {
    local: `pasta container`,

    local: ``,

    sintaxe: `
    SOMENTE QUEM VAI SER INJETADO NO PARAM DO CONSTRUTOR QUE VAI PRECISAR DE UM CONTRATADO:

    container.registerSingleton <CONTRATO_A_SER_IMPLEMENTADO>('NOME_PARA_USO_DA_VARIAVEL_REF', CLASSE_IMPLEMENTADORA_SER_INSTANCIADA)
    `,

    uso: `
    // NA CLASSE A PASSAR POR INJECAO:
    import { injectable, inject } from 'tsyringe'
   - MARCAR COM O DECORADOR : @injectable()

  - NO PARAM DO CONSTRUTOR QUE ESTA USANDO O CONTRATO MARCAR QUEM VAI IMPLEMENTAR NA INSTANCIACAO : COM:: @inject('IMPLEMENTADOR_SINGLETON_NOMEADO_NO_TSYRINGE')

    // NO ARQUIVO QUE VAI USAR A INJECAO:
    import { container } from 'tsyringe'
    container.resolve(<CLASSE_SERVICO_QUE_USOU_A_INJECAO>)
    
    `,

    exemplo: `
    container.registerSingleton<GetAllClientesRepository>('GetClientesPostgresPrisma', GetClientesPostgresPrisma)
    `,
  },

  // USAR SEM INSTANCIACAO DE REPOSITORIO
  // VC MARCA NA CLASSE QUE VAI INJETAR E CHAMA O CONTAINER.RESOLVER PASSANDO A CLASSE INJETADA

}
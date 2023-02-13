import { ExceptionMessage } from '@src/core/generics/helpers/statics_makers/messages_exception_static'

import { GraphQLError, GraphQLFormattedError } from 'graphql'

// FORMATACOES DE ERROS GRAPHQL

export const formatError = (error: GraphQLError): GraphQLFormattedError => {
  if (error.message.startsWith(`${ExceptionMessage.exceptionDefault()}`)) {
    return new Error(error.message)
  }
  if (error && error.extensions) {
    // ENVIADO POR SOLUCOES
    error.extensions.code = `${ExceptionMessage.exceptionDefault()}`
  }
  return error
}

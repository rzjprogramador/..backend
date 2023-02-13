possibilidades_gerar_id: {

  aleatorio_matematico_em_string: `Math.random.toString()`,
  
}

// gerar id makeId uuid

{
  nome: 'gerar_id_uuid',
  doc: `https://www.npmjs.com/package/uuid`,
  tipo_instalacao: 'dependencies',
  instalar: `yarn add uuid`,

uso: `
  import { v4 as uuidv4 } from 'uuid'

  export const makeID = () => uuidv4()
  
  //
  `,
  }

{
  nome: 'gerar id com crypto do node',
  doc: ``,
  tipo_instalacao: 'default do node',
  instalar: `default do node`,

uso: `
import crypto from 'crypto'
crypto.randomUUID()
//
  `,
  }


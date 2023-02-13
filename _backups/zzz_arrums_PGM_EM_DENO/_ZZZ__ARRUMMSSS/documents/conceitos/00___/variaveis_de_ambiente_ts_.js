{
  titulo: `Como usar dotenv`,

  exemplo: `
  import 'dotenv/config'

  export const ENV = {
    PORT_DEV_GRAPHQL: process.env.PORT_DEV_GRAPHQL,
    PORT_DEV_REST_EXPRESS: process.env.PORT_DEV_REST_EXPRESS,
  }

  export const ENV_PROJETO = {
    NAME: process.env.PROJETO,
  }

  `,
}
import express from 'express'

import setupMiddlewares from '@src/main/config/setup_app_use_middlewares'
import { setupRoutes } from '@src/main/config/routes'
import { setupApolloServer } from '@src/main/graphql/server/setup_middle_apollo_server'


const app = express()
setupMiddlewares(app)
setupRoutes(app)
setupApolloServer(app)
export default app
import { Express, Router } from "express"
import { readdirSync } from "fs"

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use("/api", router)
  readdirSync(`${__dirname}/../routes_root_express`).map(async (fileName) => {
    ;(await import(`../routes_root_express/${fileName}`)).default(router)
  })
}

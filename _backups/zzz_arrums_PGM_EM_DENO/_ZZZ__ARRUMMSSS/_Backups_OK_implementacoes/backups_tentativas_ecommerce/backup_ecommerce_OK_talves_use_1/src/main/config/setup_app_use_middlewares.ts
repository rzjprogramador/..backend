import { Express } from "express"
import { bodyParser, cors, contentType } from "@src/main/middlewares"
import { errorResponseMiddleExpress } from "@src/main/middlewares/errors_response_express"

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
  app.use(errorResponseMiddleExpress)
}

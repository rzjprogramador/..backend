import "module-alias/register"
import "express-async-errors"

import app from "@src/main/config/app"
import { env } from "@src/main/env/enviroments"

const PORT: number = env.portExpress

app.listen(PORT, () => console.log(`SERVER_ON >> ${PORT}`))

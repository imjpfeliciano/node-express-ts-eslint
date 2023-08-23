import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'

import routes from './routes'
import swaggerDocument from './config/swagger'

dotenv.config()
const PORT = process.env.PORT ?? 3000
const app = express()

// app config
app.use(helmet())
app.use(cors())
app.use(express.json())

// swagger config
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// api routes to /api
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

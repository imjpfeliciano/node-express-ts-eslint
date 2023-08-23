import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
// import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';

import routes from './routes'
// import swaggerOptions from './config/swagger';

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

// app config
app.use(helmet())
app.use(cors())
app.use(express.json())

// TODO: Add support for swagger
// // swagger Documentation
// const swaggerSpec = swaggerJSDoc(swaggerOptions);
// const swaggerUiHandler = swaggerUi.setup(swaggerSpec);
// const docsJsonPath = '/api-docs.json';

// app.get(docsJsonPath, (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });

// app.use('/docs', swaggerUi.serve, (req, res, next) => {
//   if (!req.query.url) {
//     res.redirect(`/docs?url=${req.protocol}://${req.headers.host}${docsJsonPath}`);
//   } else {
//     swaggerUiHandler(req, res, next);
//   }
// });

// api routes to /api
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

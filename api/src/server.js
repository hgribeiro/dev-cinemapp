import 'dotenv/config.js';
import express from 'express'
import routes from './routes/index.js'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(8080, () => {
  console.log('Server in runing on port 8080')
})
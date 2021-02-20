import routes from './routes'

import express from 'express'

const app = express();

app.use(express.json())

app.use(routes)

app.listen(8080, () => {
  console.log('Server in wuing on port 8080')
})
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

const PORT = 8000

app.listen({ port: PORT }, () =>
  console.log(`This server is running in the port http://localhost:${PORT}`)
)

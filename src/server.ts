import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

const PORT = 8000

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits

})


app.listen({port: PORT}, () => console.log(`This server is running in the port http://localhost:${PORT}`))
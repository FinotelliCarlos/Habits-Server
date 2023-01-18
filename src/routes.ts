import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'

export const appRoutes = async (app: FastifyInstance) => {
  app.get('/', async () => {
    const habits = await prisma.habit.findMany()

    return habits
  })
}

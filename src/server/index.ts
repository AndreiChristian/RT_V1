import { prisma } from "@/primsa";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  createTemplate: publicProcedure
    .input(z.object({
      name: z.string(),
      description: z.string(),
      price: z.number()
    }))
    .mutation(async (opts) => {
      const template = await prisma.template.create({
        data: {
          name: opts.input.name,
          description: opts.input.description,
          price: opts.input.price
        }
      })
      return true
    })
  ,
  getTemplates: publicProcedure
    .query(async () => {
      const templates = await prisma.template.findMany()
      return templates
    }),
  getTodos: publicProcedure.query(async () => {
  }),
  addTodo: publicProcedure
    .input(z.string())
    .mutation(async (opts) => {
      return true
    }),
  setDone: publicProcedure.input(
    z.object({
      id: z.number(),
      done: z.boolean()
    }))
    .mutation(async ({ input }) => {

      return true
    })

})

export type AppRouter = typeof appRouter

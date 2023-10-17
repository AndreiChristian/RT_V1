import { prisma } from "@/primsa";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    const todos = await prisma.todo.findMany()
    return todos
  }),
  addTodo: publicProcedure
    .input(z.string())
    .mutation(async (opts) => {
      await prisma.todo.create({
        data: {
          content: opts.input
        }
      })
      return true
    }),
  setDone: publicProcedure.input(
    z.object({
      id: z.number(),
      done: z.boolean()
    }))
    .mutation(async ({ input }) => {
      await prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          done: input.done
        }
      })
      return true
    })

})

export type AppRouter = typeof appRouter

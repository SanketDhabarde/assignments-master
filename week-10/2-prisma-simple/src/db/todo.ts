import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    const res = await prisma.todo.create({
      data: {
        userId,
        title,
        description,
      },
      select: {
        title: true,
        description: true,
        done: true,
        id: true,
      },
    });
    if (res) {
      return res;
    }
  } catch (error) {}
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    const res = await prisma.todo.update({
      data: { done: true },
      where: { id: todoId },
      select: {
        title: true,
        description: true,
        done: true,
        id: true,
      },
    });
    if (res) {
      return res;
    }
  } catch (error) {}
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    const res = await prisma.todo.findMany({
      where: { userId },
    });
    if (res) {
      return res;
    }
  } catch (error) {}
}

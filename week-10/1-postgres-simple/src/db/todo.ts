import { client } from "..";
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
    // await client.connect();
    const query = `INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3)`;
    const values = [userId, title, description];
    const res = await client.query(query, values);

    const result = await client.query(`SELECT * FROM todos WHERE title=$1`, [title]);

    if (result.rows) {
      return result.rows[0];
    }
  } catch (error) {
    console.log(error);
  } finally {
    // await client.end();
  }
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
    // await client.connect();
    const query = `UPDATE todos SET done=true WHERE id = $1`;
    const values = [todoId];
    const res = await client.query(query, values);
    const result = await client.query(`SELECT * FROM todos WHERE id=$1`, [todoId]);

    if (result.rows) {
      return result.rows[0];
    }
  } catch (error) {
    console.log(error);
  } finally {
    // await client.end();
  }
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
    // await client.connect();
    const query = `SELECT * FROM todos WHERE user_id = $1`;
    const values = [userId];
    const res = await client.query(query, values);

    if (res.rows) {
      return res.rows;
    }
  } catch (error) {
    console.log(error);
  } finally {
    // await client.end();
  }
}

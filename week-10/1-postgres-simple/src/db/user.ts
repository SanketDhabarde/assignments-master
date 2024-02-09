import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    // await client.connect();
    const query = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3)`;
    const values = [username, password, name];
    const res = await client.query(query, values);

    if (res.rows) {
      return res.rows[0];
    }
  } catch (error) {
    console.log(error);
  } finally {
    // await client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    // await client.connect();
    const query = `SELECT * FROM users WHERE id=$1`;
    const values = [userId];
    const res = await client.query(query, values);

    if (res.rows) {
      return res.rows[0];
    }
  } catch (error) {
    console.log(error);
  } finally {
    // await client.end();
  }
}

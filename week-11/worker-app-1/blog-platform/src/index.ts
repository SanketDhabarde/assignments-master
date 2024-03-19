import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: number;
  };
}>();

app.post("/users/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const existinguser = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });

    if (existinguser) {
      c.status(411);
      return c.json({ error: "User already exists" });
    }

    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        email: body.email,
      },
    });

    const token = await sign({ userId: user.id }, c.env.JWT_SECRET);

    return c.json({ message: "User created successfully", token });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ error: "Something went wrong!" });
  }
});

app.post("/users/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const existinguser = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });

    if (!existinguser) {
      c.status(401);
      return c.json({ error: "User does not exists" });
    }

    const token = await sign({ userId: existinguser.id }, c.env.JWT_SECRET);

    return c.json({
      token,
    });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ error: "Something went wrong!" });
  }
});

app.get("/posts", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany({});
    return c.json({ posts });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ error: "Something went wrong!" });
  }
});

app.post("/posts", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const posts = await prisma.post.findMany({});
    return c.json({ posts });
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ error: "Something went wrong!" });
  }
});

app.use("/posts/*", async (c, next) => {
  const header = c.req.header("Authorization");
  if (!header) {
    c.status(401);
    return c.json({ error: "Add Authorization token" });
  }
  try {
    const authHeader = header?.split(" ")[1] || "";
    const decode = await verify(authHeader, c.env.JWT_SECRET);
    if (!decode.userId) {
      c.status(403);
      return c.json({ error: "Invalid token" });
    }
    c.set("userId", decode.userId);
    next();
  } catch (error) {
    c.status(403);
    return c.json({ error: "Invalid token" });
  }
});

app.get("/posts/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  const userId = c.get("userId");
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
        userId,
      },
    });

    if (!post) {
      c.status(404);
      return c.json({ error: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    c.status(500);
    return c.json({ error: "Something went wrong!" });
  }
});

app.put("/posts/:id", (c) => {
  return c.text("Hello Hono!");
});

app.delete("/posts/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;

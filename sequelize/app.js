const express = require("express");

const { sequelize, User, Post } = require("./models");
const user = require("./models/user");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const users = await User.findOne({
      where: { uuid: uuid },
      include: ["posts"],
    });

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const users = await User.findOne({
      where: { uuid: uuid },
    });

    await users.destroy();
    return res.json({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.put("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOne({
      where: { uuid: uuid },
    });

    user.name = name;
    user.email = email;
    user.role = role;

    await user.save()

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.post("/post", async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });

    const post = await Post.create({ body, userId: user.id });

    return res.json(post);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

app.get("/post", async (req, res) => {
  try {
    const posts = await Post.findAll({ include: ["user"] });
    return res.json(posts);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database Connected");
});

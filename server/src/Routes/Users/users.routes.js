const { Router } = require("express");
const User = require("../../models/User");
const { postUser, getUsers, getUserById } = require("./controllers");

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send(await getUsers());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await getUserById(id));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    await postUser(name, lastname, email, password);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

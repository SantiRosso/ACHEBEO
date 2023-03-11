const { Router } = require("express");
const User = require("../../Models/User");
const {
  postUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./controllers");

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

router.put("/", async (req, res) => {
  const { name, lastname, email, password, id } = req.body;
  try {
    await updateUser(name, lastname, email, password, id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await deleteUser(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

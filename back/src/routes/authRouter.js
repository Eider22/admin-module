const { Router } = require("express");

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  return res.send("test");
});

module.exports = { authRouter };

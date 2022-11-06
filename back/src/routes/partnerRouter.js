const { Router } = require("express");

const partnerRouter = Router();

partnerRouter.get("/", (req, res, next) => {
  res.send("test");
});

partnerRouter.post("/", (req, res, next) => {
  return res.sendStatus(400);
});

partnerRouter.patch("/", (req, res, next) => {
  res.send("test");
});

partnerRouter.delete("/", (req, res, next) => {
  res.send("test");
});

module.exports = { partnerRouter };

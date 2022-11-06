const { Router } = require("express");

const advisorRouter = Router();

advisorRouter.get("/", (req, res, next) => {
  res.send("test");
});

advisorRouter.post("/", (req, res, next) => {
  const {
    firstName,
    firstLastName,
    identificationNumber,
    age,
    phone,
    address,
    email,
    idRole,
  } = req.body;

  if (
    !firstName ||
    !firstLastName ||
    !identificationNumber ||
    !age ||
    !phone ||
    !address ||
    !email ||
    !idRole
  )
    return res.sendStatus(400);

  try {
    //code
    return res.send("test");
  } catch (error) {
    //code
  }
});

advisorRouter.patch("/", (req, res, next) => {
  res.send("test");
});

advisorRouter.delete("/", (req, res, next) => {
  res.send("test");
});

module.exports = { advisorRouter };

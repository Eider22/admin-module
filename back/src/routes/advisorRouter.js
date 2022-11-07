const { Router } = require("express");

const advisorRouter = Router();

advisorRouter.get("/", (req, res, next) => {
  res.send({
    id:"456",
    fisrtsName: "John",
    secondtName: "Eider",
    lastName: "Cardona",
    age: 22,
    email: "eidercardona22@gmail.com",
  });
});

advisorRouter.post("/", (req, res, next) => {
  return res.send({
    test: "test",
  });
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
  res.send({test: "test"});
});

advisorRouter.delete("/", (req, res, next) => {
  res.send({test: "test"});
});

module.exports = { advisorRouter };

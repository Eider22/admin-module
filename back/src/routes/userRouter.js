const { Router } = require("express");

const userRouter = Router();

userRouter.post("/login", (req, res) => {
  return res.send("test");
});

userRouter.get("/", (req, res, next) => {
  return res.send({
    data: [
      {
        id: "456",
        firstName: "John",
        secondName: "Eider",
        lastName: "Cardona",
        secondLastName: "Castrillon",
        email: "eidercardona22@gmail.com",
        identification: "1002732542",
        role: {
          id: "1",
          name: "Asesor",
        },
      },
      {
        id: "564",
        firstName: "Juan",
        // secondName: "Pedro",
        lastName: "Cardoso",
        secondLastName: "Lopez",
        email: "pedro22@gmail.com",
        identification: "11111111",
        role: {
          id: "1",
          name: "Socio",
        },
      },
    ],
  });
});

userRouter.get("/roles", (req, res, next) => {
  return res.send({
    data: [
      {
        id: "1",
        name: "Asesor",
      },
      {
        id: "2",
        name: "Socio",
      },
    ],
  });
});

userRouter.post("/", (req, res, next) => {
  //hacer las validaciones pertinentes
  //validar el rol y de acuerdo al rol crear un asesor o un socio en las respectivas entidades
  // console.log(req.body);
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

userRouter.patch("/", (req, res, next) => {
  res.send({ test: "test" });
});

userRouter.delete("/", (req, res, next) => {
  res.send({ test: "test" });
});

module.exports = { userRouter };

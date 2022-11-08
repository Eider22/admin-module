const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res, next) => {
  try {
    return res.send({
      data: [
        {
          id: "456",
          firstName: "John",
          secondName: "Eider",
          lastName: "Cardona",
          secondLastName: "Castrillon",
          identification: "1002732542",
          email: "eidercardona22@gmail.com",
          role: {
            id: "1",
            name: "Asesor",
          },
        },
        {
          id: "564",
          firstName: "Juan",
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
  } catch (error) {}
});



userRouter.post("/", (req, res, next) => {
  //hacer las validaciones pertinentes
  //validar el rol, y de acuerdo al rol crear el usuario y un asesor o un socio según corresponda
  console.log(req.body);
  const {
    firstName,
    secondtName,
    lastName,
    identification,
    secondLastName,
    dateOfBirth,
    email,
    monthlyPayment,
    role,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !identification ||
    !dateOfBirth ||
    !email ||
    !role
  )
    return res.sendStatus(400);

  
  try {
    //code
    return res.send({ test: "test" });
  } catch (error) {
    //code
  }
});

userRouter.patch("/:id", (req, res, next) => {
  res.send({ test: "test" });
});

userRouter.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  res.send({ test: "test", id});
});

userRouter.post("/login", (req, res) => {
  return res.send({ test: "test" });
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

module.exports = { userRouter };

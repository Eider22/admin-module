/**imports */
const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors')
const { userRouter } = require("./src/routes/userRouter");


const app = express();

/**config */
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/users",userRouter);


app.get("/", (req, res, next) => {
  res.send("Welcome page...");
});

app.listen(PORT, () => {
    console.log("Server is running..");
});
  
import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import User from "./models/user.js";
import Authenticated from "./middlewares/Authenticated.js";
import userRouter from "./routes/user.js";
import foodRouter from "./routes/food.js";
import categoryRouter from "./routes/category.js";

const app = express();

app.listen(6000, () => {
  console.log("Your server is running at PORT 6000");
});

connectDB();

app.use(express.json());
app.use(cors());

app.get("/secret/", [Authenticated], (req, res) => {
  res.send({
    message: "Welcome to this private route",
  });
});

app.use("/user", userRouter);
app.use("/food", Authenticated, foodRouter);
app.use("/category", categoryRouter);

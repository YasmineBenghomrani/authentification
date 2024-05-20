import express from "express";
import {
  deleteUser,
  getAllUsers,
  getMe,
  login,
  register,
  updateUser,
} from "../controllers/user.js";
import Authenticated from "../middlewares/Authenticated.js";

const userRouter = express.Router();

//Register
//login
//GetUser
//UpDateUser
//DeleteUser

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/", getAllUsers);
userRouter.get("/me", Authenticated, getMe);
userRouter.put("/", Authenticated, updateUser);
userRouter.delete("/", Authenticated, deleteUser);

export default userRouter;

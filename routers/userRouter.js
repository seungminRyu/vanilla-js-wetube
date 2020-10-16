import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);


export default userRouter;
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, getLogIn, join, logIn, logOut, postJoin, postLogIn } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogIn);
globalRouter.post(routes.login, postLogIn);

globalRouter.get(routes.logout, logOut);
globalRouter.get(routes.search, search);

export default globalRouter;
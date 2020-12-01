import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, getLogIn, logOut, postJoin, postLogIn } from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();


globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogIn);

globalRouter.get(routes.login, onlyPublic, getLogIn);
globalRouter.post(routes.login, onlyPublic, postLogIn);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPublic, logOut);
globalRouter.get(routes.search, search);

export default globalRouter;
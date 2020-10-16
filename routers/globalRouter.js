import express from "express";
import { join, logIn, logOut } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, logIn);
globalRouter.get(routes.logout, logOut);
globalRouter.get(routes.search, search);

export default globalRouter;
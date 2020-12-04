import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, getLogIn, logOut, postJoin, postLogIn, githubLogin, postGithubLogin, getMe } from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogIn);

globalRouter.get(routes.login, onlyPublic, getLogIn);
globalRouter.post(routes.login, onlyPublic, postLogIn);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logOut);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
    routes.githubCallback,
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
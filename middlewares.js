import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "RyuTube";
    res.locals.routes = routes;
    next();
}
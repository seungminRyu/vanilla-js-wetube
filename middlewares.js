import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "videos/" });
export const uploadVideo = multerVideo.single("videoFile");

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "RyuTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
}

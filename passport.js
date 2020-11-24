import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser()); // passport에게 쿠키에는 오직 user.id만 담을 것이라는것을 말해준다
passport.deserializeUser(User.deserializeUser());

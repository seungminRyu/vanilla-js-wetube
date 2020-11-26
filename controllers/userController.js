import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // Todo: 유저를 데이터베이스에 등록
        try {
            // User.create는 생성시키고 저장까지 하기 때문에 쓰지않는다.
            // create를 쓰게되면 register 부분에서 이미 존재하는 유저라고 에러가 난다.
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        } catch(error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogIn = (req, res) => res.render("login", { pageTitle: "Log In" });

export const postLogIn = (req, res) => passport.authenticate("local", {
    failureRedirect: routes.login,
    sucessRedirect: routes.home
});

export const logOut = (req, res) => res.redirect(routes.home);

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });

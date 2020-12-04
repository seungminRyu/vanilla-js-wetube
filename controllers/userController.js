import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import { request } from "express";

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
        try {
            const user = await User({
                name,
                email
            })
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogIn = (req, res) =>
    res.render("login", { pageTitle: "Log In" });

export const postLogIn = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
    const {
        _json: { id, avatar_url: avatarUrl, name, email }
    } = profile;
    try {
        const user = await User.findOne({ email });
        // 깃허브 이메일과 같은 이메일의 계정이 있는지 확인
        // 있을 경우 계정에 githubId 설정 후 저장
        if (user) { 
            user.githubId = id;
            user.save();
            console.log("user save");
            return cb(null, user);
        }
        // 없을 경우 새로운 유저로 등록        
        const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl
        });
        console.log("new user register");
        return cb(null, newUser);
    } catch (error) {
        console.log("error come up");
        return cb(error);
    }
};

export const postGithubLogin = (req, res) => {
    console.log("redirect to home")
    res.redirect(routes.home);
}

export const logOut = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });

export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
}
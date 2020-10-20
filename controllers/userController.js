export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const logIn = (req, res) => res.render("logIn", { pageTitle: "Log In" });
export const logOut = (req, res) => res.render("logOut", { pageTitle: "Log Out" });
export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });

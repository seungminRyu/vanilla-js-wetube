import express from "express";
const app = express();

const handleHome = (req, res) => res.send("Hi, Welcome to my home");

const handleProfile = (req, res) => res.send("Here is profile~!");

const linstenHandler = () =>
    console.log(`http://localhost:4000`);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(4000, linstenHandler);

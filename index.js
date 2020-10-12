import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const handleHome = (req, res) => res.send("Hi, Welcome to my home");
const handleProfile = (req, res) => res.send("Here is profile~!");

const linstenHandler = () =>
    console.log(`http://localhost:4000`);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(4000, linstenHandler);

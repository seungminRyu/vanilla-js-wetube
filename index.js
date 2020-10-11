const express = require("express");
const app = express();

function linstenHandler() {
    console.log(`http://localhost:4000`);
}

app.listen(4000, linstenHandler);
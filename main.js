const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.json({
        message:
            "This is the node js container and this is my first dockerization",
    });
});

app.listen(5000, () => {
    console.log("Server is running Port: 5000");
});

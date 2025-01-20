const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("The server is running on port 3000");
});

app.get("/clubs", (req, res, next) => {
    res.json(["Soccer","Padel","Chess","Gaming","Hiking"]);
});
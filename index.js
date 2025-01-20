const express = require('express');
const serverless = require('serverless-http');
const app = express();
const port = 3000;

app.get("/clubs", (req, res) => {
    res.json(["Soccer", "Padel", "Chess", "Gaming", "Hiking"]);
});

// Wrap the Express app for AWS Lambda
module.exports.handler = serverless(app);

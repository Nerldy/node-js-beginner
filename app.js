const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("UKOJE?");
});

app.get("/home", function (req, res) {
    res.send("We home");
});

app.get("/r/:subredditName", function (req, res) {
    const jina = req.params.subredditName;
    res.send("Welcome to the " + jina + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    const name = req.params.subredditName;
    const id = req.params.id;
    const title = req.params.title;
    res.send("You are in the " + name + " subreddit. Your ID is " + id + ". Title: " + title);
});


app.get("*", function (req, res) {
    res.send("404 ERROR");
});

app.listen(100, function () {
    console.log("Iko?");
});
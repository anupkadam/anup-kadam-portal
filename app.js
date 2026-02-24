const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data/content.json");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Home
app.get("/", (req, res) => {
    res.render("index");
});

// Academic subjects
app.get("/academic", (req, res) => {
    res.render("academic", { subjects: data.subjects });
});

// Subject redirect to MS Teams
app.get("/subject/:slug", (req, res) => {
    const subject = data.subjects.find(s => s.slug === req.params.slug);
    if(!subject) return res.send("Subject not found");

    res.redirect(subject.link);
});

// Spiritual
app.get("/spiritual", (req, res) => {
    res.render("spiritual", { posts: data.spiritual });
});

// Blog
app.get("/blog", (req, res) => {
    res.render("blog", { blogs: data.blogs });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");const fs = require("fs");

// Admin page
app.get("/admin", (req, res) => {
    res.render("admin");
});

// Add subject
app.post("/add-subject", (req, res) => {
    const content = require("./data/content.json");
    content.subjects.push(req.body);
    fs.writeFileSync("./data/content.json", JSON.stringify(content, null, 2));
    res.redirect("/admin");
});

// Add spiritual
app.post("/add-spiritual", (req, res) => {
    const content = require("./data/content.json");
    content.spiritual.push(req.body);
    fs.writeFileSync("./data/content.json", JSON.stringify(content, null, 2));
    res.redirect("/admin");
});

// Add blog
app.post("/add-blog", (req, res) => {
    const content = require("./data/content.json");
    content.blogs.push(req.body);
    fs.writeFileSync("./data/content.json", JSON.stringify(content, null, 2));
    res.redirect("/admin");
});
});






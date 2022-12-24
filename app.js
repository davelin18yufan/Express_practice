//require package
const express= require("express");
const { listenerCount } = require("process");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

//config template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//use css
app.use(express.static("public"));

//root route
app.get("/", (req, res) => {
  res.render("index", {link: "首頁"})
})

//about route
app.get("/about", (req, res) => {
  res.render("index", {link: "About"})
})

//portfolio route
app.get("/portfolio", (req, res) => {
  res.render("index", { link: "Portfolio" })
})

//contact route
app.get("/contact", (req, res) => {
  res.render("index", { link: "Contact" })
})

//activate server
app.listen(port, () => {
  console.log("OK");
})
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  console.log(req.body);
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log(`Node.js app listening on port 3000!`);
});

const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8008;
const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// Set Template Engine
app.set("views", "./src/Views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const weatherRouter = require("./src/Routes/weather");
app.use("/", weatherRouter);

app.listen(PORT, () => {
  console.log(`Successfully Running on Port ${PORT}`);
});

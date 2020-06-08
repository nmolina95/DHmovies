const express = require("express");
const path = require("path");
let moviesRouter = require("./routes/movies");
let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, (p) => {
    console.log("Corriendo en localhost 3000");
});

app.use("/", moviesRouter);

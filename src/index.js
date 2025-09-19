import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("src/public"));

app.use(express.urlencoded());

app.get("/", (req, res) => {
   res.render("home", { title: "Home Page", showSearchForm: true });
});

app.listen(5000, () => console.log("Server is running on port http://localhost:5000"));

import express from "express";
import handlebars from "express-handlebars";
import "dotenv/config";

import routes from "./routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static("src/public"));

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);

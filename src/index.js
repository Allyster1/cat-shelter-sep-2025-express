import express from "express";
import handlebars from "express-handlebars";

const app = express();

app.get("/", (req, res) => {
   res.send("it works!");
   res.end();
});

app.listen(5000, () => console.log("Server is running on port http://localhost:5000"));

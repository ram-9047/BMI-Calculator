import express from "express";
import bodyParser from "body-parser";

import resultRoutes from "./routes/result.js";

const app = express();
const PORT = 2000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("this is / path and homepage");
});

app.use("/result", resultRoutes);

app.listen(PORT, () => console.log("port is running on 2000"));

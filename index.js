import express from "express";
import { config } from "dotenv";
// import { database } from "./config/database";

config();
// database();

const app = express();

app.post("/api", (req, res) => {
  res.send("This is GlideX Demo Api");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on PORT ${process.env.PORT}`)
);

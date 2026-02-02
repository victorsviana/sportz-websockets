import express from "express";
import { matchRouter } from "./routes/matches.js";

const app = express();
const API_PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("E aí!");
});

app.use("/matches", matchRouter);

app.listen(API_PORT, () => {
  console.log(`API running on http://localhost:${API_PORT}`);
});

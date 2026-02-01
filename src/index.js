import express, { json } from "express";

const app = express();
const API_PORT = 8080;

app.use(express.json());

app.listen(API_PORT, () => {
  console.log(`API running on http://localhost:${API_PORT}`);
});

app.get("/", (req, res) => {
  res.send("E aí!");
});

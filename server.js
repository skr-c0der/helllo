import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 3000;

app.get("/getSum/:a/:b", async(req, res) => {
  const { a, b } = req.params;
  const result = sum(Number(a), Number(b));
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get("/home ", async(req, res) => {
  res.json({
    msg:"I am root"
  })
});

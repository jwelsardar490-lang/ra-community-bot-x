
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "RA COMMUNITY BOT X",
    status: "Online",
    version: "1.0.0"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    connected: true,
    market: "Analysis API",
    message: "Backend is running"
  });
});

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("RA COMMUNITY BOT X is running");
});

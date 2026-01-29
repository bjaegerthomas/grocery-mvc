const express = require("express");
const cors = require("cors");
const groceryRoutes = require("./routes/groceryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/groceries", groceryRoutes);

module.exports = app;

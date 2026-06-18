require("dotenv").config();
const express = require("express");
const db = require("./db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/", userRoutes);

const connectDB = async () => {
  while (true) {
    try {
      await db.connect();
      console.log("✅ Connected to PostgreSQL");
      break;
    } catch (err) {
      console.log("⏳ Waiting DB...");
      await new Promise(r => setTimeout(r, 2000));
    }
  }
};

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
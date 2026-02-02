require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ CORS: allow localhost + Vercel
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://hirred-bay.vercel.app",
    ],
  })
);

app.use(express.json());
connectDB();

// ✅ routes

app.use("/api/requirements", require("./routes/requirements"));

app.get("/", (req,res)=>{
  res.send("server is runnning")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

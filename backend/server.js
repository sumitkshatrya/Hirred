require("dotenv").config();
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()
app.use(cors());
connectDB();

app.use(express.json());

app.use("/api/requirements", require("./routes/requirements"))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`App Run successfully on port ${PORT}`)
})




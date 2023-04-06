const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const cors = require("cors");


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
// schoolRoute
app.use("/api/schools", require("./routes/schools"));


app.listen(process.env.PORT || 3002, () => {
    console.log("Backend server is running!");
});
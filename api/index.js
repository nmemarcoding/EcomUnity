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
// courseRoute
app.use("/api/courses", require("./routes/course"));
// moduleRoute
app.use("/api/modules", require("./routes/module"));
app.use("/api/start",require('./routes/start.js'));


app.listen(process.env.PORT || 3002, () => {
    console.log("Backend server is running!");
});
const express = require("express")
const dotenv = require("dotenv").config();
const DBConnection = require("./src/database/db");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const router = require("./src/routes/authRoutes")



const app = express();
app.use(Cors());
app.use(Bodyparser.urlencoded({extended:true}));
app.use(Bodyparser.json());

DBConnection();

app.use('/',router)

const PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
    console.log('Server is running at PORT ',PORT);
})
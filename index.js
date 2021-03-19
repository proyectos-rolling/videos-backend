const express = require("express");   
const app = express();
const morgan = require("morgan");
var cors = require("cors");
//Linkeamos el .env
app.use(express.json()); //Para usar el body de las petisiones post
app.use(express.urlencoded({ extended: true })); //Para usar el body de las petisiones post
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("./database");

//Creamos el puerto
const PORT = process.env.PORT || 4000;
//middleware morgan
app.use(morgan("dev"));

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log("Anda el sv!!");
});

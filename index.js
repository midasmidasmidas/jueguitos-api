const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2005;

const { getJuegos, getJuegoById } = require("./controllers/jueguitos.controller")

app.use(cors());
app.get("/", getJuegos);
app.get("/:id", getJuegoById);

app.listen(puerto, ()=> {
    console.log(`Servidor OK. Puerto: ${puerto}`);
});
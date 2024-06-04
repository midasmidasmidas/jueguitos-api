const { request, response } = require("express");
const { jueguitos } = require("../jueguitos");

const getJuegos = (req, res)=> {
    return res.json({
        ok:true,
        statusCode:200,
        jueguitos
    })
}

const getJuegoById = (req = request, res = response)=> {

    let id = parseInt(req.params.id);
    let juegoABuscar = "";
    juegoABuscar = jueguitos.find((juego)=> {
        return juego.id === id;
    });

    if(juegoABuscar) {
        return res.json({
            ok:true,
            statusCode:200,
            juegoABuscar
        });
    } else {
        return res.json({
            ok:true,
            statusCode:404,
            msg:"oopsi no hay juego"
        });
    }
}

module.exports = { 
    getJuegos,
    getJuegoById
}
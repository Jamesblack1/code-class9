const express = require('express');
const bodyparser = require('body-parser');
jsonParser = bodyparser.json();
const cors = require('cors');
const app = express();


let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
}

let items = [
        {
        name:"Super Mario Kart",
        description: "Juego de aventuras",
        platform : "Nintendo",
        img : "./assets/images/mariokart.jpg"
        },
        {
        name:"Gran turismo",
        description: "Juego de carreras",
        platform : "PlayStation",
        img : "./assets/images/gt.jpg"
        },
        {
        name:"GTA",
        description: "Juego de aventuras",
        platform : "Todas las plataformas",
        img : "./assets/images/gta.jpg"
        },
        {
        name:"Mortal Kombat",
        description: "Juego de peleas",
        platform : "Todas las plataformas",
        img : "./assets/images/mk.jpg"
        },
        {
        name:"Pokemon",
        description: "Juego de estrategia y aventura",
        platform : "Nintendo Switch",
        img : "./assets/images/pokemon.jpg"
        }
];

app.use(cors({
    origin:'*'
}))

app.get('/', function(req, res){
    res.send("API VideoJuegos v2");
});

app.get('/products', function(req,res){
    respuesta = {
        error : false,
        codigo : 200,
        mensaje : items
    };
    res.send(respuesta);
});

app.get('/product/:id', jsonParser, function(req, res){
    let id = req.params.id;
    console.log("ID :: ",id);
    respuesta = {
        error : false,
        codigo: 200,
        mensaje: items[id]
    };
    res.send(respuesta);
});

app.listen(3000, ()=> {
    console.log("API ON PUERTO 3000!")
});
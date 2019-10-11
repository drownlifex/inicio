const express = require('express');
const app = express();

app.get('/usuario', function (req, res) {
    res.json("Get usuario funciona");
})
app.post('/usuario', function (req, res) {
    let body = req.body;
    if( body.nombre === undefined ){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    }else{
        res.json({persona: body});
    };
})
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({id:id});
})
app.delete('/usuario', function (req, res) {
    res.json("Delete usuario");
})

module.exports = app;
const Prestamos = require('../models/prestamos');
const express = require('express');
const router = express.Router();

//get all users
router.get('/prestamos', (req, res) => {
    console.log('entre a la funcion');
    (async () => {
        try {
            console.log('intentando traer prestamos');
            const allPrestamos = await Prestamos.findAll();
            res.status(200).send(allPrestamos);
        } catch (err) {
            console.error(err);
            res.status(400).send('Error');
        }
    })();
});

// create users
router.post('/prestamos', (req, res) => {
    (async () => {
        try {
            //console.log(req)
            const createdPrestamos = req.body;
            createdPrestamos.createdAt = new Date().toJSON();
            createdPrestamos.updatedAt = new Date().toJSON();
            createdPrestamos.Multa_Dia = 2500
            const savedNewPrestamos = await Prestamos.create(createdPrestamos);
            res.status(201).send(savedNewPrestamos);
        } catch (err) {
            console.log(err);
            res.status(404).send("Error al guardar");
        };
    })()
});


// borrar users
router.delete('/prestamos/:Codigo', (req, res) => {
    (async () => {
        try {
            const { Codigo } = req.params;
            const result = await Prestamos.destroy({
                where: { Codigo: Codigo },
                force: true,
            });
            if (result) {
                res.status(200).send('Prestamos Eliminado');

            } else {
                res.status(404).send('Prestamos no encontrado')
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("Error");
        };
    })()
})

// recibir todos los prestamos con esta id de usuario
router.get('/prestamos/:Cod_Usuario', (req, res) => {
    (async () => {
        try {
            const { Cod_Usuario } = req.params;
            const result = await Prestamos.findAll({
                where: { Cod_Usuario: Cod_Usuario },
                force: true,
            });
            if (result) {
                res.status(200).send(result);

            } else {
                res.status(404).send('Prestamos no encontrado')
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("Error");
        };
    })()
})


module.exports = router;
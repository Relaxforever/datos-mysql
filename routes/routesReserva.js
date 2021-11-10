const Reserva = require('../models/reserva');
const express = require('express');
const router = express.Router();

//get all users
router.get('/reservas', (req, res) => {
    console.log('entre a la funcion');
    (async () => {
        try {
            console.log('intentando traer usuarios')
            const allUsers = await Reserva.findAll();
            res.status(200).send(allUsers);
        } catch (err) {
            console.error(err);
            res.status(400).send('Error');
        }
    })();
});

// create users
router.post('/reservas', (req, res) => {
    (async () => {
        try {
            // console.log(req)
            const createdUser = req.body;
            createdUser.createdAt = new Date().toJSON();
            createdUser.updatedAt = new Date().toJSON();
            const savedNewUser = await Reserva.create(createdUser);
            res.status(201).send(savedNewUser)
        } catch (err) {
            console.log(err);
            res.status(404).send("Error al guardar");
        };
    })()
});


// borrar users
router.delete('/reservas/:Codigo', (req, res) => {
    (async () => {
        try {
            const { Codigo } = req.params;
            const result = await Reserva.destroy({
                where: { Codigo: Codigo },
                force: true,
            });
            if (result) {
                res.status(200).send('Usuario Eliminado');

            } else {
                res.status(404).send('Usuario no encontrado')
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("Error");
        };
    })()
})
// get reserva by Codigo Usuario
router.get('/reservas/:Cod_Usuario', (req, res) => {
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
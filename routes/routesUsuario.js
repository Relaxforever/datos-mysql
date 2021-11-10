const Usuarios = require('../models/usuarios');
const express = require('express');
const router = express.Router();

//get all users
router.get('/users', (req, res) => {
    console.log('entre a la funcion');
    (async () => {
        try {
            console.log('intentando traer usuarios')
            const allUsers = await Usuarios.findAll();
            res.status(200).send(allUsers);
        } catch (err) {
            console.error(err);
            res.status(400).send('Error');
        }
    })();
});

//get user by Codigo
router.get('/users/:Codigo', (req, res) => {
    console.log('entre a la funcion');
    (async () => {
        try {
            const { Codigo } = req.params;
            const result = await Usuarios.findOne({
                where: { Codigo: Codigo },
                force: true,
            });
            if (result) {
                res.status(200).send(result);

            } else {
                res.status(404).send('Usuario no encontrado')
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("Error");
        };
    })();
});

//Actualizar Usuario
router.put('/users/:Codigo', (req, res) => {
    console.log('entre a la funcion');
    (async () => {
        try {
            const { Codigo } = req.params;
            const createdUser = req.body;
            createdUser.updatedAt = new Date().toJSON();
            const result = await Usuarios.update({
                Correo: createdUser.Correo,
            }, {
                where: { Codigo: Codigo },
            });
            console.log(result);
            if (result) {
                res.status(200).send(result);

            } else {
                res.status(404).send('Usuario no encontrado')
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("Error");
        };
    })();
});




// create users
router.post('/users', (req, res) => {
    (async () => {
        try {
            // console.log(req)
            const createdUser = req.body;
            createdUser.createdAt = new Date().toJSON();
            createdUser.updatedAt = new Date().toJSON();
            const savedNewUser = await Usuarios.create(createdUser);
            res.status(201).send(savedNewUser)
        } catch (err) {
            console.log(err);
            res.status(404).send("Error al guardar");
        };
    })()
});


// borrar users
router.delete('/users/:Codigo', (req, res) => {
    (async () => {
        try {
            const { Codigo } = req.params;
            const result = await Usuarios.destroy({
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

module.exports = router;
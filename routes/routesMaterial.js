const Material = require('../models/material');
const express = require('express');
const router = express.Router();

//get all users
router.get('/materials', (req, res) => {
    console.log('entre a la funcion');
    (async () => {
        try {
            console.log('intentando traer usuarios')
            const allMaterial = await Material.findAll();
            res.status(200).send(allMaterial);
        } catch (err) {
            console.error(err);
            res.status(400).send('Error');
        }
    })();
});

// create users
router.post('/materials', (req, res) => {
    (async () => {
        try {
            console.log(req)
            const createdMaterial = req.body;
            createdMaterial.createdAt = new Date().toJSON();
            createdMaterial.updatedAt = new Date().toJSON();
            const savedNewMaterial = await Material.create(createdMaterial);
            res.status(201).send(savedNewMaterial);
        } catch (err) {
            console.log(err);
            res.status(404).send("Error al guardar");
        };
    })()
});


// borrar users
router.delete('/materials/:Codigo', (req, res) => {
    (async () => {
        try {
            const { Codigo } = req.params;
            const result = await Material.destroy({
                where: { Codigo: Codigo },
                force: true,
            });
            if (result) {
                res.status(200).send('Material Eliminado');

            } else {
                res.status(404).send('Material no encontrado')
            }
        } catch (err) {
            console.log(err);
            res.status(404).send("Error");
        };
    })()
})

module.exports = router;
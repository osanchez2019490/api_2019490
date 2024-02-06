const bcryptjs = require('bcryptjs');
const Animal = require('../models/animal');
const { response } = require('express');

const animalPost = async (req, res ) => {
    const  {nombre, tipo, raza, estadoDelAnimal, role} = req.body;
    const animal = new Animal({ nombre, tipo, raza, estadoDelAnimal, role });

    await animal.save();
    res.status(202).json({
        animal
    });
}

const animalesGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = {estado: true};

    const [total, animales ] = await Promise.all([
        Animal.countDocuments(query),
        Animal.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        animales
    })
}

module.exports = {
    animalPost,
    animalesGet
}
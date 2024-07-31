const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/back-end-db');
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.log(`La conexión no fue exitosa ${error}`);
    }
};

module.exports = conexionDB;

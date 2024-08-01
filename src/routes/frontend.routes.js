const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Inicio',
        message: 'Bienvenidos a nuestra página'
    })
})


router.get('/registro', (req, res) => {
    res.render('registro', {
        title: 'Registro'
    })
})


router.get('/login', (req, res) => {
    res.render('login', {
        title: 'login'
    })
})

router.get('/contacto', (req, res) => {
    res.render('contacto', {
        title: 'Contacto'
    })
})
module.exports = router
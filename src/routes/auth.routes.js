const express = require('express')
const authRequerido = require('../middlewares/validar.token.js')
const { profile, registro, login, logout } = require('../controllers/auth.controller.js')

const router = express.Router();

router.get('/profile', async (req, res, next) => {
  try {
    await authRequerido(req, res, next);
    profile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: error.message || 'No tienes autorización para acceder a este recurso.'
    });
  }
});

router.post('/registro', registro)
router.post('/login', login)
router.get('/logout', logout)
router.get('/profile', profile)

module.exports = router;
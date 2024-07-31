import {Router} from 'express'
import { profile, registro, login, logout } from '../controllers/auth.controller.js'
import { authRequerida } from '../middlewares/validar.token.js'

const router= Router()

/* Ruta protegida por la autenticación */
router.get('/profile', authRequerida, profile)

router.post('/registro', registro)
router.post('/login', login)
router.post('/logout', logout)

export default router
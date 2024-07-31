/* levantar el servidor de express */
const conexionDB= require('./db')
const app = require('./app');

conexionDB()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Servidor escuchando en: http://localhost:${port}`)
})

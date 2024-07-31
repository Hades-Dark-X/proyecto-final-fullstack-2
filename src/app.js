const express= require('express')
const path= require('path')
const exphbs= require('express-handlebars')
const morgan= require('morgan')
const cookieParser= require('cookie-parser')


/* Inicialización */
const app= express()


/* Configuración variables de entorno y vistas*/
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    layoutDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}))

app.set('view engine', 'hbs')

/* Middlewares */
app.use(morgan('dev'))  /* muestra las peticiones http por consola */
app.use(express.json()) /* convierte los objetos javascript a objeto json */
app.use(cookieParser()) /* convierte las cookies a un objeto json */

/* Archivos estáticos */
app.use(express.static(path.join(__dirname, 'public')))


/* Rutas */
app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Inicio',
        message: 'Bienvenidos a nuestra página'})
})

module.exports= app
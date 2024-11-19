import express from 'express'; // framework para crear el servidor
import router from './routes/router.js';// importar rutas
import session from "express-session";

const app = express();// crear servidor 

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(function (req, res, next) {
    res.locals.user = req.session.user || null;
    next();
 });// middleware para sacar informacion de sesion en vistas
 
app.set('view engine', 'pug');// configurar motor de plantillas
app.set('views','src/views');// configurar directorio de plantillas

app.use(express.static('public')); // configurar directorio de archivos estáticos
app.use(express.urlencoded({ extended: true }));// configurar body parser para recibir datos de formularios
app.use(express.json());// configurar body parser para recibir datos en formato json

app.use('/', router);// configurar rutas


app.listen(3000,() =>console.log("Estamos conectados al puerto 3000"));// iniciar servidor en el puerto indicado en las variables de entorno
const { Router } = require('express');
const pokemonRoutes = require('./pokemon')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/', pokemonRoutes)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

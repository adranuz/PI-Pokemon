const { Router } = require('express');
const { getTypes, createType } = require('../controllers/type.controller');

const route = Router()


// rutas
route.get('/', getTypes)
route.post('/', createType)


module.exports = route;
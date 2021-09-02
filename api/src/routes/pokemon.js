const { Router } = require('express')
const { 
  getPokemons, 
  getOnePokemon,
  createPokemon,
  // editPokemon,
  // deletePokemon
} = require('../controllers/pokemon.controller')

const route = Router()


// rutas
route.get('/', getPokemons)
route.get('/:id', getOnePokemon)
route.post('/', createPokemon)
// route.put('/:id', editPokemon)
// route.delete('/:id', deletePokemon)


module.exports = route;
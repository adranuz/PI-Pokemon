const { Router } = require('express')
const pokemonController = require('../controllers/pokemon.controller')
// const { Pokemon } = require('../db')
// const pokemonController = new PokemonController(Pokemon)

const route = Router()


// rutas
route.get('/', async (req, res, next) => {
  try {
    const pokemons = await pokemonController.getPokemons()
    res.status(200).json({
      message: "Pokemon array list",
      data: pokemons,
    })
  } catch (error) {
    next(error)
  }
})

route.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const pokemon = await pokemonController.getOnePokemon({id})
    res.status(200).json({
      message: "Pokemon detail",
      data: pokemon,
    })
  } catch (error) {
    next(error)
  }
})

route.post('/', async (req, res, next) => {
  const newPokemon = req.body
  try {
    const pokemon = await pokemonController.createPokemon({newPokemon})
    res.status(200).json({
      message: "Pokemon created succesfuly",
      data: pokemon,
    })
  } catch (error) {
    next(error)
  }
})

module.exports = route;
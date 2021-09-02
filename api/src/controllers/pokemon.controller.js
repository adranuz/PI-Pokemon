// libraries
const { v4: uuidv4 } = require('uuid')
const { Pokemon } = require('../db')
require('dotenv').config()
const axios = require('axios')

// initializations
const { API } = process.env
const pokeApi = API + "/pokemon"


// let url = pokeApi
//   if (req.params.id) url = `${pokeApi}/${req.params.id}`
//   else if (req.query.name) url = `${pokeApi}/${req.query.name}`

//   axios.get(url)
//     .then(result => res.send(result.data))
//     .catch(() => res.status(400).send("Error"))


// controller methods
const getPokemons = (req, res, next) => {
  let pokeName = null
  if(req.query.name) pokeName = {where: {name: req.query.name}}
  return Pokemon.findAll(pokeName)
    .then(response => res.json(response))
    .catch(err => next(err))
}

const getOnePokemon = (req, res, next) => {
  return Pokemon.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(response => res.send(response))
    .catch(err => next(err))
}

const createPokemon = (req, res, next) => {
  // console.log(req.body)
  return Pokemon.create({
    ...req.body,
    id: uuidv4(),
  })
    .then(response => res.send(response))
    .catch(err => next(err))
}
const editPokemon = (req, res, next) => { }
const deletePokemon = (req, res, next) => { }

module.exports = {
  getPokemons,
  getOnePokemon,
  createPokemon,
  editPokemon,
  deletePokemon,
}
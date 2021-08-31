const axios = require('axios')
const { Router } = require('express')


const route = Router()


// rutas
route.get('/pokemons',(req, res) => {
  let url = "https://pokeapi.co/api/v2/pokemon"
  if (req.query.name) url = `https://pokeapi.co/api/v2/pokemon/${req.query.name}`
  axios.get(url)
  .then(result => result.data)
  .then(result => res.send(result))
  .catch(() => res.status(400).send("Error"))
})

route.get('/pokemons/:id',(req, res) => {
  let {id} = req.params
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(result => result.data)
  .then(result => res.send(result))
  .catch(() => res.status(400).send("Error"))
})

// route.get('/pokemons',(req, res) => {
//   let {name} = req.query
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
//   .then(result => result.data)
//   .then(result => res.send(result))
//   .catch(() => res.status(400).send("Error"))
// })

module.exports = route;
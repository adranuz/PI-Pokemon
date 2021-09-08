// libraries
const { Pokemon } = require('../db')
const { v4: uuidv4 } = require('uuid')
const axios = require('axios')
const { API_BASE_URL: API } = require('../utils/constants')
// initializations
const pokeApi = API + "/pokemon"



/**
 * getPokemonList
 * 1: peticion para tomar todos los pokemones de la DB
 * 2: peticion para obtener los tipos y adiccionar a la estructura de cada pokemon
 * 
 * 3: peticion para obtener una lista de pokemon limitada a 40
 * 4: hacer una peticion para obtener la data de cada pokemon y ordenarla 
 * 
 * 5: Juntar las dos listas
 * 6: retornar la lista resultante
 */
const getPokemons = async () => {

  // 1: peticion para tomar todos los pokemones de la DB
  const { data: { results, next } } = await axios.get(pokeApi)
  const { data: { results: results2 } } = await axios.get(next)

  // 2: concat 40 pokemons
  let pokemonsApi = await results.concat(results2)

  // 3: get image and types from each pokemon
  pokemonsApi = await Promise.all(
    pokemonsApi.map(async (data) => {
      const result = await axios.get(data.url)
      const {
        id, name,
        sprites: { other: { dream_world: { front_default: image } } },
        types: typeObject
      } = await result.data
      const types = typeObject.map(({ type }) => type.name)
      return { id, name, image, types }
    })
  )
  
  // 4: get local pokemons
  const pokemonsLocal = await Pokemon.findAll()

  // 5: set types to local pokemons
  

  // 6: concat pokemonsApi y pokemonsLocal
  const pokemons = [...pokemonsLocal, ...pokemonsApi]

  return pokemons || []
}

/**
 * Pasos para obtener un pokemon
 * 1: obtener el parametro identificador
 * 2: Identificar si es un string, un numero <= 4 digitos o >4
 *    - Si es mayor 
 * 
 */
// async getPokemonDetail() {

// const pokemon = Pokemon.findOne({
//   where: {
//     id: req.params.id
//   }
// })
//   .then(response => res.send(response))
//   .catch(err => next(err))
// }

/**
* Pasos para crear un pokemon 
* 1: verificar que no exista el nombre del pokemon en la poke api
* 2: verificar que no exista en la base de datos
* 
* 4: crea registro de pokemon,
* 5: crea registro de pokemon-tipo
*/
// async createPokemon() {
// console.log(req.body)
// return Pokemon.create({
//   ...req.body,
//   id: uuidv4(),
// })
//   .then(response => res.send(response))
// }
// 




module.exports = {
  getPokemons
}
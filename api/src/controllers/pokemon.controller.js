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
 
   // setting format 
   // {id, image, name, types}
   const pokemonsApi = await results.concat(results2)
   pokemonsApi.forEach(async ({ name, url }) => {
     const { data: {
       id,
       // sprites:{other:{dream_world:{front_default: image}}},
       // types
     } } = await axios.get(url)
     // const type = types.map(({type}) => type.name)
     return await {
       id,
       name,
       // image,
       // type
     }
   })

  console.log(pokemons)

  // const {results: pokemonArray1 , next: next20pokemons} = responseApi1.data
  // const responseApi2 = await axios.get(next20pokemons)
  // console.log(.data)

  // const pokemonArray1 = await responseApi.data.results
  // const pokemons = pokemonArray.map(pokemon => {
  // axios.get
  // })
  // const pokemons = pokemonArray1.concat(responseApi2.results).length



  // 2: peticion para obtener los tipos y adiccionar a la estructura de cada pokemon
  const responseLocal = await Pokemon.findAll()

  // let url = pokeApi
  //   if (req.params.id) url = `${pokeApi}/${req.params.id}`
  //   else if (req.query.name) url = `${pokeApi}/${req.query.name}`

  //   axios.get(url)
  //     .then(result => res.send(result.data))
  //     .catch(() => res.status(400).send("Error"))
  // console.log(pokeApi)

  // console.log(pokemons)
  // const pokemons = await Pokemon.findAll(pokeName).data
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
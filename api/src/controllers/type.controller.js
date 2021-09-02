const { v4: uuidv4 } = require('uuid')
const { Type } = require('../db')

const getTypes = (req, res, next) => {
  return Type.findAll()
    .then(response => res.send(response))
    .catch(err => next(err))
}
const getOneType = (req, res, next) => {
  return Type.findOne({
    where: {
      name: req.body.name
    }
  })
    .then(response => res.send(response))
    .catch(err => next(err))
}

const createType = (req, res, next) => {
  const { name } = req.body
  return Type.create({
    name,
    id: uuidv4(),
  })
    .then(response => res.send(response))
    .catch(err => next(err))
}

module.exports = {
  getTypes, createType,
}
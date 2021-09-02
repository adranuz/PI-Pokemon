const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('pokemon', {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    hp: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    attack: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    defense: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    speed: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    weight: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  });
};

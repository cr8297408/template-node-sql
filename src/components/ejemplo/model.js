const { DataTypes, Model, UUIDV4} = require('sequelize');
const db = require('../../config/connection/connectBd');
sequelize = db.sequelize;

const Ejemplo = sequelize.define('Ejemplo', {
  id: {
    type: DataTypes.STRING,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
  }
},{
  tableName: 'ejemplos',
  timestamps: true
})

module.exports = Ejemplo;
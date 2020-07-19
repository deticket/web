'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const {
  DATABASE_URL,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_USER
} = process.env;

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {

const isDocker = process.env.DATABASE_URL;
if (isDocker) {
  sequelize = new Sequelize(DATABASE_URL);
}
else {
  // for local development you will need to set these 
  sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, { ...config, dialect: 'postgres' });
}
// }
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
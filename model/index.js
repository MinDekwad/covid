const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename); //current file : index.js
const config = require(__dirname + '/../config/config.js');
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  sequelize = new Sequelize(config.database, config.username, config.password, config); // connect db
// }

fs
  .readdirSync(__dirname) // find all file in dir (current directory) => ['a.js', 'member.js']
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'); // read file and skip ไฟล์ตัวเอง
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // receive about data for connect db
db.Sequelize = Sequelize; // receive about function manage db => create(), update(), delete()

module.exports = db;
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Member extends Model {
      static associate(models) {
        
      }
    };
    Member.init({
      firstname: DataTypes.STRING,
      surname: DataTypes.STRING,
      citizen_id: DataTypes.STRING,
      created_date: DataTypes.DATE,
      updated_date : DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'Member',
      tableName: 'member',
      createdAt: false,
      updatedAt: false,
      timestamps: false
    });
    return Member;
  };
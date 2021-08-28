'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AadharCardDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.hasOne(Users, {foreignKey: 'aadharId' , as: 'user'})
    }

    toJSON() {
      return {...this.get(), id: undefined,userId: undefined}
    }
  };
  AadharCardDetails.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'Aadhar must have a name'},
        notEmpty: { msg: 'Name must not be empty'}
      }
    },
    aadharNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'Aadhar must have a aadharNumber'},
        notEmpty: { msg: 'aadharNumber must not be empty'}
      }
    },
  }, {
    sequelize,
    tableName: "aadharCardDetails",
    modelName: 'AadharCardDetails',
  });
  return AadharCardDetails;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({AadharCardDetails, Addresses, UserRoles}) {
      // define association here
      this.belongsTo(AadharCardDetails, { foreignKey: "aadharId", as: "adhaar" })
      this.hasMany(Addresses, {foreignKey: 'userId', as: 'addresses'})
      this.hasMany(UserRoles, {foreignKey: 'userId', as: 'userroles'})
    }
    toJSON() {
      return { ...this.get(), id: undefined, aadharId: undefined}
    }
  };
  Users.init({
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a name'},
        notEmpty: { msg: 'Name must not be empty'}
      }
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Users must have a country code'},
        notEmpty: { msg: 'country code must not be empty'}
      }
    },
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};
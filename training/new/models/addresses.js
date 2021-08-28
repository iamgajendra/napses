"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, { foreignKey: "userId", as: "user"});
    }

    toJSON() {
      return {...this.get(), id: undefined,userId: undefined}
    }
  }
  Addresses.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'address must have a name'},
          notEmpty: { msg: 'Name must not be empty'}
        }
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'address must have a street'},
          notEmpty: { msg: 'street must not be empty'}
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'address must have a city'},
          notEmpty: { msg: 'city must not be empty'}
        }
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'address must have a country'},
          notEmpty: { msg: 'country must not be empty'}
        }
      },
    },
    {
      sequelize,
      tableName: "addresses",
      modelName: "Addresses",
    }
  );
  return Addresses;
};

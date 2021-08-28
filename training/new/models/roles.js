"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({UserRoles}) {
      // define association here
      this.hasMany(UserRoles, {foreignKey: 'roleId', as: 'userroles'})
    }
    toJSON() {
      return {...this.get(), id: undefined}
    }

  }
  Roles.init(
    {
      roleUuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'role must have a name'},
          notEmpty: { msg: 'name must not be empty'}
        }
      },
    },
    {
      sequelize,
      tableName: "roles",
      modelName: "Roles",
    }
  );
  return Roles;
};

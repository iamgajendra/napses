'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Roles, Users}) {
      // define association here
      this.belongsTo(Roles, { foreignKey: "roleId", as: "role" })
      this.belongsTo(Users, { foreignKey: "userId", as: "user" })
    }
    toJSON() {
      return {...this.get(), id: undefined, roleId: undefined, userId: undefined}
    }
  };
  UserRoles.init({
    
  }, {
    sequelize,
    tableName: 'userRoles',
    modelName: 'UserRoles',
  });
  return UserRoles;
};
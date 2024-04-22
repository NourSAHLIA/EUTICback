import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const User = sequelize.define(
  "admin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    mot_de_pass: {
      type: DataTypes.STRING,
    },

    role :{
      type : DataTypes.STRING,
    }
  },
 
);
export default User;

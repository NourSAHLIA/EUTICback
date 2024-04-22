import sequelize from "../config/db.js";
const entreprise = sequelize.define({
    entrepriseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    responsableMail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);
export default entreprise;
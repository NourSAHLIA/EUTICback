import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const produit = sequelize.define({
        referenceProduit: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        nomProduit: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        descriptionProduit: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        marqueProduit: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          prix: {
            type: DataTypes.NUMBER,
            allowNull: false,
          },
          quantity:{
            type: DataTypes.NUMBER,
            allowNull: false,
          }

}
 
);
export default produit;
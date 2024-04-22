import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const promotion = sequelize.define({
    prixPromotion: {
        type: DataTypes.NUMBER,
        
      },
      debutPromo:{
        type: DataTypes.DATE,
      },
      finPromo: {
        type: DataTypes.DATE,
      },
}
);
export default promotion;
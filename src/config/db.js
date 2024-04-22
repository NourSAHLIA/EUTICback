import {Sequelize} from 'sequelize';
const sequelize = new Sequelize('eutic', 'root', '', {
  host: 'localhost',
  dialect:'mysql',
});
export default sequelize;
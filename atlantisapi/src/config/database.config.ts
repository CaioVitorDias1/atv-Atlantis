import { Sequelize } from "sequelize";


const db = new Sequelize('####', '####', '####',{
    host: "localhost",
    dialect: "postgres",
    logging: false
});

export default db
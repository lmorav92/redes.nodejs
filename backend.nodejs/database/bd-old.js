import Sequelize from "sequelize";

const db = new Sequelize("redesbd","root","",{
    host:"localhost",
    dialect:"mysql"
})

export default db;
import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()  
const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: { //configuracion de sequelize
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});//el primer valor es el nombre de la base de datos, segundo valor nombre de usuario, tercero el password, el cuarto una serie de configuraciones 


export default db;
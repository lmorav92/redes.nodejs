import db from "./index.js";
import { DataTypes } from "sequelize";

const UsuarioModel = db.define("tb_dusuarios",{
NOMBRE_USUARIO: { 
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
        isAlpha:{
            msg:"El nombre de usuario solo puede contener letras",
        }
    }
},
PASSWORD_2: {
    type:DataTypes.STRING,
    allowNull:false,
},
USUARIO: {
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
},
EMAIL: {
    type:DataTypes.STRING,
    unique:true,
    validate:{
        isEmail:{
            msg:"Correo incorrecto"
        }
    }
},
TB_NROL_ID: {
    type:DataTypes.INTEGER,
    allowNull:false,
}
});


export default UsuarioModel;
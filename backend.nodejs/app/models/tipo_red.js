'use strict';
import db from "../models/index.js";
import { DataTypes } from "sequelize";

const Tipo_RedModel = db.define("tb_ntipo_red",{
DESCRIPCION: { type: DataTypes.STRING},

});


export default Tipo_RedModel;
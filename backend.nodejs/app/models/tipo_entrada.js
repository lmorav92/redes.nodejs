'use strict';
import db from "../models/index.js";
import { DataTypes } from "sequelize";

const Tipo_EntradaModel = db.define("tb_ntipo_entrada",{
DESCRIPCION: { type: DataTypes.STRING},

});


export default Tipo_EntradaModel;
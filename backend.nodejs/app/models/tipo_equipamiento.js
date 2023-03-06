'use strict';
import db from "../models/index.js";
import { DataTypes } from "sequelize";

const Tipo_EquiamientoModel = db.define("tb_ntipo_equipamiento",{
DESCRIPCION: { type: DataTypes.STRING},

});


export default Tipo_EquiamientoModel;
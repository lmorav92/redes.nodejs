'use strict';
import db from "../models/index.js";
import { DataTypes } from "sequelize";

const RolModel = db.define("tb_nrol",{
DESCRIPCION: { type: DataTypes.STRING},

});


export default RolModel;
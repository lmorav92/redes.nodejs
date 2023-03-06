'use strict';
import db from "./index.js";
import { DataTypes } from "sequelize";

const RolPaginasModel = db.define("tb_nrol_paginas",{
    TB_DPAGINAS_ID: { type: DataTypes.INTEGER},
    TB_NROL_ID: { type: DataTypes.INTEGER}
});


export default RolPaginasModel;
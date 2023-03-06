import RolPaginasModel from "../app/models/rol_paginas.js";


  export const usuarioRolPaginas = async (req,res) => {
    try {
      const rolp  = await RolPaginasModel.findAll({
          where:{TB_NROL_ID:req.params.id}
      });
      res.json(rolp);
        } catch (error) {
      res.json({message:error.message})
        }
  }
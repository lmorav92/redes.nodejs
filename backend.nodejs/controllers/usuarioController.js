import UsuarioModel from "../app/models/usuarios.js";

export const getAllUsuarios = async (req,res) => {
  try {
    const usuarios  = await UsuarioModel.findAll();
    res.json(usuarios);
      } catch (error) {
    res.json({message:error.message})
      }
}
export const getUsuario = async (req,res) => {
  try {
    const usuario  = await UsuarioModel.findAll({
        where:{id:req.params.id}
    });
    res.json(usuario[0]);
      } catch (error) {
    res.json({message:error.message})
      }
}
export const createUsuario = async (req,res) => {
  try {
    await UsuarioModel.create(req.body);
    res.json({message:"Registro insertado correctamente"});
      } catch (error) {
    res.json({message:error.message})
      }
}
export const updateUsuario = async (req,res) => {
  try {
    await UsuarioModel.update(req.body,{
      where:{id:req.params.id}
    });
    res.json({message:"Registro modificado correctamente"});
      } catch (error) {
    res.json({message:error.message})
      }
}
export const deleteUsuario = async (req,res) => {
  try {
    await UsuarioModel.destroy(req.body,{
      where:{id:req.params.id}
    });
    res.json({message:"Registro eliminado correctamente"});
      } catch (error) {
    res.json({message:error.message})
      }
}
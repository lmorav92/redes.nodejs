import UsuarioModel from "../app/models/usuarios.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

export const loginIn = async (req,res) => {
    try {

      var user = req.body.usuario;  
      var contrasena = bcrypt.hashSync(req.body.contrasena,+authConfig.rounds);
      const usuario  = await UsuarioModel.findOne({
          where:{ USUARIO:user,
                  PASSWORD_2:contrasena
                }
              });
      res.json({message:'Usuario logueado correctamente'});
        } catch (error) {
      res.json({message:error.message})
        }
  }

  export const signUp = async (req,res) => {
    try {
      let contrasena = bcrypt.hashSync(req.body.contrasena,+authConfig.rounds);
      await UsuarioModel.create({
        NOMBRE_USUARIO:req.body.username,
        PASSWORD_2:contrasena,
        USUARIO:req.body.usuario,
        EMAIL:req.body.email,
        TB_NROL_ID:req.body.rolId,
      }).then(user => {
        let token = jwt.sign({user:user},authConfig.secret,{
          expiresIn:authConfig.expires
        });

        res.json({
          user:user,
          token:token
        })
      })

      
    } catch (error) {
      res.json({message:error.message})
    }
  }
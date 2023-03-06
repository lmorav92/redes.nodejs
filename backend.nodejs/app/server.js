import express  from "express";
import cors from "cors";
import db from "./models/index.js";
import router from "../routes/routes.js";

const app = express();

const PORT = process.env.PORT || 8000

/*app.get("/",(req,res)=>{
    res.send("Hola Mundo");
})*/
app.use(cors());
app.use(express.json());
//app.use('/usuarios',routerUsuario);
app.use('',router);

try {
    await db.authenticate();    
    console.log("Conexion exitosa a la BD");
    
} catch (error) {
    console.log("Error de conexion");
}

app.listen(PORT,()=>{    
    console.log("Server Up running in http://localhost:8000");    
})

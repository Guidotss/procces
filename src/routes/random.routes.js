import { Router } from "express";
import { random } from "../script/random.js";
import { fork } from "child_process";

const router = Router();

router.get("/",(req,res) => {
    const { limite } = req.query;

    if(limite != undefined && limite <= 2000){
        const numeros = random(limite);    
        res.json(numeros);
    }else{
        const respuesta = fork("src/routes/random.routes.js");
        respuesta.on("message",(numeros) => {
            res.json(numeros);
        }); 
    }
})

export default router;
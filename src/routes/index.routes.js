// tirando a responsabilidade do server e fazendo ela funcionar novamente

import { Router } from "express"

import planetasRoutes from "./planetas.routes.js"

const routes = Router() 

routes.get("/", (req,res) => {
    return res.status(200).json({ message: "Servidor está funcionando!" })
    })

routes.use("/planetas", planetasRoutes)

export default routes


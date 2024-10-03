// tirando a responsabilidade do server e fazendo ela funcionar novamente

import { Router } from "express"

import docesRoutes from "./doces.routes.js" // Precisa ter o .js
import filmesRoutes from "./filmes.routes.js"

const routes = Router() 

routes.get("/", (req,res) => {
    return res.status(200).json({ message: "Servidor está funcionando!" })
    })

routes.use("/doces", docesRoutes)
routes.use("/filmes", filmesRoutes)

export default routes


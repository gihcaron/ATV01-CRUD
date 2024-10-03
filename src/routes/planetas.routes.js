import { response, Router } from "express"

const planetasRoutes = Router()


let planetas = [ 
    {
    id:  Number(Math.floor(Math.random() * 99)+1),
    nome: "Planeta Dev",
    temperatura: 28.4,
    agua: false,  //Indicação de existência de água
    atm: [
        "JS","NODE",  "VS", "Code"],
}
]

// Rota buscar todos os elementos do array planetas
planetasRoutes.get("/", (req, res) => {
    return res.status(200).json(planetas);
})

// Rota para criar novos elementos do array  planetas
planetasRoutes.post("/", (req, res) => {
    const { nome, temperatura, agua, atm} = req.body

    if (!nome || !temperatura || !agua){
        return res.status(400).send({ message: "Os campos nome, temperatura e agua são obrigatórios. Preencha-os e tente novamente."
           
        })
    }

// Validação de existência de água
if ( agua != "sim" && agua != "não"){
    return res.status(400).send({ message: "O campo agua deve ser preenchido com 'sim' ou 'não'!"
    }
)}
const novoPlaneta = {
    id:  Number(Math.floor(Math.random() * 99)+1),
    nome,
    temperatura,
    agua,
    atm,
}

planetas.push(novoPlaneta)
return res.status(201).send({ message: "Planeta criado com sucesso!", novoPlaneta

})
    })    
    
    

//Rota para buscar um elemento especifico do planetas
planetasRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const planeta = planetas.find((movie) => movie.id === Number(id))


    if (!planeta) {
        return res.status(404).send ({ message: "planeta não encontrado"})
    }

    return res.status(200).send(planeta)
})

// Rota para editar um  planetas
planetasRoutes.put("/:id", (req,res) => {
    const { id } = req.params

    const planeta = PlanetasRoutes.find((movie) => movie.id === Number(id))


    if (!planeta) {
        return res.status(404).send ({ message: "planeta não encontrado"})
    }

    const {nome, temperatura, agua} = req.body

    planeta.nome = titulo
    planeta.temperatura = temperatura
    planeta.agua= agua

    return res.status(200).send({
        message: "planeta atualizado",
       
    })
})


// Rota para deletar uma Planetas Routes
planetasRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const planeta = planetas.find((movie) => movie.id === Number(id))

    if (!planeta) {
        return res.status(404).send ({ message: "planeta não encontrado"})
    }
    

    planetas = planetas.filter((movie) => movie.id !== Number(id));

    return res.status(200).send({ message: "planeta deletado!",
  
    })

})

export default planetasRoutes // Exportar por padrão
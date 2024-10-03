import { response, Router } from "express"

const filmesRoutes = Router()

let filmesMarcantes = [ 
    {
    id:  Number(Math.floor(Math.random() * 99)+1),
    titulo: "E assim que acaba",
    genero: "Drama",
    emCartaz: false,
    },
    {
        id: Number(Math.floor(Math.random() * 99)+1),
        titulo: "Toy Story",
        genero: "Animacao",
        emCartaz: false,
        },
        {
            id:  Number(Math.floor(Math.random() * 99)+1),
            titulo: "Sherek",
            genero: "Animacao",
            emCartaz: false,
        }
]

// Rota buscar todos os elementos do array filmesMarcantes
filmesRoutes.get("/", (req, res) => {
    return res.status(200).json(filmesMarcantes);
})

// Rota para criar novos elementos do array  filmesMarcantes
filmesRoutes.post("/", (req, res) => {
    const { titulo, genero, emCartaz} = req.body;

    const novoFilme = {
        id: Number(Math.floor(Math.random() * 99)+1),
       titulo,
       genero,
       emCartaz,
    }
    filmesMarcantes.push(novoFilme)

    return res.status(201).json(novoFilme)
})

//Rota para buscar um elemento especifico do filmesMarcantes
filmesRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id))


    if (!filme) {
        return res.status(404).send ({ message: "Filme não encontrado"})
    }

    return res.status(200).send(filme)
})

// Rota para editar um  filmesMarcantes
filmesRoutes.put("/:id", (req,res) => {
    const { id } = req.params

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id))


    if (!filme) {
        return res.status(404).send ({ message: "Filme não encontrado"})
    }

    const {titulo, genero, emCartaz} = req.body

    filme.titulo = titulo
    filme.genero = genero
    filme.emCartaz= emCartaz

    return res.status(200).send({
        message: "Filme atualizado",
       
    })
})


// Rota para deletar uma filmesMarcantes
filmesRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id))

    if (!filme) {
        return res.status(404).send ({ message: "Filme não encontrado"})
    }
    

    filmesMarcantes = filmesMarcantes.filter((movie) => movie.id !== Number(id));

    return res.status(200).send({ message: "Filme deletado!",
  
    })

})

export default filmesRoutes // Exportar por padrão
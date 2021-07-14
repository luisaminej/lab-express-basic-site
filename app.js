
// 1.IMPORTACIONES
const express       =   require("express")
 const app           =   express()
 const hbs                   = require("hbs")

//2. MIDDLEWARES
 app.use(express.static('public'))
 app.set("view engine", "hbs")

 //3. RUTAS


 app.get("/", (req, res) => {
    res.render("home")
        
    })
 app.get("/works", (req, res) => {
    
    let data = {
        nombre: "Luisa Jiménez",
        bootcamp: "Ironhack",
        ciudad: "CDMX",
    
        
        direccion: {
            calle: "Av. Coyoacán",
            numero: 123
        }
    }
    res.render("works", data)
})



    app.get("/about", (req, res) => {
        res.render("about")
    })

    

 //4. SERVIDOR
 app.listen(3006, () => {
    console.log("Servidor activado en el puerto 3006")
    })
    
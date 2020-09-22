//Configurações gerais

import express from 'express'
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'

const app = express()

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

app.listen(3000 || process.env.PORT, () =>{
    console.log('Estou ouvindo')
})

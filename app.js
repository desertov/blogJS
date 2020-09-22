//Configurações gerais

import express from 'express'
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'

const app = express()

//Configurando o BodyParser
 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json())

//Configurando o HandleBars

app.listen(3000 || process.env.PORT, () =>{
    console.log('Estou ouvindo')
})

app.get('/', (req, res) =>{
    res.send('Página Inicial')
})

app.get('/documentacao', (req, res) =>{
    res.send('Documentação')
})

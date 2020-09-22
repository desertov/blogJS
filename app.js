//Configurações gerais

import express from 'express'
import handlebars from 'express-handlebars'
import bodyParser from 'body-parser'
import admin from './routes/admin.js'
import path from 'path'
// import mongoose from 'mongoose'

const app = express()
const __dirname = path.resolve()

//Configurando o BodyParser
 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json())

//Configurando o HandleBars
 app.engine('handlebars', handlebars({defaultLayout: 'main'}))
 app.set('view engine', 'handlebars')


 app.listen(3000 || process.env.PORT, () =>{
    console.log('Estou ouvindo')
 })

//Public 
 app.use(express.static(path.join(__dirname,'public')))


 //Rotas 

//  app.get('/', (req, res) =>{
//     res.send('Página Inicial')
// }) 


// Grupo de Rotas
 app.use('/admin', admin)



//  app.get('/documentacao', (req, res) =>{
//     res.send('Documentação')
//  })

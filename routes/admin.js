import express from 'express'
import mongoose from 'mongoose'
import * as categorias from '../models/Categoria.js'

const Categorias = mongoose.model('categorias')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('admin/index')
})

router.get('/posts', (req, res) =>{
    res.render('admin/posts')
})

router.get('/categorias', (req, res) =>{
    res.render('admin/categorias')
})

router.post('/categorias/nova', (req, res) =>{
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categorias(novaCategoria).save().then(()=>{
        console.log('Registro salvo com sucesso')
    }).catch(err =>{
        console.log('Ocorreu um erro ao tentar salvar:' + err)
    })

})

router.get('/categorias/add', (req, res) =>{
    res.render('admin/addcategorias')
})

export default router
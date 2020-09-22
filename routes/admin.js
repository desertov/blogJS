import express from 'express'
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('admin/index')
})

router.get('/posts', (req, res) =>{
    res.send('Aqui estamos dentro de /admin')
})

router.get('/categorias', (req, res) =>{
    res.send('Aqui estamos dentro de /admin')
})
export default router
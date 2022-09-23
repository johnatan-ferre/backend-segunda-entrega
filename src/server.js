import express from 'express'
const { Router } = express

import {
    productosDao as productosApi,
    carritosDao as carritosApi
} from './daos/index.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', async (req, res) => {
    res.send(await productosApi.getAll())
})

productosRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    res.send(await productosApi.getById())
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    productosApi.save(req.body)
    res.json(productosApi.getAll())
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    const { id } = req.params
    productosApi.update(req.body, parseInt(id))
    res.json(productosApi.getAll()) 
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    const { id } = req.params
    productosApi.delete(parseInt(id))
    res.json(productosApi.getAll())
})

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()

carritosRouter.get('/', async (req, res) => {
    res.send(await carritosApi.getAll()) 
})

carritosRouter.post('/', async (req, res) => {
    carritosApi.save(req.body)
    res.json(carritosApi.getAll())
})

carritosRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    carritosApi.delete(parseInt(id))
    res.json(carritosApi.getAll())
})

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get('/:id/productos', async (req, res) => {
    
})

carritosRouter.post('/:id/productos', async (req, res) => {
    
})

carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
    
})

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app
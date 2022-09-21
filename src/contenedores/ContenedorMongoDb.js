import mongoose from 'mongoose'
import config from '../config.js'
import * as model from "../daos/productos/ProductosDaoMongoDb.js"

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            const elemReadById = await this.coleccion.find({ "_id": id }, {__v: 0})
            if (elemReadById.length != 0) {
                return elemReadById
            } else {
                throw new Error("elemento no encontrado")
            }
        } catch (error) {
            console.log("elemento no encontrado")
        }
    }

    async listarAll() {
        const elemRead = await this.coleccion.find()
    }

    async guardar(nuevoElem) {
        const nuevoElem = {
            title: 'Regla',
            price: 120,
            thumbnail: 'regla.png'
        }
        const elemSaveModel = new model.ProductosDaoMongoDb(nuevoElem)
        const savedElem = await elemSaveModel.save()
    }

    async actualizar(nuevoElem) {
        const updatedElem = await this.coleccion.updateOne(
            { title: 'Regla'}, { $set: {stock: 100} }
        )
    }

    async borrar(id) {
        const elemDeletedById = await this.coleccion.find({ "_id": id }) 
        const deletedElem = await this.coleccion.deleteOne({ _id: elemDeletedById })
    }

    async borrarAll() {
        const deleteAll = await this.coleccion.deleteMany({})
    }
}

export default ContenedorMongoDb
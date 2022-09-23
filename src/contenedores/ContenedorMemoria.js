import config from '../config.js'

class ContenedorMemoria {

    constructor() {
        this.elementos = []
    }

    getById(id) {
        let elemFinder = this.elementos.find(e => e.id ===id)
        return elemFinder
    }

    getAll() {
        return this.elementos
    }

    save(elem) {
        if (this.elementos.length > 0) {
            let newElem = this.elementos[this.elementos.length - 1].id + 1
            elemento.id = newElem
            this.elementos.push(elem)
        } else {
            elemento.id = 1
            this.elementos.push(elem)
        }
    }

    update(elem, id) {
        let elemUpdate = this.elementos.find(e => e.id === id)
        if (elemUpdate) {
            this.elementos[elemUpdate].title = elem.title
            this.elementos[elemUpdate].price = elem.price
            this.elementos[elemUpdate].thumbnail = elem.thumbnail
        } else {
            return {error: 'Elemento imposible de encontrar.'}
        }
    }

    delete(id) {
        let elemDelete = this.elementos.find(e => e.id === id)
        this.elementos.splice(elemDelete, 1)
    }

    deleteAll() {
        return this.elementos.splice(0, this.elementos.length)
    }
}

export default ContenedorMemoria

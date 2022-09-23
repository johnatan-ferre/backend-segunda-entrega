import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
    databaseURL: 'https://coderhouse32065ap.firebaseio.com'
})

const db = admin.firestore();

class ContenedorFirebase {

    constructor(coleccion) {
        this.coleccion = db.collection(coleccion)
    }

    async getById(id) {
        try {
            const elem = this.coleccion.doc(`${id}`)
            const doc = await elem.get()
            
            const resById = doc.data()
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        try {
            const querySnapshot = await this.coleccion.get()
            let docs = querySnapshot.docs
            const response = docs.map ((doc) => ({
                id: doc.id,
                title: doc.data().title,
                price: doc.data().price,
                thumbnail: doc.data().thumbnail
            }))
        } catch (error) {
            console.log(error);
        }
    }

    async save(nuevoElem) {
        try {
            let id = 1
            const doc = this.coleccion.doc(`${id}`)
            await doc.create({title: 'Cuaderno', price: 200, thumbnail: 'cuaderno.png'})

            id++
            doc = this.coleccion.doc(`${id}`)
            await doc.create({title: 'Cartuchera', price: 400, thumbnail: 'cartuchera.png'})

            id++
            doc = this.coleccion.doc(`${id}`)
            await doc.create({title: 'Mochila', price: 500, thumbnail: 'mochila.png'})
        } catch (error) {
            console.log(error)
        }
    }

    async update(nuevoElem) {
        try {
            let id = 1
            const elem = this.coleccion.doc(`${id}`)
            let doc = await elem.update({ price: 250 })
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById(id) {
        try {
            const elem = this.coleccion.doc(`${id}`)
            let doc = await elem.delete()
        } catch (error) {
            console.log(error)
        }
    }
    
    async deleteAll() {
        const querySnapshot = await this.coleccion.get()
        querySnapshot.docs.forEach(async (snapshot) =>{
            await snapshot.ref.delete()
        })
    }

}

export default ContenedorFirebase
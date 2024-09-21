import {sql} from './db.js'
import {randomUUID} from 'crypto'

export class Database {

//read    
    async get() {
        return await sql `select * from dadosCarros`
    }
//inserir
    async post(dadosCarros) {
        await sql `insert into dadosCarros (id, modelo, cor)
        values (${randomUUID()}, ${dadosCarros.modelo}, ${dadosCarros.cor})`

        return await this.get();
    }
//atualizar
    async put(id, dadosCarros) {
        await sql  `UPDATE dadosCarros SET
        modelo = ${dadosCarros.modelo},
        cor = ${dadosCarros.cor}
        WHERE id = ${id}`

        return await this.get();
    }
//deletar
    async delete(id) {
        await sql  `DELETE FROM dadosCarros 
        WHERE id = ${id}`

        return await this.get();
    }
}
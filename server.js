import {fastify} from 'fastify'
import {Database} from './database.js'

const server = fastify();
const database = new Database;

server.get('/', async () => {
    return await database.get();
})

server.post('/new-dadosCarros', async (request) => {
    return await database.post(request.body);
})

server.put('/alter-dadosCarros/:id', async (request) => {
    return await database.put(request.params.id, request.body);
})

server.delete('/delete-dadosCarros/:id', async (request) => {
    return await database.delete(request.params.id);
})

server.listen({
    port: 3333
});
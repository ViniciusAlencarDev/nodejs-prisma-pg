import fastify from "fastify";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Server {

    private app;
    private port = 3000;

    constructor(port: number) {
        this.app = fastify()
        this.port = port || this.port

        this.routes()
    }

    routes() {
        this.app.get('/', async () => {
            return await prisma.user.findMany();
        })
        
        this.app.post('/', async (request) => {
        
            const { email, name } = request.body;
        
            await prisma.user.create({
                data: {
                    email,
                    name
                }
            });
        })
        
        this.app.get('/posts', async () => {
            return await prisma.post.findMany();
        })
        
        this.app.post('/posts', async (request) => {
        
            const { titulo} = request.body;
        
            await prisma.post.create({
                data: {
                    titulo
                }
            });
        })   
    }

    start() {
        this.app.listen({
            host: "0.0.0.0",
            port: this.port
        }).then(() => {
            console.log(`Server started in port ${this.port}`);
        })
        
    }
}

export default Server

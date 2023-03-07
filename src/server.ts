import fastify from "fastify";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = fastify()

app.get('/', async () => {
    return await prisma.user.findMany();
})

app.post('/', async (request) => {

    const { email, name } = request.body;

    await prisma.user.create({
        data: {
            email,
            name
        }
    });
})

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

app.listen({
    host: "0.0.0.0",
    port
}).then(() => {
    console.log(`Server started in port ${port}`);
})

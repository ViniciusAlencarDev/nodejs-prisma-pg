import Server from './server';

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = new Server(port);
app.start();

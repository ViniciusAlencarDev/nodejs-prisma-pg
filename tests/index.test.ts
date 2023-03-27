import Server from '../src/server';
import supertest from 'supertest';

describe('global', () => {
    test('API users get /', async () => {
        const app = new Server(3001)
        await app.start();

        const result = supertest(app).get('/')
            .send()
            .end(function(err, res) {
                if (err) throw err;
            });

        expect(!!result).toBe(true)
    })

    test('API users get / not', async () => {
        const app = new Server(3001)
        await app.start();

        const result = await supertest(app).get('/data')
            .send()
            .end(function(err, res) {
                if (err) throw err;
            });

        console.log(result)

        expect(result.statusCode).toBe(404)
    })
})

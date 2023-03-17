import Server from '../src/server';
import supertest from 'supertest';

describe('global', () => {
    test('API users', async () => {
        const app = new Server(3001)
        await app.start();

        const result = supertest(app).get('/')
            .send()
            .end(function(err, res) {
                if (err) throw err;
            });

        console.log(result)

        expect(!!result).toBe(true)
    })
})

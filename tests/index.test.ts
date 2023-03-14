import Server from '../src/server';
import supertest from 'supertest';

describe('global', () => {
    test('API users', () => {
        const app = new Server(3001).start()

        const result = supertest(app).get('/')
            .send()
            .end(function(err, res) {
                if (err) throw err;
            });

        console.log(result)

        expect(10).toBe(10)
    })
})

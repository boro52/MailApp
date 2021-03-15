const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', async() => {
        try {
            const resp = await request(app).get('/');
            expect(resp.statusCode).toBe(200);
            console.log(resp.statusCode);
        } catch(e) {
            throw e;
        }
    });

    test('It should response the GET method', async() => {
        try {
            const resp = await request(app).get('/users');
            expect(resp.statusCode).toBe(200);
            expect(resp.text).toBe("respond with a resource");
        } catch(e) {
            throw e;
        }
    });
});
const server = require('../server');
const supertest = require('supertest');
const request = supertest(server);

beforeAll(async () => {
    console.log('Starting TDD with Jest');
});

afterAll(() => {
    server.close();
    console.log('Server closed');
});

var sessionID;

describe('Start testing Watson ednpoints', () => {

    it('should return 200 accessing /session', async () => {
        const response = await request.get('/api/watson/session');
        sessionID = response.body.session_id;
        expect(response.status).toEqual(200);
    });

    it('should return 200 and start chating', async () => {
        const response = await request.post('/api/watson/message')
        .set('session_id', sessionID)
          .send({
            input: "Olá"
          });
        expect(response.status).toEqual(200);
        expect(response.body.output.generic[0].text).toEqual('Olá, tudo bem?!  Como posso te ajudar?');
      })

});
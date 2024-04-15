describe('API Tests', () => {
    context('GET Requests', () => {
        it('Should retrieve games by studio', () => {
            cy.request('localhost:3000/game/studio/:studio').then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body).to.be.an('array');
            });
          });
    })
  })
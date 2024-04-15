describe('API Tests', () => {
    context('GET Requests', () => {
        it('Should retrieve games by type', () => {
            cy.request('localhost:3000/game/type/:type').then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body).to.be.an('array');
            });
        });
    })
  })
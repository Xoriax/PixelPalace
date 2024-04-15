describe('API Tests', () => {
    context('GET Requests', () => {
      it('Should retrieve data from p-derive endpoint', () => {
        cy.request('GET', 'http://localhost:3000/pderive').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.exist;
        });
      });
    });
  });
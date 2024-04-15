describe('API Tests', () => {
    context('GET Requests', () => {
        it('Should retrieve all games', () => {
            cy.request('localhost:3000/game').then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });
        });
    })
})
describe('API Tests', () => {
    context('POST Requests', () => {
        it('Should login an existing user', () => {
            cy.request('POST', 'localhost:3000/login', {
                username: 'test',
                password: 'test'
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.eq('Login successful');
            });
        });
    })
})
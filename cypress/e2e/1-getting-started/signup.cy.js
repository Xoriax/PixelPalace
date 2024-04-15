describe('API Tests', () => {
    context('POST Requests', () => {
        it('Should create a new user', () => {
            cy.request('POST', 'localhost:3000/signup', {
                username: 'testUser',
                email: 'test@example.com',
                password: 'testPassword'
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.eq('User created successfully.');
            });
        })
    })
})
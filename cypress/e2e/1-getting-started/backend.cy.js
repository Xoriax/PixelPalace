describe('API Tests', () => {
    context('GET Requests', () => {
      it('Should retrieve all games', () => {
        cy.request('/game').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
        });
      });
  
      it('Should retrieve a specific game by ID', () => {
        cy.request('/game/:id').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('nom');
          expect(response.body).to.have.property('image');
          // Add more assertions as needed
        });
      });
  
      it('Should retrieve games by type', () => {
        cy.request('/game/type/:type').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
        });
      });
  
      it('Should retrieve games by studio', () => {
        cy.request('/game/studio/:studio').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
        });
      });
  
      it('Should retrieve all product derivatives', () => {
        cy.request('/pderive').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
        });
      });
  
      // Add more tests for other endpoints as needed
    });
  
    context('POST Requests', () => {
      it('Should create a new user', () => {
        cy.request('POST', '/signup', {
          username: 'testUser',
          email: 'test@example.com',
          password: 'testPassword'
        }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.eq('User created successfully.');
        });
      });
  
      it('Should login an existing user', () => {
        cy.request('POST', '/login', {
          username: 'testUser',
          password: 'testPassword'
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.eq('Login successful');
        });
      });
  
      // Add more tests for other POST endpoints as needed
    });
  });
  
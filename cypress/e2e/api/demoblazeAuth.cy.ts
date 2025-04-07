import { faker } from '@faker-js/faker';

describe('Demoblaze API Tests - Signup & Login', () => {
  const baseUrl = 'https://api.demoblaze.com';

  // Generate random username and password
  const randomUser = faker.internet.userName();
  const password = faker.internet.password();

  it('Create a new user (signup)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: {
        username: randomUser,
        password: password
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    //   console.log('Response Body:', response.body);
    });
  });

  it('Try to sign up with an existing user', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/signup`,
      body: {
        username: randomUser,
        password: password
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('errorMessage', 'This user already exist.');
    });
  });

  it('Login with correct username and password', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        username: randomUser,
        password: password
      },
      failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        const tokenString = response.body;
        // Extract the token after 'Auth_token: '
        const token = tokenString.replace('Auth_token: ', '');
        // assert it exists
        expect(token).to.not.be.empty;
    });
  });
  it('Login with incorrect username and password', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        username: 'test',
        password: password
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      console
      expect(response.body).to.have.property('errorMessage', 'Wrong password.');
    });
  });
});


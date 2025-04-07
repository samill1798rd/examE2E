export class SauceDemoPage {

    visit() {
        cy.visit('/');
    }

    login(username: string, password: string) {
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();
    }

    addToCart(productName: string) {
        cy.contains('.inventory_item', productName)
          .find('button')
          .click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }

    checkout(firstName: string, lastName: string, postalCode: string) {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
    }

    finish() {
        cy.get('[data-test="finish"]').click();
    }
    
    getSuccessMessage() {
        return cy.get('.complete-header');
    }


}
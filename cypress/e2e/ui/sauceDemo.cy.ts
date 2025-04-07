
import { SauceDemoPage } from '../../support/pages/SauceDemoPage';

describe('Sauce Demo E2E Test', () => {

    const sauceDemoPage = new SauceDemoPage();

    beforeEach(() => {
        cy.fixture('sauceDemoUser').as('userData');
        sauceDemoPage.visit();
    });

    it('should login and complete a purchase', function () {
        const data = this.userData;

        // Login
        sauceDemoPage.login(data.username, data.password);

        // Add items to cart
        sauceDemoPage.addToCart(data.product1);
        sauceDemoPage.addToCart(data.product2);

        // Go to cart and checkout
        sauceDemoPage.goToCart();
        sauceDemoPage.checkout(data.firstName, data.lastName, data.postalCode);
        sauceDemoPage.finish();

        // Verify success message
        sauceDemoPage.getSuccessMessage().should('contain.text', data.orderMessage);
    });
});

/* global cy */

describe('Common UI elements', () => {
	it('Shows or hides user menu options appropriately', () => {
		cy.visit('/');

		// Shows menu options on click
		cy.get('.user_menu__button').click();
		cy.get('.user_menu__options').should('be.visible');

		// Hides menu options on subsequent click
		cy.get('.user_menu__button').click();
		cy.get('.user_menu__options').should('not.be.visible');

		// Hides menu options when clicking outside
		cy.get('.user_menu__button').click();
		cy.get('.app_header').click();
		cy.get('.user_menu__options').should('not.be.visible');
	});

	it('Shows 404 page when visting nonexistent link', () => {
		cy.visit('/foo');
		cy.get('h1').should('contain', 'Page not found');
	});
});

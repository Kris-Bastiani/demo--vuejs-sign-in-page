/* global cy */

describe('New password page', () => {
	it('Validates form fields and submits successfully', () => {
		cy.visit('/new-password.html');

		// Shows 'This field is required.' when password field is blurred while empty
		cy.get('[data-cy=password-input] input').focus().blur();
		cy.get('[data-cy=password-input] .message').should('contain', 'This field is required.');

		// Shows 'This field is required.' when confirm password field is blurred while empty
		cy.get('[data-cy=confirm-password-input] input').focus().blur();
		cy.get('[data-cy=confirm-password-input] .message').should('contain', 'This field is required.');

		// Shows 'These fields need to match.' when confirm password field is blurred
		// while not matching password field
		cy.get('[data-cy=password-input] input').type('foo');
		cy.get('[data-cy=confirm-password-input] input').type('bar').blur();
		cy.get('[data-cy=confirm-password-input] .message').should('contain', 'These fields need to match.');

		// Shows 'Your password was successfully changed.' when submitted successfully
		cy.get('[data-cy=confirm-password-input] input').clear().type('foo');
		cy.get('[data-cy=submit-button]').click();
		cy.get('.message._success').should('be.visible');
	});
});

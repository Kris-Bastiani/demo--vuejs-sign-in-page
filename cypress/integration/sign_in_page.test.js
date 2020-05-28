/* global cy */

describe('New password page', () => {
	beforeEach(() => { cy.visit('/'); });

	it('Visits new password page when reset password link is clicked', () => {
		cy.get('[data-cy=reset-password-link').click();
		cy.url().should('include', '/new-password.html');
	});

	it('Validates form fields', () => {
		// Shows 'This field is required.' when email field is blurred while empty
		cy.get('[data-cy=email-input] input').focus().blur();
		cy.get('[data-cy=email-input] .message').should('contain', 'This field is required.');

		// Shows 'This field is required.' when password field is blurred while empty
		cy.get('[data-cy=password-input] input').focus().blur();
		cy.get('[data-cy=password-input] .message').should('contain', 'This field is required.');

		// Shows 'This email is invalid.' when email field is blurred while invalid
		cy.get('[data-cy=email-input] input').type('foo').blur();
		cy.get('[data-cy=email-input] .message').should('contain', 'This email is invalid.');

		// Shows 'This user doesn't exist.' when form is submitted with nonexistent user
		cy.get('[data-cy=email-input] input').clear().type('foo@bar.com');
		cy.get('[data-cy=password-input] input').type('foo');
		cy.get('[data-cy=submit-button]').click();
		cy.get('[data-cy=email-input] .message').should('contain', "This user doesn't exist.");
	});

	it('Signs in and out successfully', () => {
		// Shows 'You have signed in successfully.' and hides form when submitted successfully
		cy.get('[data-cy=email-input] input').type('eve.holt@reqres.in');
		cy.get('[data-cy=password-input] input').type('foo');
		cy.get('[data-cy=submit-button]').click();
		cy.get('.message._success').should('be.visible');

		// User menu options show 'sign out' when logged in, and sign out and show form when clicked
		cy.get('.user_menu__button').click();
		cy.get('.user_menu__options > li > button')
			.should('contain', 'Sign out')
			.click();
		cy.get('[data-cy=email-input]').should('be.visible');
	});
});

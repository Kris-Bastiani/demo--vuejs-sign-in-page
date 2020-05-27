import handleLoginResponseError from '../handleLoginResponseError';

const POSSIBLE_ERRORS = {
	'Missing email or username': {
		message: 'This field is required.',
		target: 'email',
	},
	'Missing password': {
		message: 'This field is required.',
		target: 'password',
	},
	'user not found': {
		message: "This user doesn't exist.",
		target: 'email',
	},
	other: { message: null, target: null },
};

describe('handleLoginResponseError()', () => {
	Object.keys(POSSIBLE_ERRORS).forEach(error => {
		it(`Returns appropriate message and target when error is ${error}`, () => {
			// eslint-disable-next-line security/detect-object-injection
			expect(handleLoginResponseError(error)).toMatchObject(POSSIBLE_ERRORS[error]);
		});
	});
});

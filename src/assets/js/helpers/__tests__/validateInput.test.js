import validateInput from '../validateInput';

describe('validateInput()', () => {
	it('Returns an appropriate string if the input is required but has no value', () => {
		expect(validateInput({
			required: true,
			type: 'text',
			value: null,
		})).toEqual('This field is required.');
	});

	it('Returns an appropriate string if the input is required but the value is an empty string', () => {
		expect(validateInput({
			required: true,
			type: 'text',
			value: '',
		})).toEqual('This field is required.');
	});

	it('Returns an appropriate string if the input is of type: email but the value is not a valid email', () => {
		expect(validateInput({
			required: true,
			type: 'email',
			value: 'foobar',
		})).toEqual('This email is invalid.');
	});

	it('Returns null if validates correctly', () => {
		expect(validateInput({
			required: false,
			type: 'text',
			value: 'foobar',
		})).toBeNull();
	});
});

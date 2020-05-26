export default target => {
	const { required, type, value } = target;
	const trimmedValue = value && value.trim();

	if (required && (!value || !trimmedValue.length)) return 'This field is required.';
	if (type === 'email' && trimmedValue.length && !trimmedValue.match(/^.+@.+$/g)) return 'This email is invalid.';
	return null;
};

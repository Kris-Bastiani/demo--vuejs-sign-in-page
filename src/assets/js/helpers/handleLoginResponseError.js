export default error => {
	switch (error) {
	case 'Missing email or username':
		return {
			message: 'This field is required.',
			target: 'email',
		};
	case 'Missing password':
		return {
			message: 'This field is required.',
			target: 'password',
		};
	case 'user not found':
		return {
			message: "This user doesn't exist.",
			target: 'email',
		};
	default:
		return { message: null, target: null };
	}
};

export default () => {
	window.localStorage.removeItem('user');
	window.location = '/';
};

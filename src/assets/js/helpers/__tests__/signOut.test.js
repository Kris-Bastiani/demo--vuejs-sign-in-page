import signOut from '../signOut';

describe('signOut()', () => {
	const { location } = window;

	beforeAll(() => {
		delete window.location;
		window.location = { assign: jest.fn() };

		Object.defineProperty(window, 'localStorage', {
			value: { removeItem: jest.fn(() => null) },
			writable: true,
		});
	});

	afterAll(() => { window.location = location; });

	it('mocks `window.location.assign` when testing', () => {
		expect(jest.isMockFunction(window.location.assign)).toEqual(true);
	});

	it('Removes user from localStorage and navigates to root page', () => {
		signOut();
		expect(window.localStorage.removeItem).toHaveBeenCalledWith('user');
		expect(window.location.assign).toBeCalledWith('/');
	});
});

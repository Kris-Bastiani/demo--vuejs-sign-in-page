import 'regenerator-runtime/runtime';
import postData from '../postData';

const mockResponse = { token: 'QpwL5tke4Pnpja7X4' };
const mockFetch = Promise.resolve({ json: () => Promise.resolve(mockResponse) });

describe('postData()', () => {
	beforeAll(() => {
		global.fetch = jest.fn().mockImplementation(() => mockFetch);
	});

	afterAll(() => {
		global.fetch.mockClear();
		delete global.fetch;
	});

	it('POSTs data and returns a response', async () => {
		const response = await postData('https://reqres.in/api/login', {
			email: 'eve.holt@reqres.in',
			password: 'cityslicka',
		});
		expect(response).toEqual(mockResponse);
	});
});

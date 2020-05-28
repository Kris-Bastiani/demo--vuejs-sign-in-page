import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import LoginForm from '../LoginForm.vue';

describe('LoginForm', () => {
	const { location } = window;
	let wrapper;

	beforeAll(() => {
		wrapper = shallowMount(LoginForm);

		delete window.location;
		window.location = { reload: jest.fn() };

		Object.defineProperty(window, 'localStorage', {
			value: { setItem: jest.fn(() => null) },
			writable: true,
		});
	});

	afterAll(() => { window.location = location; });

	it('Matches snapshot', () => { expect(wrapper.element).toMatchSnapshot(); });

	it('Sets appropriate input errors on input blur', () => {
		wrapper.vm.onInputBlur({
			target: {
				required: true,
				type: 'email',
				value: null,
			},
		}, 'email');
		expect(wrapper.vm.$data.email.error).toEqual('This field is required.');
	});

	it('Sets user in localStorage and sets signedIn to true on signIn', () => {
		wrapper.vm.signIn({});
		expect(window.localStorage.setItem).toHaveBeenCalledWith('user', '{}');
		expect(wrapper.vm.$data.signedIn).toEqual(true);
		expect(window.location.reload).toBeCalled();
	});
});

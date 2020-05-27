import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import LoginForm from '../LoginForm.vue';

describe('LoginForm', () => {
	let wrapper;

	beforeAll(() => { wrapper = shallowMount(LoginForm); });

	it('Matches snapshot', () => { expect(wrapper.element).toMatchSnapshot(); });
});

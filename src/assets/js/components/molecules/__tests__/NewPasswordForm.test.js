import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import NewPasswordForm from '../NewPasswordForm.vue';

describe('NewPasswordForm', () => {
	let wrapper;

	beforeAll(() => { wrapper = shallowMount(NewPasswordForm); });

	it('Matches snapshot', () => { expect(wrapper.element).toMatchSnapshot(); });
});

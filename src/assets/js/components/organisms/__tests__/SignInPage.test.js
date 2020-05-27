import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import SignInPage from '../SignInPage.vue';

describe('SignInPage', () => {
	it('Matches snapshot', () => {
		const wrapper = shallowMount(SignInPage);
		expect(wrapper.element).toMatchSnapshot();
	});
});

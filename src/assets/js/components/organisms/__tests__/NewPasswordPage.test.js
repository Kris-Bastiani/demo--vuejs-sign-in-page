import 'regenerator-runtime/runtime';
import { shallowMount } from '@vue/test-utils';
import NewPasswordPage from '../NewPasswordPage.vue';

describe('NewPasswordPage', () => {
	it('Matches snapshot', () => {
		const wrapper = shallowMount(NewPasswordPage);
		expect(wrapper.element).toMatchSnapshot();
	});
});

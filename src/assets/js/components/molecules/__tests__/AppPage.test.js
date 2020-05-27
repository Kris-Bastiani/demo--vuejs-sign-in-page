import { shallowMount } from '@vue/test-utils';
import AppPage from '../AppPage.vue';

describe('AppPage', () => {
	it('Matches snapshot', () => {
		const wrapper = shallowMount(AppPage);
		expect(wrapper.element).toMatchSnapshot();
	});
});

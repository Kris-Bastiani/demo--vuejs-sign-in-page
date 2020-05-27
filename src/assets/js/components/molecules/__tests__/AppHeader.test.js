import { shallowMount } from '@vue/test-utils';
import AppHeader from '../AppHeader.vue';

describe('AppHeader', () => {
	it('Matches snapshot', () => {
		const wrapper = shallowMount(AppHeader);
		expect(wrapper.element).toMatchSnapshot();
	});
});

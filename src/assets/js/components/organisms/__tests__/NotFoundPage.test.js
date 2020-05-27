import { shallowMount } from '@vue/test-utils';
import NotFoundPage from '../NotFoundPage.vue';

describe('NotFoundPage', () => {
	it('Matches snapshot', () => {
		const wrapper = shallowMount(NotFoundPage);
		expect(wrapper.element).toMatchSnapshot();
	});
});

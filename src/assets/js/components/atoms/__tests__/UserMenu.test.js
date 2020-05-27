import { createLocalVue, mount } from '@vue/test-utils';
import vClickOutside from 'v-click-outside';
import UserMenu from '../UserMenu.vue';

const localVue = createLocalVue();
localVue.use(vClickOutside);

describe('UserMenu', () => {
	let wrapper;

	beforeAll(() => { wrapper = mount(UserMenu, { localVue }); });

	it('Matches snapshot', () => { expect(wrapper.element).toMatchSnapshot(); });

	it('Toggles open state on click', () => {
		wrapper.find('.user_menu').trigger('click');
		expect(wrapper.vm.$data.isOpen).toEqual(true);
	});
});

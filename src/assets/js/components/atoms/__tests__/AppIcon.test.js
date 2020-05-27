import { mount } from '@vue/test-utils';
import AppIcon from '../AppIcon.vue';

const ICON_TYPES = ['chevron', 'crossCircle'];

describe('AppIcon', () => {
	ICON_TYPES.forEach(type => it('Should match snapshot when type = ', () => {
		const wrapper = mount(AppIcon, { propsData: { type } });
		expect(wrapper.element).toMatchSnapshot();
	}));
});

import { mount } from '@vue/test-utils';
import AppIcon, { ICON_TYPES } from '../AppIcon.vue';

describe('AppIcon', () => {
	ICON_TYPES.forEach(type => it(`Should match snapshot when type = ${type}`, () => {
		const wrapper = mount(AppIcon, { propsData: { type } });
		expect(wrapper.element).toMatchSnapshot();
	}));
});

import { mount } from '@vue/test-utils';
import InputField, { INPUT_TYPES } from '../InputField.vue';

const mountInputField = propsData => mount(InputField, { propsData });

describe('InputField', () => {
	INPUT_TYPES.forEach(type => it(`Should match snapshot when type = ${type}`, () => {
		const wrapper = mountInputField({ label: type, type });
		expect(wrapper.element).toMatchSnapshot();
	}));

	it('Should match snapshot when an error message is provided', () => {
		const wrapper = mountInputField({
			error: 'This is an error message.',
			label: 'text',
			type: 'text',
		});
		expect(wrapper.element).toMatchSnapshot();
	});
});

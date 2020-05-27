<template lang="pug">
	label.input_field(:class='{ _invalid: error }')
		span.input_field__label {{ label }}
		input(:placeholder='placeholder', :type='type', :required='required', :value='value', v-on='inputListeners')
		p.message._error(v-if='error') {{ error }}
</template>

<script>
export const INPUT_TYPES = [
	'color',
	'date',
	'datetime-local',
	'email',
	'file',
	'month',
	'number',
	'password',
	'tel',
	'text',
	'time',
	'url',
	'week',
	'search',
];

export default {
	computed: {
		inputListeners() {
			const vm = this;
			return {
				...this.$listeners,
				blur(e) { vm.$emit('blur', e); },
				focus(e) { vm.$emit('focus', e); },
				input(e) { vm.$emit('input', e.target.value); },
			};
		},
	},
	props: {
		error: String,
		label: {
			required: true,
			type: String,
		},
		placeholder: String,
		required: Boolean,
		type: {
			required: true,
			type: String,
			validator: prop => INPUT_TYPES.includes(prop),
		},
		value: String,
	},
};
</script>

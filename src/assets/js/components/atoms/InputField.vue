<template lang="pug">
	label.input_field(:class='{ _invalid: error }')
		span.input_field__label {{ label }}
		input(:placeholder='placeholder', :type='type', :required='required', :value='value', v-on='inputListeners')
		.input_field__error(v-if='error') {{ error }}
</template>

<script>
export default {
	computed: {
		inputListeners() {
			const vm = this;
			return {
				...this.$listeners,
				blur() { vm.$emit('blur'); },
				focus() { vm.$emit('focus'); },
				input(e) { vm.$emit('input', e.target.value); },
			};
		},
	},
	props: {
		error: String,
		label: String,
		placeholder: String,
		required: Boolean,
		type: String,
		value: String,
	},
};
</script>

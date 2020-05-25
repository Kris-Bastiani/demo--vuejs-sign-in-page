<template lang="pug">
	label.input_field(:class='{ _invalid: error }')
		span.input_field__label {{ label }}
		input(:placeholder='placeholder', :type='type', :value='value', @input="$emit('input', $event.target.value)")
		.input_field__error(v-if='error') {{ error }}
</template>

<script>
export default {
	props: {
		error: String,
		label: String,
		placeholder: String,
		type: String,
		value: String,
	},
};
</script>

<template lang="pug">
	label.input_field
		span.input_field__label {{ label }}
		input(:placeholder='placeholder', :type='type')
</template>

<script>
export default {
	props: {
		label: String,
		placeholder: String,
		type: String,
	},
};
</script>

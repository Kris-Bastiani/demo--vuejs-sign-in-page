<template lang="pug">
	button.submit_button(type='submit', :disabled='disabled')
			| {{ label }}
			span.ellipsis
			app-icon(type='chevron')
</template>

<script>
import AppIcon from '../atoms/AppIcon.vue';

export default {
	components: { AppIcon },
	props: {
		disabled: {
			default: false,
			type: Boolean,
		},
		label: String,
	},
};
</script>

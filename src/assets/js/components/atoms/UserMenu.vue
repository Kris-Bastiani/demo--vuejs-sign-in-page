<template lang="pug">
	button.user_menu
		img.avatar(src='/assets/images/avatar.png', alt='User Avatar')
		app-icon(type='chevron')
</template>

<script>
import AppIcon from '../atoms/AppIcon.vue';

export default {
	components: { AppIcon },
}
</script>

<style lang="scss">
	@import '../../../css/variables';

	.user_menu {
		align-items: center;
		display: flex;
		border: 0;
		padding: 0;
		background: none;
		cursor: pointer;

		.avatar {
			display: block;
			width: 2.5rem;
		}

		.icon {
			margin: 0 0 0 1rem;
			width: 1rem;
			color: $clr__mono_reg;
		}
	}
</style>

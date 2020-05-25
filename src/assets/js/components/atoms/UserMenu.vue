<template lang="pug">
	button.user_menu(@click='toggleIsOpen()' :class='{ _open: isOpen }')
		img.avatar(src='/assets/images/avatar.png', alt='User Menu')
		app-icon(type='chevron', role='presentation')
		ul.user_menu__options
			li: button(@click='signInOrOut()') Sign {{ currentUser ? 'out' : 'in' }}
</template>

<script>
import AppIcon from './AppIcon.vue';

export default {
	components: { AppIcon },
	data: () => ({
		currentUser: null,
		isOpen: false,
	}),
	methods: {
		signInOrOut() {
			if (!this.currentUser) {
				window.location = '/';
			} else {
				console.log('Signing out...');
			}
		},
		toggleIsOpen() { this.isOpen = !this.isOpen; },
	},
};
</script>

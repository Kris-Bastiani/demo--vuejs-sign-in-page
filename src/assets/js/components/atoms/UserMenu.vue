<template lang="pug">
	.user_menu(:class='{ _open: isOpen }', v-click-outside='onClickOutside')
		button.user_menu__button(@click='toggleIsOpen()')
			img.avatar(src='/assets/images/avatar.png', alt='User Menu')
			app-icon(type='chevron', role='presentation')
		ul.user_menu__options
			li: button(@click='signInOrOut()') Sign {{ currentUser ? 'out' : 'in' }}
</template>

<script>
import signOut from '../../helpers/signOut';
import AppIcon from './AppIcon.vue';

export default {
	components: { AppIcon },
	data() {
		return {
			currentUser: this.$root.$data.currentUser,
			isOpen: false,
		};
	},
	methods: {
		onClickOutside() { this.isOpen = false; },
		signInOrOut() {
			if (!this.currentUser) {
				window.location = '/';
			} else {
				signOut();
			}
		},
		toggleIsOpen() { this.isOpen = !this.isOpen; },
	},
};
</script>

<template lang="pug">
	button.user_menu
		img.avatar(src='/assets/images/avatar.png', alt='User Avatar')
		app-icon(type='chevron')
</template>

<script>
import AppIcon from './AppIcon.vue';

export default {
	components: { AppIcon },
};
</script>

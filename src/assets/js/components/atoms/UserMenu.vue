<template lang="pug">
	button.user_menu
		img.avatar(src='/assets/images/avatar.png', alt='User Menu')
		app-icon(type='chevron', role='presentation')
</template>

<script>
import AppIcon from './AppIcon.vue';

export default {
	components: { AppIcon },
};
</script>

<template lang="pug">
	app-page
		.container.dsp__flex.pad__sml.w_max__reg
			h1 Signed in as {{ currentUser && currentUser.email || 'no-one' }}
</template>

<script>
import AppPage from '../molecules/AppPage.vue';

export default {
	components: { AppPage },
	data() { return { currentUser: this.$root.$data.currentUser }; },
	created() { if (!this.currentUser) window.location = '/'; },
};
</script>

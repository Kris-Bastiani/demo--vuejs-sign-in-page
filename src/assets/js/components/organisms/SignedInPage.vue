<template lang="pug">
	app-page
		.container.dsp__flex.pad__sml.w_max__reg
			h1 Signed in as {{ user }}
</template>

<script>
import AppPage from '../molecules/AppPage.vue';

export default {
	components: { AppPage },
	data: () => ({ user: null }),
};
</script>

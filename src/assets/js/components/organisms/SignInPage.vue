<template lang="pug">
	app-page
		.container.dsp__flex.pad__sml.w_max__reg
			.w__half
				h1.mrg_b__lrg Sign In

				login-form

			img.w__half(src='/assets/images/login.png', alt='')
</template>

<script>
import AppPage from '../molecules/AppPage.vue';
import LoginForm from '../molecules/LoginForm.vue';

export default {
	components: {
		AppPage,
		LoginForm,
	},
};
</script>

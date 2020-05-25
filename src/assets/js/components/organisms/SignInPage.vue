<template lang="pug">
	app-page
		.container.flx_aln_y__center.pad__sml.w_max__reg
			.w__full.w__half__at_above_680
				h1.mrg_b__lrg Sign In

				login-form

			img.dsp__none__below_680.w__half(src='/assets/images/login.png', alt='')
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

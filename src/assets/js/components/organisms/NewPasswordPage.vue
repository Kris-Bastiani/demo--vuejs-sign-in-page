<template lang="pug">
	app-page
		.container.flx_aln_y__center.pad__sml.w_max__reg
			.w__full.w__half__at_above_680
				h1.mrg_b__lrg New password

				new-password-form

			img.dsp__none__below_680.w__half(src='/assets/images/reset_pwd.png', alt='', role='presentation')
</template>

<script>
import AppPage from '../molecules/AppPage.vue';
import NewPasswordForm from '../molecules/NewPasswordForm.vue';

export default {
	components: {
		AppPage,
		NewPasswordForm,
	},
};
</script>

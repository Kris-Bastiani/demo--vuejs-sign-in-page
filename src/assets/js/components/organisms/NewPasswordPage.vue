<template lang="pug">
	app-page
		.container.dsp__flex.pad__sml.w_max__reg
			.w__half
				h1.mrg_b__lrg New password

				new-password-form

			img.w__half(src='/assets/images/reset_pwd.png', alt='')
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

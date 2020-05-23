<template lang="pug">
	header.app_header.container.w_max__lrg
		a.logo(href='https://www.frankiefinancial.com/')
			img(src='/assets/images/logo.png', alt='Logo: Frankie')

		.dsp__flex
			a.h2(href='https://www.frankiefinancial.com/') About Frankie
			user-menu.mrg_l__sml
</template>

<script>
import UserMenu from '../atoms/UserMenu.vue';

export default {
	components: { UserMenu },
};
</script>

<template lang="pug">
	header.app_header.container.w_max__lrg
		a.logo(href='https://www.frankiefinancial.com/')
			img(src='/assets/images/logo.png', alt='Logo: Frankie')

		.flx_aln_y__center
			a.h2.dsp__none__below_480(href='https://www.frankiefinancial.com/') About Frankie
			user-menu.mrg_l__lrg
</template>

<script>
import UserMenu from '../atoms/UserMenu.vue';

export default {
	components: { UserMenu },
};
</script>

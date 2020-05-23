<template lang="pug">
	header.header.container.w_max__lrg
		a.logo(href='https://www.frankiefinancial.com/')
			img(src='/assets/images/logo.png', alt='Logo: Frankie')

		div
			a.h2(href='https://www.frankiefinancial.com/') About Frankie
</template>

<style lang="scss">
	.header {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto 5rem;
		padding: 1rem;

		.logo {
			&,
			> img { display: block; }

			> img { max-width: 13.5rem; }

			@media (max-width: 680px) {
				> img { max-width: 8rem; }
			}
		}
	}
</style>

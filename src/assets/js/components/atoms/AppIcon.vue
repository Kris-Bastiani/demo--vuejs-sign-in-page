<template lang="pug">
	svg.icon(xmlns='http://www.w3.org/2000/svg', :viewBox='viewBox')
		path(v-if="type === 'chevron'", fill='currentColor', d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z')
		path(v-if="type === 'crossCircle'", fill='currentColor', d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z')

</template>

<script>
export default {
	computed: {
		viewBox() {
			switch (this.type) {
			case 'chevron':
				return '0 0 448 512';
			case 'crossCircle':
				return '0 0 512 512';
			default:
				return '0 0 0 0';
			}
		},
	},
	props: {
		type: {
			required: true,
			type: String,
		},
	},
};
</script>

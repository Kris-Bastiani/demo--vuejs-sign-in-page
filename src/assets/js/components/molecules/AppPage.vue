<template lang="pug">
	div
		AppHeader
		slot
</template>

<script>
import AppHeader from './AppHeader.vue';

export default {
	components: { AppHeader },
}
</script>

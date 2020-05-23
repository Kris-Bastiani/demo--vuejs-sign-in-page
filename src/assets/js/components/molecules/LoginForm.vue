<template lang="pug">
	form
		input-field(label='Email:', placeholder='Enter email', type='email')

		input-field(label='Password:', placeholder='Enter password', type='password')

		a(href='/new-password.pug') Want to reset your password?

		input(type='submit', value='Login')
</template>

<script>
import InputField from '../atoms/InputField.vue';

export default {
	components: { InputField },
};
</script>

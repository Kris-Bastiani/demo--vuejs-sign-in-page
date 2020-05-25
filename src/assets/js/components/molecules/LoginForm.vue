<template lang="pug">
	form(title='login form')
		input-field(label='Email:', placeholder='Enter email', type='email')

		input-field(label='Password:', placeholder='Enter password', type='password')

		a.dsp__block.mrg_b__lrg(href='/new-password.pug') Want to reset your password?

		submit-button(label='Login')
</template>

<script>
import InputField from '../atoms/InputField.vue';
import SubmitButton from './SubmitButton.vue';

export default {
	components: {
		InputField,
		SubmitButton,
	},
};
</script>

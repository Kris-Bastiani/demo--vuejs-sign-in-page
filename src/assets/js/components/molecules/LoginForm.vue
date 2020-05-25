<template lang="pug">
	form(title='login form', @submit='e => signIn(e)')
		input-field(label='Email:', placeholder='Enter email', type='email', required, v-model='email')

		input-field(label='Password:', placeholder='Enter password', type='password', required, v-model='password')

		a.dsp__block.mrg_b__lrg(href='/new-password.pug') Want to reset your password?

		submit-button(label='Login')
</template>

<script>
import postData from '../../helpers/postData';
import InputField from '../atoms/InputField.vue';
import SubmitButton from './SubmitButton.vue';

export default {
	components: {
		InputField,
		SubmitButton,
	},
	data: () => ({
		email: '',
		password: '',
	}),
	methods: {
		signIn(e) {
			e.preventDefault();

			const { email, password } = this;

			postData('https://reqres.in/api/login', { email, password })
				.then(data => console.log('Success:', data))
				.catch(console.error);
		},
	},
};
</script>

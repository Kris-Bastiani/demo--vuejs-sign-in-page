<template lang="pug">
	form(title='login form', @submit='e => onSubmit(e)')
		input-field(
			label='Email:',
			placeholder='Enter email',
			type='email',
			required,
			v-model='email.value',
			@blur="e => onInputBlur(e, 'email')",
			:error='email.error',
		)

		input-field(
			label='Password:',
			placeholder='Enter password',
			type='password',
			required,
			v-model='password.value',
			@blur="e => onInputBlur(e, 'password')",
			:error='password.error',
		)

		a.dsp__inline-block.mrg_b__lrg(href='/new-password.pug') Want to reset your password?

		submit-button(label='Login')
</template>

<script>
import postData from '../../helpers/postData';
import validateInput from '../../helpers/validateInput';
import InputField from '../atoms/InputField.vue';
import SubmitButton from './SubmitButton.vue';

export default {
	components: {
		InputField,
		SubmitButton,
	},
	data: () => ({
		email: {
			error: null,
			value: '',
		},
		password: {
			error: null,
			value: '',
		},
	}),
	methods: {
		handleResponseError(error) {
			switch (error) {
			case 'Missing email or username':
				this.email.error = 'This field is required.';
				break;
			case 'Missing password':
				this.password.error = 'This field is required.';
				break;
			case 'user not found':
				this.email.error = "This user doesn't exist.";
				break;
			default:
				break;
			}
		},
		onInputBlur(e, field) {
			// eslint-disable-next-line security/detect-object-injection
			this[field].error = validateInput(e.target);
		},
		onSubmit(e) {
			e.preventDefault();

			postData('https://reqres.in/api/login', {
				email: this.email.value,
				password: this.password.value,
			})
				.then(data => (data.error ? this.handleResponseError(data.error) : console.log(data)))
				.catch(console.error);
		},
	},
};
</script>

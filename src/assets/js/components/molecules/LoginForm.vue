<template lang="pug">
	div
		p.message._success(v-show='signedIn') You have signed in successfully.
		form(title='login form', v-show='!signedIn', @submit='e => onSubmit(e)')
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

			submit-button(label='Login', :class='{ _in_progress: inProgress }', :disabled='canSubmit')
</template>

<script>
import handleLoginResponseError from '../../helpers/handleLoginResponseError';
import postData from '../../helpers/postData';
import validateInput from '../../helpers/validateInput';
import InputField from '../atoms/InputField.vue';
import SubmitButton from './SubmitButton.vue';

export default {
	components: {
		InputField,
		SubmitButton,
	},
	computed: {
		canSubmit() { return !(this.email.value.length && this.password.value.length); },
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
		inProgress: false,
		signedIn: false,
	}),
	methods: {
		onInputBlur(e, field) {
			// eslint-disable-next-line security/detect-object-injection
			this[field].error = validateInput(e.target);
		},
		onSubmit(e) {
			e.preventDefault();
			this.inProgress = true;

			const credentials = {
				email: this.email.value,
				password: this.password.value,
			};

			postData('https://reqres.in/api/login', credentials)
				.then(data => {
					if (data.error) {
						const { message, target } = handleLoginResponseError(data.error);
						// eslint-disable-next-line security/detect-object-injection
						this[target].error = message;
						return null;
					}

					const userData = {
						email: credentials.email,
						token: data.token,
					};
					return this.signIn(userData);
				})
				.catch(() => {
					this.email.error = 'There was a problem signing in. Please try again later.';
				})
				.finally(() => { this.inProgress = false; });
		},
		signIn(userData) {
			window.localStorage.setItem('user', JSON.stringify(userData));
			this.signedIn = true;
			window.location.reload();
		},
	},
	created() { if (this.$root.$data.currentUser) this.signedIn = true; },
};
</script>

<template lang="pug">
	form(title='new password form', @submit='e => onSubmit(e)')
		p.message._success(v-show='isSuccessful') Your password was successfully changed.

		input-field(
			label='New password:',
			placeholder='Enter new password',
			type='password',
			required,
			v-model='password.value',
			@blur="e => onInputBlur(e, 'password')",
			:error='password.error',
		)

		input-field.mrg_b__lrg(
			label='Confirm password:',
			placeholder='Confirm new password',
			type='password',
			required,
			v-model='confirmPassword.value',
			@blur="e => onInputBlur(e, 'confirmPassword')",
			:error='confirmPassword.error',
		)

		submit-button(label='Save', :class='{ _in_progress: inProgress }', :disabled='canSubmit')
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
	computed: {
		canSubmit() {
			const password = this.password.value;
			const confirmPassword = this.confirmPassword.value;
			return !(password.length && password === confirmPassword);
		},
	},
	data: () => ({
		email: 'eve.holt@reqres.in',
		password: {
			error: null,
			value: '',
		},
		confirmPassword: {
			error: null,
			value: '',
		},
		inProgress: false,
		isSuccessful: false,
	}),
	methods: {
		onInputBlur(e, field) {
			// eslint-disable-next-line security/detect-object-injection
			this[field].error = validateInput(e.target);
			if (field === 'confirmPassword' && this.password.value !== this.confirmPassword.value) {
				this.confirmPassword.error = 'These fields need to match.';
			}
		},
		onSubmit(e) {
			e.preventDefault();
			this.inProgress = true;
			this.isSuccessful = false;

			const credentials = {
				email: this.email,
				password: this.password.value,
			};

			postData('https://reqres.in/api/register', credentials)
				.then(() => { this.isSuccessful = true; })
				.catch(() => {
					this.password.error = 'There was a problem changing your password. Please try again later.';
				})
				.finally(() => { this.inProgress = false; });
		},
	},
	created() {
		const { currentUser } = this.$root.$data;
		if (currentUser) this.email = currentUser.email;
	},
};
</script>

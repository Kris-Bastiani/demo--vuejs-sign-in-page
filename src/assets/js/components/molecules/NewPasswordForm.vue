<template lang="pug">
	form(title='new password form')
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
import validateInput from '../../helpers/validateInput';
import InputField from '../atoms/InputField.vue';
import SubmitButton from './SubmitButton.vue';

export default {
	components: {
		InputField,
		SubmitButton,
	},
	computed: {
		canSubmit() { return !(this.password.value.length && this.confirmPassword.value.length); },
	},
	data: () => ({
		password: {
			error: null,
			value: '',
		},
		confirmPassword: {
			error: null,
			value: '',
		},
		inProgress: false,
	}),
	methods: {
		onInputBlur(e, field) {
			// eslint-disable-next-line security/detect-object-injection
			this[field].error = validateInput(e.target);
			if (field === 'confirmPassword' && this.password.value !== this.confirmPassword.value) {
				this.confirmPassword.error = 'These fields need to match.';
			}
		},
	},
};
</script>

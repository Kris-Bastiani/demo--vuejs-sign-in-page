<template lang="pug">
	form(title='new password form')
		input-field(label='New password:', placeholder='Enter new password', type='password', required)

		input-field.mrg_b__lrg(label='Confirm password:', placeholder='Confirm new password', type='password', required)

		submit-button(label='Save')
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

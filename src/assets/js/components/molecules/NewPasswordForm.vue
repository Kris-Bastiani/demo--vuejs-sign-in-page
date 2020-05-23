<template lang="pug">
	form
		input-field(label='New password:', placeholder='Enter new password', type='password')

		input-field.mrg_b__lrg(label='Confirm password:', placeholder='Confirm new password', type='password')

		input(type='submit', value='Save')
</template>

<script>
import InputField from '../atoms/InputField.vue';

export default {
	components: { InputField },
};
</script>

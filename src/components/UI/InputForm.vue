<template>
	<input 
        class="form-tel__input" 
        :value="modelValue"
        @input="updateInput"
        type="tel" 
        placeholder="Введите номер телефона"
    />
</template>

<script>
export default {
	name: 'input-form',
	props: {
        modelValue: [Number]
	},
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
    .form-tel__input{

    }
</style>

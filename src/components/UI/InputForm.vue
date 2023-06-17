<template>
	<input 
        class="form-tel__input" 
        :value="modelValue"
        @input="updateInput"
        @inputName="updateInputName"
        @inputDate="updateInputDate"
        @inputEmail="updateInputEmail"
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
        },
        updateInputName(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        updateInputSurn(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        updateInputDate(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        updateInputEmail(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    }
}
</script>

<style scoped lang="scss">
.form-tel__input{
    width: 280px;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    font-family: Sylfaen;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-tel__input::placeholder {
    color: #212529;
    opacity: 0.4;
}
</style>

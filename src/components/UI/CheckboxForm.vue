<template>
	<input 
        :checked="modelChecked"
        @change="updateCheckbox"
    />
</template>

<script>
export default {
	name: 'checkbox-form',
	props: {
        modelChecked: [Boolean]
	},
    methods: {
        updateCheckbox(event) {
            this.$emit('change:modelChecked', event.target.checked)
        }
    }
}
</script>

<style scoped lang="scss">
</style>

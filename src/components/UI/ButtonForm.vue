<template>
	<button class="form-profile__btn" type="submit">
        <slot></slot>
    </button>
</template>

<script>
export default {
	name: 'button-form',
}
</script>

<style scoped lang="scss">
    .form-profile__btn{
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
        cursor: pointer;
    }
</style>

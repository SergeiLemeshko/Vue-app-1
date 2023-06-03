<template>
        <div class="slider-item">
            <img :src="require('@/assets/images/' + SliderItem.img)" alt="img_slider">
        </div>
</template>

<script>

export default {
	name: "SliderItem",
	components: {

	},
	props: {
        SliderItem: {
            type: Object,
            default: () => {}
        }
    },
}
</script>

<style lang="scss">
.slider-item {
    width: 300px;
    height: 600px;
}
</style>

<template>
        <div class="slider-item">
            <img :src="require('@/assets/images/' + SliderItem.img)" alt="img_slider">
            <p>{{ SliderItem.title }}</p>
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
$font: 1.7em;
$font-family: Sylfaen;

.slider-item {
    width: 700px;
    height: 700px;

    & p {
        padding-top: 25px;
        text-align: justify;
        font-family: $font-family;
        text-indent: 30px;
    }
}
</style>

<template>
    <div class="slider-item">
        <img :src="require('@/assets/images/' + SliderItem.img)" alt="img_slider">
        <p>{{ SliderItem.title }}</p>
    </div>
</template>

<script>
export default {
	name: "SliderItem",

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

    & p {
        padding-top: 25px;
        text-align: justify;
        font-family: $font-family;
        text-indent: 30px;
    }
}
@media (max-width: 992px) {
    .slider-item {
        width: 600px;
    }
}
@media (max-width: 767px) {
    .slider-item {
        width: 500px;
    }
}
@media (max-width: 480px) {
    .slider-item {
        width: 450px;
    }
}
@media (max-width: 992px) {
    img {
        width: 600px;
    }
}
@media (max-width: 767px) {
    img {
        width: 500px;
    }
}
@media (max-width: 480px) {
    img {
        width: 450px;
    }
}
</style>

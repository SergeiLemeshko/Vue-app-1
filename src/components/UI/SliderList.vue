<template>
    <div class="wrapper-slider">
        <div class="slider-list" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"> 
            <slider-item 
                v-for="item in SliderData"
                :key="item.id"
                :SliderItem="item"
            />
        </div>
        <!-- <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button> -->
    </div>
</template>

<script>
import SliderItem from '@/components/UI/SliderItem.vue';

export default {
	name: "slider-list",
	components: {
        SliderItem
	},
	props: {
        // массив картинок слайдера
        SliderData: {
            type: Array,
            default: () => []
        },
        // интервал для проигрывания слайдера
        interval: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            // устанавливаю индекс слайдера
            currentSlideIndex: 0
        }
    },
    methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            if( this.currentSlideIndex >= this.SliderData.length - 1) {
                this.currentSlideIndex = 0;
            } else {
                this.currentSlideIndex++
            }
        }
    },
    mounted() {
        if(this.interval > 0) {
            // определяю контекст, чтобы в SetInterval можно было вызвать nextSlide()
            let vm = this;
            setInterval(function () {
                vm.nextSlide()
            }, vm.interval)
        } 
    }
}
</script>

<style scoped lang="scss">
.wrapper-slider {
    max-width: 700px;
    overflow: hidden;
    margin: 0 auto;
}
.slider-list {
    margin-top: 200px;
    display: flex;
    transition: all ease .5s;
}
</style>

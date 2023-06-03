<template>
	<section class="container">
		<div>
			<slider-list
				:SliderData="sliderItems"
				:interval="2000"
			/>
		</div>
	</section>
</template>

<script>
import SliderList from '@/components/UI/SliderList.vue';

export default {
	name: "HomeCompany",
	components: {
		SliderList
	},
	data() {
		return {
			sliderItems: [
				{id: 1, name: 'img1', img: '1.jpg'},
				{id: 2, name: 'img2', img: '2.jpg'},
				{id: 3, name: 'img3', img: '3.jpg'},
				{id: 4, name: 'img4', img: '4.jpg'},
				{id: 5, name: 'img5', img: '5.jpg'},
			]
		}
	},
}
</script>

<style lang="scss">

</style>

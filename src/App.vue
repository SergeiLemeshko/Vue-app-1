<template>
	<div class="wrapper">
		<div class="container">
			<nav-page></nav-page>
			<router-link to="/"></router-link>
			<router-link to="/form"></router-link>
			<router-link to="/about"></router-link>
			<router-link to="/employees"></router-link>
			<router-view />
		</div>	
	</div>
</template>

<script>
import NavPage from '@/components/NavPage.vue'

export default {
	components: {
		NavPage
	}
}

</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.wrapper{
	max-width: 100%;
	height: 900px;
	background-color: rgb(99, 129, 129);
}
.container{
	position: relative;
	max-width: 1400px;
	height: 900px;
	display: flex;
	margin: 0 auto;
	align-items: center;
	background-color: rgb(58, 199, 199);
}

</style>

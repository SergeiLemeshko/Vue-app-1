<template>
	<div class="wrapper">
		<nav-page></nav-page>
		<div class="container">
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
	height: 100%;
	background: rgb(247,243,243);
background: linear-gradient(90deg, rgba(247,243,243,1) 0%, rgba(244,240,247,1) 76%, rgba(241,237,240,1) 100%);
}
.container{
	position: relative;
	max-width: 1400px;
	min-height: 900px;
	display: flex;
	margin: 0 auto;
	align-items: center;
}

</style>

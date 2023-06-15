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
	width: 100%;
	height: 100%;
	background: rgb(247,243,243);
	background: linear-gradient(90deg, rgba(247,243,243,1) 0%, rgba(244,240,247,1) 76%, rgba(241,237,240,1) 100%);
}
@media (max-width: 992px) {
    .wrapper {
		width: 992px;
    }
}
@media (max-width: 767px) {
    .wrapper {
		width: 767px;
    }
}
@media (max-width: 480px) {
    .wrapper {
		min-width: 480px;
    }
}
.container{
	position: relative;
	max-width: 1300px;
	height: 100%;
	margin: 0 auto;
}
</style>

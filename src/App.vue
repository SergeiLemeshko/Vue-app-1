<template>
	<div>
		<nav-page></nav-page>
		<router-link to="/"></router-link>
		<router-link to="/form"></router-link>
		<router-link to="/about"></router-link>
		<router-link to="/employees"></router-link>
		<router-view />
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

#app {}
</style>

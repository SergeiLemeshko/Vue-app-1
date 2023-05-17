<template>
	<div class="nav nav-fixed">
		<!--кнопки навбара -->
		<button-nav @click="$router.push('/')"><span>Главная</span></button-nav>
		<button-nav @click="$router.push('/form')"><span>Присоединится</span></button-nav>
		<button-nav @click="$router.push('/about')"><span>О компании</span></button-nav>
		<button-nav @click="$router.push('/employees')"><span>Cотрудники</span></button-nav>
	</div>
</template>

<script>
import ButtonNav from '@/components/UI/ButtonNav.vue';

export default {
	name: 'NavPage',
	components: {
		ButtonNav,
	},
	props: {

	}
}
</script>

<style scoped lang="scss">
.nav {
	position: absolute;
	top: 0px;
	background: rgb(197, 241, 241);
	height: 80px;
	width: 100%;
	display: flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
}

.nav-fixed{
	position: fixed;
	top: 0; 
	max-width: inherit;
	z-index: 10;
}
</style>

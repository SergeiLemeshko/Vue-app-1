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
	}
}
</script>

<style scoped lang="scss">
.nav {
	position: absolute;
	top: 0px;
	background-color: rgb(255, 255, 255);
	height: 90px;
	width: 100%;
	display: flex;
	padding: 0px 15px;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #d4e7e0;
	-webkit-box-shadow: 0px 10px 30px -13px rgba(34, 60, 80, 0.41);
	-moz-box-shadow: 0px 10px 30px -13px rgba(34, 60, 80, 0.41);
	box-shadow: 0px 10px 30px -13px rgba(34, 60, 80, 0.41);
}
.nav-fixed{
	position: fixed;
	top: 0; 
	max-width: inherit;
	z-index: 10;
}
</style>

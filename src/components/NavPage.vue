<template>
	<div class="nav">
		<div class="nav__btns">
			<!--кнопки навбара -->
			<button @click="$router.push('/')"><span>Главная</span></button>
			<button @click="$router.push('/form')"><span>Присоединится</span></button>
			<button @click="$router.push('/about')"><span>О компании</span></button>
			<button @click="$router.push('/employees')"><span>Наши сотрудники</span></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavPage',
	props: {

	}
}
</script>

<style scoped lang="scss">
.nav {
	background: rgba(109, 221, 236, 0.719);
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.nav__btns {
	& button {
		width: 130px;
		height: 40px;
		margin-right: 15px;
		border-radius: 5px;
		background-color: #1853d1;
		cursor: pointer;
		box-shadow: 0 3px 0 #0795bd;
		transition: background-color 0.5s ease 0s;

		@media (max-width: 767px) {}

		&:hover {
			background-color: #1e6074;
		}

		&:active {
			top: 2px;
			box-shadow: 0 2px 0 #254d58;
		}

		& span {
			color: #FFFFFF;
			letter-spacing: 0.01rem;
		}
	}

	& button:last-child {
		margin-right: 0px;
	}
}
</style>

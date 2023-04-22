<template>
	<!--форма 1 -->
	<form class="form-tel" action="" method="GET">
		<input class="form-tel__input" type="tel" placeholder="Введите номер телефона">
		<button class="form-tel__btn" type="submit"><span>Получить код</span></button>
		<p class="form-tel__confirm">“Смс с кодом подтверждения отправлено”</p>
		<input class="form-tel__password" type="password" placeholder="Введите код из смс">
	</form>
	<!--форма 2 -->
	<form class="form-profile" action="" method="GET">
		<p class="form-profile__request">Пожалуйста, заполните анкету:</p>
		<input class="form-profile__name" type="text" placeholder="Введите имя">
		<input class="form-profile__surname" type="text" placeholder="Введите фамилию"> 
		<p class="form-profile__gender">Выберите ваш пол</p>
		<input class="form-profile__masculine" id="masculine" type="radio" name="question">
		<label for="masculine">Муж.</label>

		<input class="form-profile__female" id="female" type="radio" name="question">
		<label for="female">Жен.</label>
		<p class="form-profile__birthday">Дата рождения</p>
		<input type="date" />
		<input class="form-profile__email" type="email" placeholder="Введите e-mail">

		<p class="form-profile__accord">Я согласен с условиями программы лояльности и обработки данных.</p>
		<input type="checkbox">
		<div class="form-profile__btns">
			<button class="form-profile__btns-apple" type="submit"><span>Добавить в Apple Wallet</span></button>
			<button class="form-profile__btns-google" type="submit"><span>Добавить в Google Pay</span></button>
		</div>
	</form>
</template>

<script>

export default {
	name: "FormCompany",
}

</script>

<style scoped lang="scss">
/*первая форма*/
.form-tel {
	background-color: rgb(224, 228, 172);
	width: 300px;
	height: 120px;
}

.form-tel__input {
	display: block;

}

.form-tel__btn {}

.form-tel__confirm {}

.form-tel__password {}

/*вторая форма*/
.form-profile {
	background-color: rgb(228, 172, 225);
	width: 300px;
	height: 200px;
}

.form-profile__request {}

.form-profile__name {
	display: block;
}

.form-profile__surname {}

.form-profile__gender {}

.form-profile__masculine {}

.form-profile__female {}

.form-profile__birthday {}

.form-profile__email {
	display: block;

}

.form-profile__accord {}

.form-profile__btns {}

.form-profile__btns-apple {}

.form-profile__btns-google {}
</style>

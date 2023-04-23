<template>
	<!--форма 1 -->
	<form class="form-tel" action="" method="GET" v-show="!isHideForm1">
		<div v-if="!isHidePartForm1">
			<input class="form-tel__input" v-model="inpValue" type="tel" placeholder="Введите номер телефона">
			<button class="form-tel__btn" @click="changeFormTel" type="submit"><span>Получить код</span></button>
		</div>
			<p class="form-tel__confirm" v-if="isHideTel">“Смс с кодом подтверждения отправлено”</p>
			<input class="form-tel__password" v-model="inpValuePass" v-if="isHidePass" type="password" placeholder="Введите код из смс">
			<p class="form-tel__sms" v-if="isHideSMS">А вот и ваш пароль из SMS: {{ this.randomNum }}</p>		
	</form>
	<!--форма 2 -->
	<form class="form-profile" isHide="false" action="" method="GET" v-show="isHideForm2">
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
	props: {
			isHideForm1: Boolean,
			isHidePartForm1: Boolean,
			isHideForm2: Boolean,
			isHideTel: Boolean,
			isHidePass: Boolean,
			randomNum: Number,
			inpValue: Number,
			isHideSMS: Boolean,
			inpValuePass: Number,
	},
	data() {
		return {
			isHideForm1: false,
			isHidePartForm1: false,
			isHideForm2: false,
			isHideTel: false,
			isHidePass: false,
			randomNum: 0,
			inpValue: 0,
			isHideSMS: false,
			inpValuePass: 0,
		}
	},
	methods: {
		changeFormTel() {
			this.findInpValue();
			this.isHidePartForm1 = true;
			this.isHideTel = true;
			setTimeout(() => {
			this.isHideTel = false;
			this.isHidePass = true; 
			this.isHideSMS = true;
		}, 2000 );
	},
		findInpValue(min, max) {
			min = this.inpValue[2] + this.inpValue[3];
			max = this.inpValue[1] + this.inpValue[4];
			return this.randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		},
	}
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

.form-tel__sms{}

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

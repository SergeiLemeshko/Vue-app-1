<template>
	<section class="form">
		<!--форма 1 -->
		<form class="form-tel" action="" method="GET" v-show="!isHideForm1">
			<h1>Введите номер телефона</h1>
			<p class="form-tel__phone-warn" v-show="warnPhone">Введите корректный номер телефона</p>
			<div class="form-tel__hide" v-if="!isHidePartForm1">
				<input-form
					:model-value="searchQuery"
					@update:model-value="setSearchQuery"
					:class="{ 'active__inp': isActivePhone }" 
					type="tel" 
					placeholder="Введите номер телефона"
				/>
				<button class="form-tel__btn btn-tel" @click="changeFormTel" type="submit"><span>Получить код</span></button>
			</div>
			<p class="form-tel__confirm" v-if="isHideTel">Смс с кодом подтверждения отправлено</p>
				<input-form  
					:model-value="searchQuery"
					@update:model-value="setSearchQuery"  
					v-if="isHidePass" 
					@match="matchNumbers"
					type="password" 
					placeholder="Введите код из смс"
				/>
			<p class="form-tel__sms" v-if="isHideSMS">А вот и ваш пароль из SMS: {{ this.randomNum }}</p>		
		</form>
		<!--форма 2 -->
		<form class="form-profile" isHide="false" action="" method="GET" v-show="isHideForm2">
			<p class="form-profile__request">Пожалуйста, заполните анкету:</p>
				<input-form 
					:model-value="formValidationName"
					@update:model-value="setFormValidationName"
					:class="{ 'active__inp': isActiveName }"
					type="text" 
					placeholder="Введите имя" 
				/>
				<input-form
					:model-value="formValidationSurn"
					@update:model-value="setFormValidationSurn"
					:class="{ 'active__inp': isActiveSurn }"
					type="text" 
					placeholder="Введите фамилию"
				/> 
			<p class="form-profile__gender">Выберите ваш пол</p>
			<div class="radio">
				<input 
					class="form-profile__masculine" 
					id="masculine" 
					type="radio" 
					value="Муж."
					v-model="picked">
				<label class="form-profile__masculine-label"  for="masculine">Муж.</label>
			</div>
			<div class="radio">
				<input 
					class="form-profile__female" 
					id="female" 
					type="radio" 
					value="Жен."
					v-model="picked">
				<label class="form-profile__female-label" for="female">Жен.</label>
			</div>
			<p class="form-profile__birthday">Дата рождения</p>
			<p class="form-profile__birthday-warn" v-show="warnBirthday">Введите дату рождения</p>
			<p class="form-profile__birthday-warn1" v-show="warnBirthdayMore">Вам ещё не исполнилось 18 лет</p>
				<input-form 
					class="date"
					type="date" 
					:model-value="formValidationDate"
					@update:model-value="setFormValidationDate"
					:class="{ 'active__inp': isActiveDate }"
				/>
				<input-form
					:model-value="formValidationEmail"
					@update:model-value="setFormValidationEmail"
					:class="{ 'active__inp': isActiveEmail }"
					type="email" 
					placeholder="Введите e-mail"
				/>
			<p class="form-profile__accord">Я согласен с условиями обработки данных.</p>
			<p class="form-profile__checkbox-warn" v-show="warnCheckbox">Поставьте галочку</p>
				<checkbox-form
					:model-value="checked"
					@change:model-checked="setCheckbox"
					@check="trackingChecked"
					type="checkbox" 
					id="checkbox" 
				/>
				<button class="form-profile__ok" @click.prevent="validAndSendForm"><span>Отправить</span></button>
		</form>
		<div class="form-profile__btns" v-show="isHideBtns">   
			<button class="form-profile__apple"><span>Добавить в Apple Wallet</span></button>
			<button class="form-profile__google"><span>Добавить в Google Pay</span></button>
		</div>
	</section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import InputForm from '@/components/UI/InputForm.vue';
import ButtonForm from '@/components/UI/ButtonForm.vue';
import CheckboxForm from '@/components/UI/CheckboxForm.vue';

export default {
	name: "FormCompany",
	components: {
		InputForm,
		ButtonForm,
		CheckboxForm,
	},
	props: {
	},
	data() {
		return {
		}
	},
	methods: {
		...mapMutations({
			setHideForm1: 'forms/setHideForm1',
			setHideForm2: 'forms/setHideForm2',
			setHidePartForm1: 'forms/setHidePartForm1', 
			setHideTel: 'forms/setHideTel',
			setHidePass: 'forms/setHidePass',
			setCheckbox: 'forms/setChecked',
			setHideSms: 'forms/setHideSms',
			setRandomNum: 'forms/setRandomNum',
			setInpValuePass: 'forms/setInpValuePass',
			setSearchQuery: 'forms/setSearchQuery',
			setHideBtns: 'forms/setHideBtns',
			setFormValidationName: 'forms/setFormValidationName',
			setFormValidationSurn: 'forms/setFormValidationSurn',
			setActiveName: 'forms/setActiveName',
			setActiveSurn: 'forms/setActiveSurn',
			setActiveDate: 'forms/setActiveDate',
			setActiveEmail: 'forms/setActiveEmail',
			setFormValidationDate: 'forms/setFormValidationDate',
			setWarnBirthday: 'forms/setWarnBirthday',
			setWarnPhone: 'forms/setWarnPhone',
			setWarnBirthdayMore: 'forms/setWarnBirthdayMore',
			setWarnCheckbox: 'forms/setWarnCheckbox',
			setFormValidationEmail: 'forms/setFormValidationEmail',
			setFormDate: 'forms/setFormDate',
		}),
		...mapActions({
			validAndSendForm: 'forms/validAndSendForm',			
		}),
	},
	computed: {
		...mapState({
			isHideForm1: state => state.forms.isHideForm1,
			isHideForm2: state => state.forms.isHideForm2,
			isHidePartForm1: state => state.forms.isHidePartForm1,
			isHideTel: state => state.forms.isHideTel,
			isHidePass: state => state.forms.isHidePass,
			isHideSMS: state => state.forms.isHideSMS,
			checked: state => state.forms.checked,
			randomNum: state => state.forms.randomNum,
			inpValuePass: state => state.forms.inpValuePass,
			searchQuery: state => state.forms.searchQuery,
			isHideBtns: state => state.forms.isHideBtns,
			formValidationName: state => state.forms.formValidationName,
			formValidationSurn: state => state.forms.formValidationSurn,
			isActivePhone: state => state.forms.isActivePhone,
			isActiveName: state => state.forms.isActiveName,
			isActiveSurn: state => state.forms.isActiveSurn,
			isActiveDate: state => state.forms.isActiveDate,
			isActiveEmail: state => state.forms.isActiveEmail,
			formValidationDate: state => state.forms.formValidationDate,
			warnBirthday: state => state.forms.warnBirthday,
			warnPhone: state => state.forms.warnPhone,
			warnBirthdayMore: state => state.forms.warnBirthdayMore,
			warnCheckbox: state => state.forms.warnCheckbox,
			formValidationEmail: state => state.forms.formValidationEmail,
			formData: state => state.forms.formData,
		}),
		...mapGetters({
			changeFormTel: 'forms/changeFormTel',
			matchNumbers: 'forms/matchNumbers',
			trackingChecked: 'forms/trackingChecked',
		}),
	}
}
</script>

<style scooped lang="scss">
$font: 1.7em;
$font-family: Sylfaen;

.form {
	padding-top: 280px;
}
/*первая форма*/
.form-tel {
	width: 500px;
	min-height: 280px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding: 50px 20px 20px 20px;
	background-color: rgb(245, 243, 243);
	border-radius: 20px;
	-webkit-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	-moz-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);

	& h1{
		font-family: $font-family;
		text-transform: uppercase;
		color: #212529;
		margin-bottom: 35px;
		font-size: $font;
	}
}
//Форма, которую скрываем
.form-tel__hide {
	display: flex;
	flex-direction: column;
	align-items: center;
}
//Кнопки
.form-tel__btn, .form-profile__ok {
	position: relative;
	display: inline-block;
	font-size: 1em;
	font-weight: 500;
	color: rgb(245, 245, 245);
	text-decoration: none;
	text-shadow: 0 -1px 2px rgba(0,0,0,.2);
	padding: .5em 1em;
	outline: none;
	margin-top: 1em;
	border-radius: 3px;
	background: linear-gradient(rgb(83, 186, 218), rgb(34, 113, 145)) rgb(110,112,120);
	box-shadow:	0 1px rgba(255,255,255,.2) inset,
				0 3px 3px rgba(0, 0, 0, 0.5),
				0 0 1px 1px rgba(0,1,6,.2);
	transition: .2s ease-in-out;
	border: none;

	& span{
		font-family: $font-family;
		letter-spacing: 0.1em;
	}
}
.form-tel__btn:hover:not(:active) {
	background: linear-gradient(rgb(68, 181, 247), rgb(59, 167, 175)) rgb(93, 93, 199);
}
.form-tel__btn:active {
	top: 1px;
	background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
	box-shadow: 0 0 1px rgba(0,0,0,.5) inset,
				0 2px 3px rgba(0,0,0,.5) inset,
				0 1px 1px rgba(255,255,255,.1);
}
.form-profile__ok:hover:not(:active) {
	background: linear-gradient(rgb(68, 181, 247), rgb(59, 167, 175)) rgb(93, 93, 199);
}
.form-profile__ok:active {
	top: 1px;
	background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
	box-shadow: 0 0 1px rgba(0,0,0,.5) inset,
				0 2px 3px rgba(0,0,0,.5) inset,
				0 1px 1px rgba(255,255,255,.1);
}
//Код отправлен
.form-tel__confirm {
	font-family: $font-family;
	text-transform: uppercase;
	color: #212529;
	margin-bottom: 30px;
	font-size: 0.8em;
}
//Пароль из смс
.form-tel__sms{
	font-family: $font-family;
	text-transform: uppercase;
	color: #212529;
	margin: 10px 0px;
	font-size: 1em;
}
/*вторая форма*/
.form-profile {
	width: 500px;
	min-height: 530px;
	background-color: rgb(245, 243, 243);
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding: 20px 20px 20px 20px;
	border-radius: 20px;
	-webkit-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	-moz-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
}
//Заполните анкету
.form-profile__request {
	font-family: $font-family;
	text-transform: uppercase;
	color: #212529;
	margin-bottom: 15px;
	font-size: 1.2em;
}
.form-profile__gender {
	font-family: $font-family;
	text-transform: uppercase;
	color: #212529;
	margin-bottom: 10px;
	font-size: 0.9em;
}
.form-profile__masculine-label{
	margin-left: 10px;
	font-family: $font-family;
}
.form-profile__female-label {
	font-family: $font-family;
	margin-left: 11px;
}
//Дата рождения
.form-profile__birthday {
	margin: 10px 0px;
	font-family: $font-family;
	text-transform: uppercase;
	color: #212529;
	font-size: 0.8em;
}
//Стили предупреждений
.form-profile__birthday-warn, .form-profile__birthday-warn1, .form-profile__checkbox-warn, .form-tel__phone-warn {
	font-family: $font-family;
	text-transform: uppercase;
	color: #be185d;
	margin-bottom: 10px;
	font-size: 1em;
}
//Согласие обработки
.form-profile__accord {
	font-family: $font-family;
	text-transform: uppercase;
	color: #212529;
	margin-bottom: 10px;
	font-size: 0.9em;
}
//Подсветка инпутов
.active__inp {
	background-color: rgba(209, 12, 12, 0.13); 
	border: 2px solid rgb(196, 44, 44);
}
//Цвет иконки календаря
.date::-webkit-calendar-picker-indicator {
    filter: invert(0.6);
}
//Цвет дд.мм.гг
.date::-webkit-datetime-edit {
    color: #aca9a9;
}
//Кнопки Apple Google
.form-profile__btns{
	width: 500px;
	min-height: 430px;
	background-color: rgb(245, 243, 243);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 20px 20px 20px 20px;
	border-radius: 20px;
	-webkit-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	-moz-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
}
.form-profile__apple, .form-profile__google{
	font-size: 1em;
	font-weight: 700;
	color: rgb(248, 243, 243);
	text-decoration: none;
	text-shadow: 0 -1px 2px rgba(0,0,0,.2);
	padding: 2em 2em;
	outline: none;
	cursor: pointer;
	border-radius: 15px;
	background: linear-gradient(rgb(124, 143, 219), rgb(127, 186, 214)) rgb(113, 127, 182);
	box-shadow:	0 1px rgba(255,255,255,.2) inset,
				0 3px 5px rgba(0,1,6,.5),
				0 0 1px 1px rgba(0,1,6,.2);
	transition: .2s ease-in-out;
	border: none;

	& span{
		font-family: $font-family;
		letter-spacing: 0.1em;
	}
}
.form-profile__apple:hover:not(:active) {
	background: linear-gradient(rgb(154, 154, 233), rgb(70, 148, 194)) rgb(126,126,134);
}
.form-profile__apple:active {
	top: 1px;
	background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
	box-shadow: 0 0 1px rgba(0,0,0,.5) inset,
				0 2px 3px rgba(0,0,0,.5) inset,
				0 1px 1px rgba(255,255,255,.1);
}
.form-profile__google:hover:not(:active) {
	background: linear-gradient(rgb(154, 154, 233), rgb(70, 148, 194)) rgb(126,126,134);
}
.form-profile__google:active {
	top: 1px;
	background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82);
	box-shadow: 0 0 1px rgba(0,0,0,.5) inset,
				0 2px 3px rgba(0,0,0,.5) inset,
				0 1px 1px rgba(255,255,255,.1);
}
.form-profile__apple {
	margin-bottom: 40px;
}
.form-profile__google{
	padding: 2em 2.4em;
}
</style>
<template>
	<!--форма 1 -->
	<form class="form-tel" action="" method="GET" v-show="!isHideForm1">
		<p class="form-tel__phone-warn" v-show="warnPhone">Введите корректный номер телефона</p>
		<div v-if="!isHidePartForm1">
			<input-form
				:model-value="searchQuery"
				@update:model-value="setSearchQuery"
				:class="{ 'active__inp': isActivePhone }" 
				type="tel" 
				placeholder="Введите номер телефона"
			/>
			<button class="form-tel__btn" @click="changeFormTel" type="submit"><span>Получить код</span></button>
		</div>
		<p class="form-tel__confirm" v-if="isHideTel">“Смс с кодом подтверждения отправлено”</p>
			<input-form  
				:model-value="searchQuery"
				@update:model-value="setSearchQuery"  
				v-if="isHidePass" 
				@match="matchNumbers"
				type="password" 
				placeholder="Введите код из смс"
			/>
		<p class="form-tel__sms" v-if="isHideSMS">А вот и ваш пароль из SMS:{{ this.randomNum }}</p>		
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
			<input 
				class="form-profile__masculine" 
				id="masculine" 
				type="radio" 
				value="Муж."
				v-model="picked">
			<label for="masculine">Муж.</label>
			<input 
				class="form-profile__female" 
				id="female" 
				type="radio" 
				value="Жен."
				v-model="picked">
			<label for="female">Жен.</label>
		<p class="form-profile__birthday">Дата рождения</p>
		<p class="form-profile__birthday-warn" v-show="warnBirthday">Введите дату рождения</p>
		<p class="form-profile__birthday-warn1" v-show="warnBirthdayMore">Вам ещё не исполнилось 18 лет</p>
			<input-form 
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
		<p class="form-profile__accord">Я согласен с условиями программы лояльности и обработки данных.</p>
		<p class="form-profile__checkbox-warn" v-show="warnCheckbox">Поставьте галочку</p>
			<checkbox-form
				:model-value="checked"
				@change:model-checked="setCheckbox"
				@check="trackingChecked"
				type="checkbox" 
				id="checkbox" 
			/>
			<button class="form-profile__ok" @click.prevent="validAndSendForm"><span>ОК</span></button>
	</form>
	<div class="form-profile__btns" v-show="isHideBtns">   
			<button class="form-profile__apple"><span>Добавить в Apple Wallet</span></button>
			<button class="form-profile__google"><span>Добавить в Google Pay</span></button>
		</div>
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
			setFormArray: 'forms/setFormArray',
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

<style scoped lang="scss">
/*первая форма*/
.form-tel__phone-warn {

}
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

.form-profile__birthday-warn {}

.form-profile__birthday-warn1 {}
.form-profile__email {
	display: block;
}
.form-profile__accord {}
.form-profile__checkbox-warn{}
.form-profile__ok {}
.form-profile__apple {}
.form-profile__google {}

.active__inp {
	background-color: rgb(12, 209, 150); 
    color: rgb(0, 250, 75);
}
</style>
<template>
	<!--форма 1 -->
	<form class="form-tel" action="" method="GET" v-show="!isHideForm1">
		<div v-if="!isHidePartForm1">
			<input-form
				:model-value="searchQuery"
				@update:model-value="setSearchQuery"
				type="tel" 
				placeholder="Введите номер телефона"
			/>
			<button class="form-tel__btn" @click="changeFormTel" type="submit"><span>Получить код</span></button>
		</div>
		<p class="form-tel__confirm" v-if="isHideTel">“Смс с кодом подтверждения отправлено”</p>
			<input-form  
				v:model-value="searchQuery"
				@update:model-value="setSearchQuery" 
				v-if="isHidePass" 
				type="password" 
				placeholder="Введите код из смс"
			/>
		<p class="form-tel__sms" v-if="isHideSMS">А вот и ваш пароль из SMS: {{ this.randomNum }}</p>		
	</form>
	<!--форма 2 -->
	<form class="form-profile" isHide="false" action="" method="GET" v-show="isHideForm2">
		<p class="form-profile__request">Пожалуйста, заполните анкету:</p>
			<input-form  
				type="text" 
				placeholder="Введите имя"
			/>
			<input-form 
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
			<input type="date" />
			<input-form 
				class="form-profile__email" 
				type="email" 
				placeholder="Введите e-mail"
			/>
		<p class="form-profile__accord">Я согласен с условиями программы лояльности и обработки данных.</p>
			<input type="checkbox" id="checkbox" v-model="checked" />
			<label for="checkbox">{{ checked }}</label>
		<div class="form-profile__btns">   
			<button-form><span>Добавить в Apple Wallet</span></button-form>
			<button-form><span>Добавить в Google Pay</span></button-form>
		</div>
	</form>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import InputForm from '@/components/UI/InputForm.vue';
import ButtonForm from '@/components/UI/ButtonForm.vue';


export default {
	name: "FormCompany",
	components: {
		InputForm,
		ButtonForm,
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
			setHideSms: 'forms/setHideSms',
			setRandomNum: 'forms/setRandomNum',
			setInpValuePass: 'forms/setInpValuePass',
			setSearchQuery: 'forms/setSearchQuery',
		}),
		...mapActions({
			
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
			randomNum: state => state.forms.randomNum,
			inpValuePass: state => state.forms.inpValuePass,
			searchQuery: state => state.forms.searchQuery,
		}),
		...mapGetters({
			changeFormTel: 'forms/changeFormTel',
		})
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

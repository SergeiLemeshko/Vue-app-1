<template>
    <section class="grid">
    <h1>Наши сотрудники:</h1>
        <div class="grid__container">
            <div v-for="employee in employeesList" class="employee"
                :key="employee.id"
                :employee="employee.title">
                    <img :src=employee.avatar>
                    <div><strong>Name:</strong> {{ employee.first_name }}</div>
                    <div><strong>Surname:</strong> {{ employee.last_name }}</div>
                    <div><strong>Email:</strong> {{ employee.email }} </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name: 'EmployeeList',
data() {
    return {

	}
},
    methods: {
        ...mapActions({
            getEmployeesList: 'employee/getEmployeesList',			
        }),
        ...mapMutations({
            setEmployeesList: 'employee/setEmployeesList',
        }),
    },
	computed: {
		...mapState({
			employeesList: state => state.employee.employeesList,
		}),
		...mapGetters({
			employeesList: 'employee/employeesList',
		}),
	},
    mounted() {
        this.getEmployeesList();
    },
}
</script>

<style scoped lang="scss">
$font: 1.7em;
$font-family: Sylfaen;

.grid {
    margin: 0 auto;
    max-width: 1200px;
    padding-top: 150px;
    min-height: 1200px;
}
@media (max-width: 1200px) {
    .grid {
        max-width: 800px;
        min-height: 1500px;
    }
}
@media (max-width: 992px) {
    .grid {
        max-width: 750px;
    }
}
@media (max-width: 767px) {
    .grid {
        max-width: 400px;
    }
}
.grid__container {
    display: grid;
    grid-template: 1fr 1fr/1fr 1fr 1fr;
    justify-items: center;
    margin: 0px 15px;
}
@media (max-width: 1200px) {
    .grid__container {
        grid-template: 1fr 1fr 1fr/0.4fr 0.4fr;
        justify-items: center;
    }
}
@media (max-width: 767px) {
    .grid__container {
        grid-template: 1fr 1fr 1fr 1fr/0.4fr;
        justify-items: center;
    }
}
.employee {
    padding: 15px;
    margin: 20px;
    width: 350px;
    align-items: center;
    text-align: center;
	background-color: rgb(245, 243, 243);
	border-radius: 7px;
	-webkit-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	-moz-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
    font-family: $font-family;
    
    & img {
        width: 250px;
        border-radius: 30px;
        margin-top: 5px;
        margin-bottom: 10px;
        -webkit-box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
    }
}
@media (max-width: 992px) {
    .employee {
        width: 320px;
    }
}
@media (max-width: 992px) {
    img {
        width: 200px;
    }
}
h1 {
    font-family: $font-family;
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
}
</style>
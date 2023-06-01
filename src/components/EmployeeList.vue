<template>
    <h1>Наши сотрудники:</h1>
    <div class="grid">
        <div v-for="employee in employeesList" class="employee"
            :key="employee.id"
            :employee="employee.title">
                <img :src=employee.avatar>
                <div><strong>Name:</strong> {{ employee.first_name }}</div>
                <div><strong>Surname:</strong> {{ employee.last_name }}</div>
                <div><strong>Email:</strong> {{ employee.email }} </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name: 'EmployeeList',
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
    display: grid;
    grid-template: 1fr 1fr/1fr 1fr 1fr;
    margin-top: 50px;
}
.employee {
    padding: 15px;
    margin: 20px;
    align-items: center;
    text-align: center;
	background-color: rgb(245, 243, 243);
	border-radius: 7px;
	-webkit-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	-moz-box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
	box-shadow: 0px 0px 30px 4px rgba(34, 60, 80, 0.31);
    font-family: $font-family;
    
    & img {
	border-radius: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
    -webkit-box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 23px 0px rgba(34, 60, 80, 0.2);
    }
}
h1 {
    position: absolute;
    top: 130px;
    left: 35%;
    font-family: $font-family;
    font-size: 2em;
}
</style>
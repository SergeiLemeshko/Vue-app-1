<template>
    <div>
        <h1>Наши сотрудники</h1>
        <div v-for="employee in employeesList" class="employee"
            :key="employee.id"
            :employee="employee.title">
                <div>{{ employee.avatar }}</div>
                <div>Имя:{{ employee.first_name }}</div>
                <div>Фамилия:{{ employee.last_name }}</div>
                <div>Email:{{ employee.email }}</div>
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

<style scoped>
.employee {
    padding: 15px;
    border: 2px solid rgb(17, 146, 146);
    margin-top: 15px;
    /* display: flex; */
    align-items: center;
    justify-content: space-between;
}
h1{
    margin-top: 100px;
    text-align: center;
}
</style>
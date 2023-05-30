<template>
	<section class="container">
		<h1>EmployeesCompany</h1>
		<employee-list></employee-list>
	</section>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue'

export default {
	name: "EmployeesCompany",
	components: {
		EmployeeList,
	},
	data() {
		return {
		
	}
},
	methods: {
	},
}
</script>


<style></style>

<template>
	<section>
		<employee-list></employee-list>
	</section>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue'

export default {
	name: "EmployeesCompany",
	components: {
		EmployeeList,
	}
}
</script>

<style lang="scss"></style>

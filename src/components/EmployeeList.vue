<template>
    <!-- <div v-for="employee in employeesList">
        <div><strong>Название:</strong> {{ employee.title }}</div>
            <div><strong>Описание:</strong> {{ employee.body }}</div>
    
    </div>     -->


    <div>
        <h1>EmployeeList</h1>
        <transition-group name="employee-list">
            <employee-item
                v-for="employee in employeesList"
                    :key="employee.id"
                    :employee="employee.title"
                />
        </transition-group>
    </div>
</template>

<script>
import EmployeeItem from '@/components/EmployeeItem.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name: 'EmployeeList',
    components: {
		EmployeeItem,
	},
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapMutations({
            setEmployeesList: 'employee/setEmployeesList',
        }),
        ...mapActions({
            getEmployeesList: 'employee/getEmployeesList',			
        }),
    },
    mounted() {
        this.getEmployeesList();
    },
	computed: {
		...mapState({
			employeesList: state => state.employee.employeesList,
		}),
		...mapGetters({
			employeesList: 'employee/employeesList',
		}),
	},
}
</script>
  
  <style scoped>
  .employee-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .employee-list-enter-active,
  .employee-list-leave-active {
    transition: all 0.4s ease;
  }
  .employee-list-enter-from,
  .employee-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }
  .employee-list-move {
    transition: transform 0.4s ease;
  }
  </style>
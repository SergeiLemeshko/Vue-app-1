<template>
    <div class="employee">
        <!-- <h1>ddddddddddddddddddddd</h1> -->
        <div>
            <div>{{ employee.id }}</div>
            <div><strong>Название:</strong> {{ employee.title }}</div>
            <div><strong>Описание:</strong> {{ employee.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmployeeItem',
    props: {
        employeesList: {
            type: Object,
            required: true,
        }
    }
}
</script>
  
<style scoped>
.employee {
    padding: 45px;
    border: 2px solid teal;
    /* margin-top: 105px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: blue; */
}
h1{
    margin-top: 100px;
}
</style>
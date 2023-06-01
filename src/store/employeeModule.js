import axios from "axios";

export const employeeModule = {
    state: () => ({
        employeesList:[], 
    }), 
    getters: {
        employeesList(state) {
            return state.employeesList;
        }
    },
    mutations: {
        setEmployeesList(state, employeesList) {
            state.employeesList = employeesList;
        },
    },
    actions: {
        async getEmployeesList({ commit }) {
            return await axios('https://reqres.in/api/users/', {
                method: "GET"
            })
            .then((employeesList) => {
                commit("setEmployeesList", employeesList.data.data);
                console.log(employeesList.data.data)
                return employeesList;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    namespaced: true //флаг. Все что заключено в этот модуль, имеет имя (employee)
}
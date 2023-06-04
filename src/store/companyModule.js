import axios from "axios";

export const companyModule = {
    state: () => ({
        aboutCompany:[], 
    }), 
    getters: {
        aboutCompany(state) {
            return state.aboutCompany;
        }
    },
    mutations: {
        setAboutCompany(state, aboutCompany) {
            state.aboutCompany = aboutCompany;
        },
    },
    actions: {
        async getInfoAboutCompany({ commit }) {
            return await axios('https://jsonplaceholder.typicode.com/posts?_limit=9', {
                method: "GET"
            })
            .then((aboutCompany) => {
                commit("setAboutCompany", aboutCompany.data);
                console.log(aboutCompany.data)
                return aboutCompany;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    namespaced: true //флаг. Все что заключено в этот модуль, имеет имя (employee)
}
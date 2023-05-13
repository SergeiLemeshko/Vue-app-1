export const formModule = {
    state: () => ({
        isHideForm1: false, // скрытие/показ формы 1
        isHideForm2: false, // скрытие/показ формы 2
        isHidePartForm1: false, // скрытие/показ первого инпута формы 1
        isHideTel: false, // показ предупреждения об отправке кода в смс
        isHidePass: false, // скрытие/показ инпута для ввода пароля из смс
        isHideSMS: false, // скрытие/показ пароля из смс
        isHideBtns: false, // скрытие/показ кнопок 2 формы
        isActiveName: false, // скрытие/показ подсветки на имя
        isActiveSurn: false, // скрытие/показ подсветки на фамилию
        isActiveDate: false, // скрытие/показ подсветки на дату
        isActiveEmail: false, // скрытие/показ подсветки на email
        warnBirthday: false, // предупреждение нет 18 лет
        warnBirthdayMore: false, // предупреждение неверного года ДР
        randomNum: '', // рандомный код в смс
        inpValuePass: '',
        searchQuery: '',
        formValidationName: '',
        formValidationSurn: '',
        formValidationDate: '',
        formValidationEmail: '',
        formDate: [], // результат из формы
    }), 
    getters: {
        changeFormTel(state) {
            state.randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            state.isHidePartForm1 = true;
            state.isHideTel = true;
        setTimeout(() => {
            if(state.isHideTel) {
                state.isHideTel = false;
                state.isHidePass = true; 
                state.isHideSMS = true;
                return;
                }
            }, 2000);
        },
        matchNumbers(state) {
            if(state.randomNum === Number(state.searchQuery)) {
                state.isHideForm1 = true;
                setTimeout(() => {
                    state.isHideForm2 = true;
                    return;
                }, 1000)
            }
        },
    },
    mutations: {
        setHideForm1(state, bool) {
            state.isHideForm1 = bool
        },
        setHideForm2(state, bool) {
            state.isHideForm2 = bool
        },
        setHidePartForm1(state, bool) {
            state.isHidePartForm1 = bool
        },
        setHideTel(state, bool) {
            state.isHideTel = bool
        },
        setHidePass(state, bool) {
            state.isHidePass = bool
        },
        setHideSms(state, bool) {
            state.isHideSMS = bool
        },
        setRandomNum(state, randomNum) {
            state.randomNum = randomNum
        },
        setInpValuePass(state, inpValuePass) {
            state.inpValuePass = inpValuePass
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setHideBtns(state, bool) {
            state.isHideBtns = bool
        },
        setFormValidationName(state, formValidationName) {
            state.formValidationName = formValidationName
        },
        setFormValidationSurn(state, formValidationSurn) {
            state.formValidationSurn = formValidationSurn
        },
        setActiveName(state, bool) {
            state.isActiveName = bool
        },
        setActiveSurn(state, bool) {
            state.isActiveSurn = bool
        },
        setActiveDate(state, bool) {
            state.isActiveDate = bool
        },
        setActiveEmail(state, bool) {
            state.isActiveEmail = bool
        },
        setFormValidationDate(state, formValidationDate) {
            state.formValidationDate = formValidationDate
        },
        setWarnBirthday(state, bool) {
            state.warnBirthday = bool
        },
        setWarnBirthdayMore(state, bool) {
            state.warnBirthdayMore = bool
        },
        setFormValidationEmail(state, formValidationEmail) {
            state.formValidationEmail = formValidationEmail
        },
        setFormData(state, array) {
            state.formDate = array
        },
    },
    actions: {
        validForm( {state, commit} ) {
            let date = new Date();
            let inpDate = []; // Введенная ДР
            inpDate = state.formValidationDate.split('-'); // Год введенной ДР
            let email = state.formValidationEmail;
            let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //регулярочка для emaila

            // Проверка имени
            state.formValidationName <= 0 ? commit('setActiveName', true) : state.formDate.push(state.formValidationName);

            // Проверка фамилии
            state.formValidationSurn <= 0 ? commit('setActiveSurn', true) : state.formDate.push(state.formValidationSurn);

            // Проверка даты
            if(Number(inpDate[0]) >= date.getFullYear() - 18) {
                commit('setActiveDate', true);
                commit('setWarnBirthdayMore', true);  
                commit('setWarnBirthday', false);  
            } else if(Number(inpDate[0]) === 0) {
                commit('setActiveDate', true);
                commit('setWarnBirthdayMore', false);  
                commit('setWarnBirthday', true);
            } else {
                commit('setActiveDate', false);
                state.formDate.push(state.formValidationDate);
            }

            // Проверка email
            reg.test(email) ? state.formDate.push(state.formValidationEmail) : commit('setActiveEmail', true);  
            console.log(state.formDate);                     
        }
    },
        modules: {
    },
    namespaced: true //флаг. Все что заключено в этот модуль, имеет свое имя (forms)
}
export const formModule = {
    state: () => ({
        isHideForm1: false, // скрытие/показ формы 1
        isHideForm2: false, // скрытие/показ формы 2
        isHidePartForm1: false, // скрытие/показ первого инпута формы 1
        isHideTel: false, // показ предупреждения об отправке кода в смс
        isHidePass: false, // скрытие/показ инпута для ввода пароля из смс
        isHideSMS: false, // скрытие/показ пароля из смс
        isHideBtns: false, // скрытие/показ кнопок 2 формы
        isActiveInp: false, // скрытие/показ подсветки на инпут имени
        warnBirthday: false, // показываю предупреждение нет 18 лет
        warnBirthdayMore: false, // показываю предупреждение неверного года ДР
        randomNum: '', // рандомный код в смс
        inpValuePass: '',
        searchQuery: '',
        formValidation: '',
        formValidationDate: '',
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
                }
        }, 2000);
    },
    matchNumbers(state) {
        if(state.randomNum === Number(state.searchQuery)) {
            state.isHideForm1 = true;
            setTimeout(() => {
                state.isHideForm2 = true;
            }, 1000)
        }
    },
    validForm: function (state) {
        try {
            let date = new Date();
            let formDate = []; // Введенная ДР
            formDate = state.formValidationDate.split('-'); // Год введенной ДР
    
            if(state.formValidation <= 0) {
                state.isActiveInp = true;
            } 
            if(Number(formDate[0]) >= date.getFullYear() - 18) {
                state.warnBirthdayMore = true;
                state.warnBirthday = false;
                state.isActiveInp = true;
            }
            if(Number(formDate[0]) >= date.getFullYear()) {
                state.warnBirthdayMore = false;
                state.warnBirthday = true;
                state.isActiveInp = true;
            } 
        }
        catch {

        }
    }
            // let email = state.formValidation;
        // let re = /^([A-Z][a-z\-\']{1,50})|([А-ЯЁIЇҐЄ][а-яёіїґє\-\']{1,50})$/;
        // return re.test(email);
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
        setFormValidation(state, formValidation) {
            state.formValidation = formValidation
        },
        setActiveName(state, bool) {
            state.isActiveInp = bool
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
    },
        actions: {
    },
        modules: {
    },
    namespaced: true
}
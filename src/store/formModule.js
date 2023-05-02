export const formModule = {
    state: () => ({
        isHideForm1: false, // скрытие/показ формы 1
        isHideForm2: true, // скрытие/показ формы 2
        isHidePartForm1: false, // скрытие/показ первого инпута формы 1
        isHideTel: false, // показ предупреждения об отправке кода в смс
        isHidePass: false, // скрытие/показ инпута для ввода пароля из смс
        isHideSMS: false, // скрытие/показ пароля из смс
        randomNum: 0, // код в смс
        inpValuePass: '',
        searchQuery: '',
    }), 
    getters: {
        changeFormTel(state, minValue, maxValue) {
            let telInpValue = state.searchQuery;
            let arrTelInpValue = telInpValue.split('');    
                minValue = arrTelInpValue[2] + arrTelInpValue[3];
                maxValue = arrTelInpValue[1] + arrTelInpValue[4];
                state.randomNum = minValue + maxValue; // Добавить рандом
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
    },
        actions: {
    },
        modules: {
    },
    namespaced: true
}
export const formModule = {
    state: () => ({
        isHideForm1: false,
        isHideForm2: false,
        isHidePartForm1: false,
        isHideTel: false,
        isHidePass: false,
        isHideSMS: false,
        randomNum: 0,
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
import { createStore } from 'vuex';
import { formModule } from '@/store/formModule';
import { employeeModule } from '@/store/employeeModule';


export default createStore({
    modules: {
        forms: formModule,
        employee: employeeModule,
    }
})

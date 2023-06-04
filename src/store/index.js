import { createStore } from 'vuex';
import { formModule } from '@/store/formModule';
import { employeeModule } from '@/store/employeeModule';
import { companyModule } from '@/store/companyModule';

export default createStore({
    modules: {
        forms: formModule,
        employee: employeeModule,
        company: companyModule
    }
})

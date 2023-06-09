import { createRouter, createWebHashHistory } from 'vue-router'
import HomeCompany from '../views/HomeCompany.vue'
import FormCompany from '../views/FormCompany.vue'
import AboutCompany from '../views/AboutCompany.vue'
import EmployeesCompany from '../views/EmployeesCompany.vue'
import ReviewPage from '../views/ReviewPage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeCompany
	},
	{
		path: '/form',
		name: 'form',
		component: FormCompany
	},
	{
		path: '/about',
		name: 'about',
		component: AboutCompany
	},
	{
		path: '/employees',
		name: 'employees',
		component: EmployeesCompany
	},
	{
		path: '/reviews/:id',
		name: 'reviews',
		component: ReviewPage
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router;

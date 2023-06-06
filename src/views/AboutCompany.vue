<template>
	<section class="container">
		<company-info></company-info>
	</section>
	<section>
		<reviews-list :reviewsList="reviewsList"></reviews-list>
	</section>
</template>

<script>
import CompanyInfo from '@/components/CompanyInfo.vue'
import ReviewsList from '@/components/ReviewsList.vue';
import axios from "axios";

export default {
	name: "AboutCompany",
	components: {
		CompanyInfo,
		ReviewsList
	},
	data() {
        return {
            reviewsList: [],
            default: () => []
        }
    },
    methods: {
        async getReviews() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15');
				this.reviewsList = response.data;
                // console.log(this.reviewsList)    
            } catch(error) {
                console.log(error)    
            } 
        }
    },
	mounted() {
        this.getReviews();
    }
}
</script>

<style lang="scss"> 
</style>

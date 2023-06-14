<template>
	<section>
		<company-info></company-info>
	</section>
	<section>
		<reviews-list :reviewsList="reviewsList"></reviews-list>
        <div ref="observer" class="observer"></div>
	</section>
</template>

<script>
import CompanyInfo from '@/components/CompanyInfo.vue'
import ReviewsList from '@/components/ReviewsList.vue'
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
            default: () => [],
            limit: 10 //лимит отображаемых и погружаемых отзывов
        }
    },
    methods: {
        //загрузка отзывов
        async getReviews() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');
				this.reviewsList = response.data;
                // console.log(this.reviewsList)    
            } catch(error) {
                console.log(error)    
            } 
        },
        // динамическая подгрузка отзывов
        async loadMoreReviews() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                    params: {
                        _limit: this.limit
                    }
                });
				this.reviewsList = [...this.reviewsList, ...response.data];   
            } catch(error) {
                console.log(error)    
            } 
        }
    },
	mounted() {
        this.getReviews();
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };

        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.reviewsList.length < 50) {
                this.loadMoreReviews()
                console.log('+10 отзывов')
            }
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    }
}
</script>

<style lang="scss"> 
.observer {
    height: 60px;
}
</style>

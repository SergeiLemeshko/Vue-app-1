<template>
    <h3>Отзывы:</h3>
        <div class="rewiews__block">
            <review-item
                v-for="review in reviewsList"
                :review="review"
                :key="review.id"
            />
        </div>
</template>

<script>
import ReviewItem from "@/components/ReviewItem";

export default {
    components: {ReviewItem},
    data() {
        return {

        }
    },
    props: {
        reviewsList: {
            type: Array,
            required: true
        }
    },
}

</script>

<style scoped>
.rewiews__block{
}
</style>
<template>
    <div class="rewiews__block">
        <h3>Отзывы:</h3>
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

<style scoped lang="scss">
.rewiews__block{
    padding: 1350px 15px 15px 15px;
    margin: 0 auto;
    top: 1400px;
    max-width: 800px;
    text-align: justify;
    text-indent: 30px;
}
</style>
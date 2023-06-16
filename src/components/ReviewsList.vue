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
$font-family: Sylfaen;

h3 {
    font-family: $font-family;
    font-size: 1.5em;
}
.rewiews__block{
    padding: 50px 15px 15px 15px;
    margin: 0 auto;
    max-width: 800px;
    text-align: justify;
    text-indent: 30px;
}
</style>
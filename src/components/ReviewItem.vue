<template>
    <div class="review">
            <div>Имя:{{ review.name }}</div>
            <div>Отзыв:{{ review.body }}</div>
        <div>
            <button class="review__btn" @click="$router.push(`/reviews/${review.body}`)">Открыть</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReviewsItem',
    data() {
        return {
        }
    },
    props: {
        review: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.review {
    padding: 10px;
    border: 1px solid teal;
    margin: 15px 15px 0px 15px;
    max-width: 700px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}
.review__btn {
    display: flex;
}
</style>
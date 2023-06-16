<template>
    <div class="review">
            <div class="review__name"><strong>Имя:</strong> {{ review.name }}</div>
            <div class="review__body"><strong>Отзыв:</strong> {{ review.body }}</div>
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

<style scoped lang="scss">
$font: 1em;
$font-family: Sylfaen;
.review {
    padding: 10px;
    border: 1px solid rgb(223, 235, 235);
    margin: 20px;
    -webkit-box-shadow: 0px 0px 5px 4px rgba(166, 174, 115, 0.2);
    -moz-box-shadow: 0px 0px 5px 4px rgba(166, 174, 115, 0.2);
    box-shadow: 0px 0px 5px 4px rgba(166, 174, 115, 0.2);
}
.review__btn {
    font-family: $font-family;
    border-radius: 7px;
    width: 80px;
    height: 30px;
    color: rgb(0, 0, 0);
    transition: .2s linear;
    background: #b9c293;
    margin-top: 15px;
}
.review__btn:hover {
    box-shadow: #dcdfb6 0 0px 0px 40px inset;
}
.review__name {
    font-family: $font-family;
    max-width: 680px;
}
.review__body {
    font-family: $font-family;
    max-width: 680px;
}
</style>
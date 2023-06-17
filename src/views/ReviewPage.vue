<template>
    <div class="review__info">
        <p><strong>Отзыв:</strong> {{ $route.params.id }}</p>
    </div>
</template>

<script></script>

<style scoped lang="scss">
.review__info{
    padding-top: 200px;
    min-height: 1000px;
}
p {
    margin: 0 auto;
    max-width: 600px;
    text-indent: 30px;
    padding: 10px;
    border: 1px solid rgb(172, 194, 194);
}
</style>
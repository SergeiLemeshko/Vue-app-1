<template>
    <div class="video">
        <video ref="video" class="video__item" src="videos/videoplay.webm"></video>
        <span id="timer">00:00</span>
    </div>
</template>

<script>

export default {
	name: "VideoBlock",
	components: {
        
	},
    data() {
        return {
            
        }
    },
	props: {
        
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
    .video {
        position: relative;
    }
    span {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color:white;
    }
    .video__item {
        width: 600px;
    }
    @media (max-width: 992px) {
        .video__item {
            width: 500px;
        }
    }
    @media (max-width: 767px) {
        .video__item {
            width: 350px;
        }
    }
</style>

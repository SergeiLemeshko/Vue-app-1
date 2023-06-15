<template>
    <section class="video">
        <div class="video__title">
            <h1>Видео о нашей компании</h1>
        </div>
        <div class="video__container">
                <video 
                    ref="video" 
                    @click="playPauseVideo" 
                    @ended="endedPlayVideo" 
                    @timeupdate="timeUpdate" 
                    class="video__item" 
                    src="@/assets/videos/videoplay.webm">
                </video>
            <span ref="timer" id="timer">00:00</span>
        </div>
    </section>
</template>

<script>
export default {
	name: "VideoBlock",
    methods: {
        //воспроизведение/пауза по клику на видео
        playPauseVideo() {
            if (this.$refs.video.paused) {
                this.$refs.video.play();
            } else {
                this.$refs.video.pause();
            }
            // console.log(this.$refs.video)
        },
        endedPlayVideo() {
            this.$refs.video.currentTime = 0;
        },
        timeUpdate() {
            this.$refs.timer.innerHTML = this.toTime(this.$refs.video.currentTime)
            // console.log(this.$refs.timer.innerHTML)
        },
        toTime(time) {
            let h = Math.floor(time / (60 * 60)),
                dm = time % (60 * 60),
                m = Math.floor(dm / 60),
                ds = dm % 60,
                s = Math.ceil(ds),
                fulltime = null;
            if (s === 60) {
                s = 0;
                m = m + 1;
            }
            if (s < 10) {
                s = '0' + s;
            }
            if (m === 60) {
                m = 0;
                h = h + 1;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (h === 0) {
                fulltime = m + ':' + s;
            } else {
                fulltime = h + ':' + m + ':' + s;
            }
            return fulltime;
        }
    }
}
</script>

<style scoped lang="scss">
$font-family: Sylfaen;

.video__container {
    position: relative;
    margin: 0 auto;
    width: 700px;

        & span {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color:rgb(167, 167, 167);
        font-family: $font-family;
    }
}
@media (max-width: 992px) {
    .video__container {
        width: 600px;
    }
}
@media (max-width: 767px) {
    .video__container {
        width: 500px;
    }
}
@media (max-width: 480px) {
    .video__container {
        width: 400px;
    }
}
.video__title {
    font-family: $font-family;
    text-align: center;
    margin: 10px 0px;
}
.video__item {
    width: 700px;
    border-radius: 3px;
}
@media (max-width: 992px) {
    .video__item {
        width: 600px;
    }
}
@media (max-width: 767px) {
    .video__item {
        width: 500px;
    }
}
@media (max-width: 480px) {
    .video__item {
        width: 400px;
    }
}
</style>

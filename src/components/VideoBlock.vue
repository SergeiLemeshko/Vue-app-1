<template>
    <div class="video">
        <h1>Видео о нашей компании</h1>
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
            console.log(this.$refs.video)
        },
        endedPlayVideo() {
            this.$refs.video.currentTime = 0;
        },
        timeUpdate() {
            this.$refs.timer.innerHTML = this.toTime(this.$refs.video.currentTime)
            console.log(this.$refs.timer.innerHTML)
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

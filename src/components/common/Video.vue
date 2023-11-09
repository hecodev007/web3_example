<template>
  <div id="video">
    <!-- <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player> -->
    <iframe
      width="100%"
      height="490px"
      src="https://www.youtube.com/embed/G5bX3D409JU?rel=0&amp;autoplay=1&loop=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    playerOptions: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#video {
  width: 100%;
  // height: 300px;
  /deep/.vjs-custom-skin > .video-js .vjs-big-play-button {
    display: none;
  }
}
</style>
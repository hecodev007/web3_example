<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <!-- <unity
      src="/TestGameWebGl/Build/TestGameWebGl.json"
      width="1000"
      height="600"
      unityLoader="../public/TestGameWebGl/Build/TestGameWebGl.loader.js"
      ref="unityvue"
    ></unity> -->
  </div>
</template>

<script>
// import Unity from "vue-unity-webgl";

export default {
  name: "App",
  // components: { Unity },
  data() {
    return {
      type: 0,
      type1: 0,
    };
  },
  methods: {
    init() {
      //借助userAgent这个属性去判断移动端还是PC端
      var str = navigator.userAgent;
      var arr = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
      ];
      if (this.type != 1 || this.type1 != 1) {
        for (var i = 0; i < arr.length; i++) {
          if (str.indexOf(arr[i]) != -1) {
            //移动端
            // location.href = "https://m.mekawarrior.io";
          }
        }
      }
    },
  },
  created() {
    this.type1 =
      window.sessionStorage.getItem("type") === null
        ? 0
        : Number(window.sessionStorage.getItem("type"));
    this.type = Number(this.$route.query.type);

    this.init();

    // debugger;
    // // testCoder();
    // localStorage.setItem("token", "2212313123");

    // window.ReportReady = () => {
    //   alert("report ready event received");
    //   this.$refs.unityvue.message("JsTalker", "SetToken", localStorage.token);
    // };
  },
};
</script>

<style lang="less" scoped>
@import "assets/css/index.css";

#app {
  width: 100%;
  height: 100%;
}
</style>
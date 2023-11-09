<template>
  <div id="whitepaper">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <WhitePapers />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import WhitePapers from "../../components/whitepaper/WhitePapers.vue";

export default {
  name: "WhitePaper",
  components: {
    NavBar,
    WhitePapers,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div id="minemap">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Minemaps />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Minemaps from "../../components/game/mining/Minemaps.vue";

export default {
  name: "Minemap",
  components: {
    NavBar,
    Minemaps,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
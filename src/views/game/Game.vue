<template>
  <div id="game">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Games />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Games from "../../components/game/Games.vue";

export default {
  name: "Game",
  components: {
    NavBar,
    Games,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
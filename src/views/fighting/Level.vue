<template>
  <div id="level">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Levels />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Levels from "../../components/game/fighting/Levels.vue";

export default {
  name: "Level",
  components: {
    NavBar,
    Levels,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
</style>
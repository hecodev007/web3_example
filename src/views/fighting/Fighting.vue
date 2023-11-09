<template>
  <div id="fighting">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Fightings />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Fightings from "../../components/game/fighting/Fightings.vue";

export default {
  name: "Fighting",
  components: {
    NavBar,
    Fightings,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
</style>
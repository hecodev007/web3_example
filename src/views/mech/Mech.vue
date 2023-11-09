<template>
  <div id="mech">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Mechs />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Mechs from "../../components/game/mech/Mechs.vue";

export default {
  name: "Mech",
  components: {
    NavBar,
    Mechs,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div id="mining">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Minings />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Minings from "../../components/game/mining/Minings.vue";

export default {
  name: "Mining",
  components: {
    NavBar,
    Minings,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
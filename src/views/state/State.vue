<template>
  <div id="state">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <States />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import States from "../../components/game/state/States.vue";

export default {
  name: "State",
  components: {
    NavBar,
    States,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
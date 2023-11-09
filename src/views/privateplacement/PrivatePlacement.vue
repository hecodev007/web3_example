<template>
  <div id="privateplacement">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <PrivatePlacements />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import PrivatePlacements from "../../components/privateplacement/PrivatePlacements.vue";

export default {
  name: "PrivatePlacement",
  components: {
    NavBar,
    PrivatePlacements,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#privateplacement {
  height: 100%;
}
</style>
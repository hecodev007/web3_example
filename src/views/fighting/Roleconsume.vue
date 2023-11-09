<template>
  <div id="roleconsume">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Roleconsumes />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Roleconsumes from "../../components/game/fighting/Roleconsumes.vue";

export default {
  name: "Roleconsume",
  components: {
    NavBar,
    Roleconsumes,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
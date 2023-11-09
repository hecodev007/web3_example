<template>
  <div id="exchange">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Exchanges />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Exchanges from "../../components/exchange/Exchanges.vue";

export default {
  name: "Exchange",
  components: {
    NavBar,
    Exchanges,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div id="netmarket">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <NetMarkets />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import NetMarkets from "../../components/netmarket/NetMarkets.vue";

export default {
  name: "NetMarket",
  components: {
    NavBar,
    NetMarkets,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
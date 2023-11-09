<template>
  <div id="playermarket">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <PlayerMarkets />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import PlayerMarkets from "../../components/playermarket/PlayerMarkets.vue";

export default {
  name: "PlayerMarket",
  components: {
    NavBar,
    PlayerMarkets,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#playermarket {
  height: 100%;
}
</style>
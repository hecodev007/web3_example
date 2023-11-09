<template>
  <div id="wallet">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Wallets />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Wallets from "../../components/wallet/Wallets.vue";

export default {
  name: "Wallet",
  components: {
    NavBar,
    Wallets,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#wallet {
  height: 100%;
}
</style>
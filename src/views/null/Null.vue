<template>
  <div id="null">
    <!-- 导航栏 -->
    <NavBar />

    <div class="null-back animated bounceInLeft wow">
     
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";

export default {
  name: "Null",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#null {
    height: 100%;
    width: 100%;
  .null-back {
      width: 100%;
    height: 1200px;
    background: url("../../assets/img/home-null.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
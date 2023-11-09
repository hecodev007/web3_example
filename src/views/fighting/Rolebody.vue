<template>
  <div id="rolebody">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <Rolebodys />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import Rolebodys from "../../components/game/fighting/Rolebodys.vue";

export default {
  name: "Rolebody",
  components: {
    NavBar,
    Rolebodys,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
</style>
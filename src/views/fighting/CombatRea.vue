<template>
  <div id="combatrea">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <CombatReas />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import CombatReas from "../../components/game/fighting/CombatReas.vue";

export default {
  name: "CombatRea",
  components: {
    NavBar,
    CombatReas,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="less" scoped>
</style>
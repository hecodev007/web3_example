<template>
  <div id="faq">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 内容 -->
    <FAQs />
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar.vue";
import FAQs from "../../components/faq/FAQs.vue";

export default {
  name: "FAQ",
  components: {
    NavBar,
    FAQs,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>
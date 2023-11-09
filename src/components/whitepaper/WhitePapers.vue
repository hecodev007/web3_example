<template>
  <div id="whitepapers">
   
  </div>
</template>

<script>
export default {
  name: "WhitePapers",
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
  },
  created() {
    this.$router.push('/Home');
  },
};
</script>

<style lang="less" scoped>
#whitepapers {
  height: 1000px;
  padding-top: 56px;
  .coder-syq {
    // margin: 100px auto;
    // height: 80px;
    // width: 80px;
    background: red;

    // animation-duration: 5s;
    // animation-delay: 2s;
  }
}
</style>
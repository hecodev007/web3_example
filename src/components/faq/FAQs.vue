<template>
  <div id="faqs">
    <img src="../../assets/img/FAQ-Chinese.png" alt="" v-if="lang === 'zh-CN'" />
    <img src="../../assets/img/FAQ-English.png" alt="" v-else />
  </div>
</template>

<script>
export default {
  name: "FAQs",
  data() {
    return {
      //语言
      lang: "",
    };
  },
  created() {
    this.lang = window.sessionStorage.getItem("lang");
  },
};
</script>

<style lang="less" scoped>
#faqs {
  padding-top: 56px;
  background: #131516;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
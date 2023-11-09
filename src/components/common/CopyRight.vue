<template>
  <div id="copyright">
    <div class="homes-center-copyright">
      <!-- <img src="../../assets/img/home-CopyRight.png" alt=""> -->
      <span>{{ $t("lang.Internetdruginformation") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyRight",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#copyright {
  width: 100%;
  .homes-center-copyright {
    text-align: center;
    padding: 20px 0;
    background: url("../../assets/img/home-back11.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    img {
      width: 100px;
      height: 100px;
    }
    span {
      font-size: 16px;
      color: #ffffff;
      font-family: "JDZY";
    }
  }
}
</style>
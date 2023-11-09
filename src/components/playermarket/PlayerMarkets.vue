<template>
  <div id="playermarkets">
    <div class="playermarkets-top">
      <div
        v-for="(item, index) in titleList"
        :key="index"
        @click="selectClick(index)"
        :class="{
          active: selectIndex === index,
          ceneter: selectIndex != index,
        }"
      >
        {{ item }}
      </div>
    </div>

    <!-- 动态市场 -->
    <Dynamic v-if="selectIndex === 0" />
    <!-- 搜索市场 -->
    <Market v-else-if="selectIndex === 1" />
    <!-- 我的商品 -->
    <Myproduct v-else-if="selectIndex === 2" />
    <!-- 上架 -->
    <Ontheshelf v-else-if="selectIndex === 3" />
    <!-- 底部版权 -->
    <CopyRight />
  </div>
</template>

<script>
import Market from "./Market";
import Dynamic from "./Dynamic";
import Myproduct from "./Myproduct";
import Ontheshelf from "./Ontheshelf";
import CopyRight from "../common/CopyRight.vue"

export default {
  name: "PlayerMarkets",
  components: {
    Market,
    Dynamic,
    Myproduct,
    Ontheshelf,
    CopyRight
  },
  data() {
    return {
      //顶部栏
      titleList: [this.$i18n.t("lang.Marketdynamics"), this.$i18n.t("lang.Market"), this.$i18n.t("lang.Mycargo"), this.$i18n.t("lang.Shelfgoods")],
      //被选择下标
      selectIndex: 0,
    };
  },
  methods: {
    //被点击的顶部栏
    selectClick(index) {
      this.selectIndex = index;
    },
  },
  created() {
    this.$router.push('/Home');
  },
};
</script>

<style lang="less" scoped>
#playermarkets {
  // height: 100%;
  padding-top: 56px;

  background: url("../../assets/img/image2.png") no-repeat;
  background-size: 100% 100%;

  .playermarkets-top {
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;
    text-align: center;
    // padding-bottom: 100px;

    display: flex;
    justify-content: flex-end;
    .ceneter {
      margin: 0 10px;
      cursor: pointer;

      text-align: center;
      width: 12%;
      padding: 15px 0;
      background: url("../../assets/img/btn-image1.png") no-repeat;
      background-size: 100% 84%;
      background-position-y: 4px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      font-size: 20px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";
    }
    .active {
      position: relative;
      top: 5px;

      margin: 0 10px;
      cursor: pointer;

      text-align: center;
      width: 12%;
      padding: 12px 0;
      background: url("../../assets/img/btn-image2.png") no-repeat;
      background-size: 100% 84%;

      font-size: 20px;
      font-weight: bold;
      color: #3a3a3b;
      font-family: "JDZY";
    }
  }
}
</style>
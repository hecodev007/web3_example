<template>
  <div id="mechs">
    <!-- 机甲 -->
    <Mecha v-if="selectIndex === 0" @clildClick="clildClick" />
    <!-- 升级 -->
    <Upgrade v-else-if="selectIndex === 1" @clildClick="clildClick" />
    <!-- 合成 -->
    <Synthesis v-else-if="selectIndex === 2" @clildClick="clildClick" />
    <!-- 阵营 -->
    <Camp v-else-if="selectIndex === 3" @clildClick="clildClick" />
    <!-- 底部版权 -->
    <CopyRight />
  </div>
</template>

<script>
import Mecha from "./Mecha";
import Upgrade from "./Upgrade";
import Synthesis from "./Synthesis";
import Camp from "./Camp";
import CopyRight from "../../common/CopyRight.vue";

export default {
  name: "Mechs",
  components: {
    Mecha,
    Upgrade,
    Synthesis,
    Camp,
    CopyRight,
  },
  data() {
    return {
      //被选择下标
      selectIndex: 0,
    };
  },
  methods: {
    //被点击的顶部栏
    clildClick(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
#mechs {
  height: 100%;
  padding-top: 56px;

  background: url("../../../assets/img/image2.png") no-repeat;
  background-size: 100% 100%;

  .mechs-top {
    padding: 30px 0;
    text-align: center;
    padding-top: 5px;

    display: flex;
    justify-content: center;
    .ceneter {
      margin: 0 10px;
      cursor: pointer;

      text-align: center;
      width: 9%;
      padding: 15px 0;
      background: url("../../../assets/img/btn-image1.png") no-repeat;
      background-size: 100% 84%;
      background-position-y: 4px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      font-size: 14px;
      color: #00e4ff;
      font-family: "JDZY";

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .active {
      margin: 0 10px;
      cursor: pointer;

      text-align: center;
      width: 10%;
      padding: 15px 0;
      background: url("../../../assets/img/btn-image2.png") no-repeat;
      background-size: 100% 100%;

      font-size: 14px;
      color: #00e4ff;
      font-family: "JDZY";

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
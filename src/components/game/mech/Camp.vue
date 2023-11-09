<template>
  <!-- 升级 -->
  <div id="camp">
    <div class="camp-ceneter">
      <div class="camp-ceneter-right">
        <div class="synthesis-ceneter-right-title">
          <div class="mechs-top">
            <div
              v-for="(item, index) in titleList1"
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
        </div>
        <div class="synthesis-ceneter-right-bottom">
          <div class="camp-top-title">选择你的阵营</div>
          <ul>
            <li
              v-for="(item, index) in titleList"
              :key="index"
              @click="itemClick(index)"
            >
              <img
                :src="item.img1"
                alt=""
                class="camp-top-img1"
                v-if="itemIndex != index"
              />
              <img v-else :src="item.img1111" alt="" class="camp-top-img1" />
              <span>阵营</span>
              <p>{{ item.name }}</p>
              <div>
                <img
                  :src="item.img11"
                  alt=""
                  class="camp-top-img2"
                  v-if="itemIndex != index"
                />
                <img :src="item.img11111" alt="" class="camp-top-img2" v-else />
                <img
                  :src="item.img111"
                  alt=""
                  class="camp-top-img3"
                  v-if="itemIndex != index"
                />
                <img
                  :src="item.img111111"
                  alt=""
                  class="camp-top-img3"
                  v-else
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="synthesis-ceneter-right-text">
          <div v-if="itemIndex === 0">
            <span>{{ $t("lang.EarthFederation") }}</span>
            <p>{{ $t("lang.EarthFederation1") }}</p>
            <p>{{ $t("lang.EarthFederation2") }}</p>
          </div>
          <div v-if="itemIndex === 1">
            <span>{{ $t("lang.MechanicalEmpire") }}</span>
            <p>{{ $t("lang.MechanicalEmpire1") }}</p>
            <p>{{ $t("lang.MechanicalEmpire2") }}</p>
          </div>
          <div v-if="itemIndex === 2">
            <span>{{ $t("lang.StarThiefAlliance") }}</span>
            <p>{{ $t("lang.StarThiefAlliance1") }}</p>
            <p>{{ $t("lang.StarThiefAlliance2") }}</p>
          </div>
        </div>
        <div class="synthesis-ceneter-right-btn" @click="dialogVisible = true">
          确认选择
        </div>
      </div>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      style="margin-top: 15vh"
    >
      <div class="div-title">为你的机甲驾驶员取一个响亮的名称吧</div>
      <div class="div-input">
        <el-input v-model="search1" placeholder=""></el-input>
      </div>
      <p>只能输入7位数的字母和数字，不能输入特殊字符</p>
      <div class="div-btn">确定</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Camp",
  data() {
    return {
      //顶部栏
      titleList1: [
        this.$i18n.t("lang.Dynamic"),
        this.$i18n.t("lang.Partsupgrade"),
        this.$i18n.t("lang.Componentsynthesis"),
        // this.$i18n.t("lang.Camp"),
      ],
      //被选择下标
      selectIndex: 3,

      titleList: [
        {
          name: "地球联邦",
          img1: require("../../../assets/img/camp-back-1.png"),
          img11: require("../../../assets/img/camp-back-11.png"),
          img111: require("../../../assets/img/camp-back-111.png"),
          img1111: require("../../../assets/img/camp-back-active-1111.png"),
          img11111: require("../../../assets/img/camp-back-active-11111.png"),
          img111111: require("../../../assets/img/camp-back-active-111111.png"),
        },
        {
          name: "机械帝国",
          img1: require("../../../assets/img/camp-back-2.png"),
          img11: require("../../../assets/img/camp-back-22.png"),
          img111: require("../../../assets/img/camp-back-222.png"),
          img1111: require("../../../assets/img/camp-back-active-2222.png"),
          img11111: require("../../../assets/img/camp-back-active-22222.png"),
          img111111: require("../../../assets/img/camp-back-active-222222.png"),
        },
        {
          name: "星盗联盟",
          img1: require("../../../assets/img/camp-back-3.png"),
          img11: require("../../../assets/img/camp-back-33.png"),
          img111: require("../../../assets/img/camp-back-333.png"),
          img1111: require("../../../assets/img/camp-back-active-3333.png"),
          img11111: require("../../../assets/img/camp-back-active-33333.png"),
          img111111: require("../../../assets/img/camp-back-active-333333.png"),
        },
      ],
      itemIndex: 0,
      dialogVisible: false,
      search1: 0,
    };
  },
  methods: {
    //被点击的顶部栏
    selectClick(index) {
      this.$emit("clildClick", index);
      this.selectIndex = index;
    },

    itemClick(index) {
      this.itemIndex = index;
    },
  },
  async created() {},
};
</script>

<style lang="less" scoped>
#camp {
  width: 80%;
  margin: 0 auto;
  .camp-ceneter {
    padding: 20px 20px;
    // margin-top: 50px;
    // height: 900px;

    display: flex;
    justify-content: space-between;
    .camp-ceneter-left {
      margin-top: 120px;
      width: 30%;

      display: flex;
      flex-direction: column;
    }
    .camp-ceneter-right {
      width: 100%;

      display: flex;
      flex-direction: column;
      .synthesis-ceneter-right-title {
        height: 100px;

        .mechs-top {
          text-align: right;

          display: flex;
          justify-content: flex-end;
          .ceneter {
            margin: 0 10px;
            cursor: pointer;

            text-align: center;
            width: 12%;
            padding: 15px 0;
            background: url("../../../assets/img/btn-image1.png") no-repeat;
            background-size: 100% 84%;
            background-position-y: 4px;

            display: flex;
            flex-direction: column;
            justify-content: center;

            font-size: 18px;
            // font-weight: bold;
            color: #fefefe;
            font-family: "JDZY";

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .active {
            position: relative;
            top: 5px;

            margin: 0 10px;
            cursor: pointer;

            text-align: center;
            width: 12%;
            padding: 12px 0;
            background: url("../../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 84%;

            font-size: 18px;
            font-weight: bold;
            color: #3a3a3b;
            font-family: "JDZY";

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .synthesis-ceneter-right-bottom {
        text-align: center;
        .camp-top-title {
          width: 120px;
          margin: 0 auto;
          padding: 20px 60px;
          background: url("../../../assets/img/camp-btn-back-max.png") no-repeat;
          background-size: 100% 100%;

          font-size: 18px;
          // font-weight: bold;
          color: #fefefe;
          font-family: "JDZY";
        }
        ul {
          margin-top: 100px;
          display: flex;
          justify-content: space-between;
          li {
            cursor: pointer;
            width: 25%;
            position: relative;

            display: flex;
            flex-direction: column;
            .camp-top-img1 {
              // width: 100px;
              // height: 100px;
            }
            span {
              position: absolute;
              top: 50%;
              left: 43%;

              color: #fefefe;
              font-family: "JDZY";
              border-radius: 5px;
              font-size: 20px;
              font-weight: bold;
            }
            p {
              padding: 15px 45px;
              border-radius: 5px;
              background: url("../../../assets/img/camp-btn-back.png") no-repeat;
              background-size: 100% 100%;
              position: absolute;
              top: 80%;
              left: 30%;

              color: #fefefe;
              font-family: "JDZY";
              font-size: 16px;
            }
            div {
              width: 100%;
              position: absolute;
              bottom: -60px;
              left: 0;
              right: 0;

              display: flex;
              justify-content: space-between;
              .camp-top-img2 {
                width: 30%;
                height: 80%;
              }
              .camp-top-img3 {
                width: 30%;
                height: 80%;
              }
            }
          }
        }
      }
      .synthesis-ceneter-right-text {
        height: 400px;
        width: 50%;
        margin: 150px auto;
        margin-bottom: 100px;
        background: url("../../../assets/img/home-back-imagesyq.png") no-repeat;
        background-size: 100% 100%;
        // position: relative;

        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        span {
          text-align: center;
          margin: 50px auto;
          // padding-top: 250px;
          display: flex;
          justify-content: center;
          color: #ffffff;
          font-size: 24px;
          font-family: "JDZY";
        }
        p {
          // text-align: center;
          margin: 20px 20%;
          color: #ffffff;
          font-size: 18px;
          font-family: "JDZY";
        }
      }
      .synthesis-ceneter-right-btn {
        width: 100px;
        padding: 20px 50px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 100px;
        background: url("../../../assets/img/camp-btn-back-conf.png") no-repeat;
        background-size: 100% 100%;

        font-size: 20px;
        // font-weight: bold;
        color: #fefefe;
        font-family: "JDZY";
      }
      /deep/.el-dialog__headerbtn .el-dialog__close {
        display: none;
      }
      /deep/.el-dialog__header {
        display: none;
      }
    }
    /deep/.el-dialog__headerbtn .el-dialog__close {
      display: none;
    }
    /deep/.el-dialog__header {
      display: none;
    }
    @keyframes myfirst {
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: 50px;
        top: 0px;
      }
    }
    @keyframes myfirsts {
      0% {
        right: 0px;
        top: 0px;
      }
      25% {
        right: 50px;
        top: 0px;
      }
    }
  }
  /deep/.el-dialog__headerbtn .el-dialog__close {
    display: none;
  }
  /deep/.el-dialog__header {
    display: none;
  }
  /deep/.el-dialog {
    margin-top: 500px;
    background: transparent;
    .div-title {
      text-align: center;
      font-size: 52px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";
    }
    .div-input {
      margin: 0 auto;
      height: 200px;
      width: 60%;
      padding: 10px 10px;
      background: url("../../../assets/img/camp-div-back.png") no-repeat;
      background-size: 100% 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    p {
      position: relative;
      top: -50px;

      text-align: center;
      font-size: 14px;
      // font-weight: bold;
      color: #999999;
      font-family: "JDZY";
    }
    .div-btn {
      margin: 0 auto;
      margin-top: 80px;
      width: 20%;
      height: 130px;
      background: url("../../../assets/img/camp-back-btn.png") no-repeat;
      background-size: 100% 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      font-size: 32px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";
    }
  }
  /deep/.el-input {
    text-align: center;
    margin: 0 auto;
    width: none !important;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  /deep/ .el-input__inner {
    margin: 0 auto;
    border: 1px solid transparent !important;
    width: 30% !important;
    background: transparent !important;

    font-size: 22px;
    // font-weight: bold;
    color: #fefefe;
    font-family: "JDZY";
  }
}
</style>
<template>
  <div id="minings">
    <div class="minings-top">
      <div class="minings-top-title">
        <span>{{ $t("lang.StarwayAllianceFundPool") }}</span>
        <div>
          <img src="../../../assets/img/image-backjian-egc.png" alt="" />
          <p>
            $EGC:
            {{ Math.floor((getStealAmount / 1000000000000000000) * 100) / 100 }}
          </p>
        </div>
      </div>
      <div class="minings-top-title">
        <span>{{ $t("lang.ActiveFundPool") }}</span>
        <div>
          <img src="../../../assets/img/image-backjian-egc.png" alt="" />
          <p>
            $EGC:
            {{
              Math.floor((getActivityAmount / 1000000000000000000) * 100) / 100
            }}
          </p>
        </div>
      </div>
      <div class="minings-top-title">
        <img
          src="../../../assets/img/netmarkets-back-ss.png"
          alt=""
          @click="titleShow = !titleShow"
        />
      </div>
    </div>
    <div class="minings-bottom" v-if="titleShow">
      {{ $t("lang.Whenwithdrawing") }}
    </div>
    <ul>
      <li
        @click="mineoneClick(index)"
        v-for="(item, index) in dataList"
        :key="index"
      >
        <span
          >{{ item.name }} <br />
          <p>
            <a href="javascript:void(0)"
              >{{ $t("lang.MineCombatPowerRequirements") }}:≥</a
            >{{ item.need_sword }}
          </p>
          <p>
            <a href="javascript:void(0)">{{ $t("lang.Estimatedincome") }}:</a
            >{{ imgList[index].money }}
          </p>
        </span>
        <img
          class="img1"
          v-if="selectIndex != index"
          src="../../../assets/img/image-backkc.png"
          alt=""
        />
        <div v-if="selectIndex === index" @click.stop="minemapClick(item)">
          {{ $t("lang.Choose") }}
        </div>
        <img
          class="img2"
          v-if="selectIndex === index"
          :src="imgList[index].img1"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<script>
//封装调用合约
import { getActivityAmount, getStealAmount } from "../../../abi/index";

//接口请求
import { postCommonmine } from "api/index";

export default {
  name: "Minings",
  data() {
    return {
      //矿场列表
      dataList: [],
      imgList: [
        {
          img1: require("../../../assets/img/minings-back-img1.png"),
          img2: "",
          money: "130~1300",
        },
        {
          img1: require("../../../assets/img/minings-back-img2.png"),
          img2: "",
          money: "980~8200",
        },
        {
          img1: require("../../../assets/img/minings-back-img3.png"),
          img2: "",
          money: "9000~17700",
        },
      ],
      //被选中的矿场
      selectIndex: 0,
      titleShow: false,
      getActivityAmount: 0,
      getStealAmount: 0,
    };
  },
  methods: {
    //矿场列表
    async postCommonmine() {
      await postCommonmine().then((res) => {
        this.dataList = res.data.data;
      });
      this.getActivityAmount = await getActivityAmount();
      this.getStealAmount = await getStealAmount();
    },

    //矿场切换
    mineoneClick(index) {
      this.selectIndex = index;
    },

    //跳转到矿场图页
    minemapClick(item) {
      //加密
      let param1 = encodeURI(JSON.stringify(item));

      this.$router.push({
        path: "/Game/Minemap",
        query: { code: param1 },
      });
    },
  },
  created() {
    //初始化矿场列表
    this.postCommonmine();
  },
};
</script>

<style lang="less" scoped>
#minings {
  // height: 1000px;
  // padding-top: 56px;
  padding: 50px 0;
  padding-top: 100px;

  background: url("../../../assets/img/image-back20.png") no-repeat;
  background-size: 100% 100%;

  ul {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    li {
      height: 800px;
      span {
        margin: 0 auto;
        color: #ffffff;
        font-size: 20px;
        font-family: "JDZY";
        p {
          color: #d1aa31;
          font-size: 18px;
          font-family: "JDZY";
          a {
            color: #ffffff;
            font-size: 18px;
            font-family: "JDZY";
          }
        }
      }
      .img1 {
      }
      .img2 {
        height: 500px;
        width: 500px;
      }
      div {
        position: relative;
        top: 30%;
        margin: 0 auto;
        text-align: center;
        width: 20%;
        padding: 10px 40px;

        font-size: 20px;
        color: #3a3a3b;
        font-family: "JDZY";

        background: url("../../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  ul li:nth-child(1) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      position: relative;
      top: 100px;
    }
  }
  ul li:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      position: relative;
      top: 80px;
    }
  }
  ul li:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
      position: relative;
      top: 100px;
    }
  }
  .minings-top {
    padding: 20px 30px;
    position: absolute;
    top: 80px;

    width: 20%;
    background: url("../../../assets/img/netmarkets-back-coder-border.png")
      no-repeat;
    background-size: 100% 100%;

    display: flex;
    justify-content: space-between;
    .minings-top-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      div {
        margin-top: 10px;
        display: flex;
        img {
          margin: auto 0;
          width: 30px;
          height: 30px;
        }
        p {
          margin: auto 0;
          font-size: 16px;
          color: #ffffff;
          font-family: "JDZY";
        }
      }
    }
  }
  .minings-bottom {
    padding: 20px 30px;
    position: absolute;
    top: 200px;

    width: 20%;
    background: url("../../../assets/img/netmarkets-back-coder-border.png")
      no-repeat;
    background-size: 100% 100%;

    font-size: 16px;
    color: #ffffff;
    font-family: "JDZY";
  }
}
// @media screen and (max-width: 1600px) {
//   .minings-top {
//     padding: 20px 30px;
//     position: absolute;
//     top: 80px;

//     width: 30%;
//     background: url("../../../assets/img/netmarkets-back-coder-border.png")
//       no-repeat;
//     background-size: 100% 100%;

//     display: flex;
//     justify-content: space-between;
//     .minings-top-title {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       span {
//         text-align: center;
//         font-size: 16px;
//         color: #ffffff;
//         font-family: "JDZY";
//       }
//       div {
//         margin-top: 10px;
//         display: flex;
//         img {
//           margin: auto 0;
//           width: 30px;
//           height: 30px;
//         }
//         p {
//           margin: auto 0;
//           font-size: 16px;
//           color: #ffffff;
//           font-family: "JDZY";
//         }
//       }
//     }
//   }
//   .minings-bottom {
//     padding: 20px 30px;
//     position: absolute;
//     top: 200px;

//     width: 20%;
//     background: url("../../../assets/img/netmarkets-back-coder-border.png")
//       no-repeat;
//     background-size: 100% 100%;

//     font-size: 16px;
//     color: #ffffff;
//     font-family: "JDZY";
//   }
// }
</style>
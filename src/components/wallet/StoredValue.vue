<template>
  <div id="storedvalue">
    <div class="wallethttp-center">
      <div class="wallethttp-center-top">
        <img src="../../assets/img/image-backjian-egc.png" alt="" />
        <span>{{ moneyObj.egc_balance }}</span>
        <img src="../../assets/img/image-backjian-met.png" alt="" />
        <span>{{ moneyObj.met_balance }}</span>
        <img src="../../assets/img/netmarkets-busd.png" alt="" />
        <span>{{ moneyObj.busd_balance }}</span>
      </div>
      <div class="wallethttp-center-bottom">
        <div class="wallethttp-center-top-title"></div>
        <div class="wallethttp-center-top-num">
          <div class="wallethttp-center-num-input">
            <img
              src="../../assets/img/image-backjian.png"
              alt=""
              @click="search1Click(0, 'egc')"
            />
            <el-input v-model="search1" placeholder=""></el-input>
            <img
              src="../../assets/img/image-backjia.png"
              alt=""
              @click="search1Click(1, 'egc')"
            />
          </div>
          <div class="wallethttp-center-num-btn" @click="egcClick">
            <span>{{ $t("lang.Authorize") }}</span>
          </div>
        </div>
      </div>
      <div class="wallethttp-center-bottom">
        <div class="wallethttp-center-top-title1"></div>
        <div class="wallethttp-center-top-num">
          <div class="wallethttp-center-num-input">
            <img
              src="../../assets/img/image-backjian.png"
              alt=""
              @click="search1Click(0, 'met')"
            />
            <el-input v-model="search2" placeholder=""></el-input>
            <img
              src="../../assets/img/image-backjia.png"
              alt=""
              @click="search1Click(1, 'met')"
            />
          </div>
          <div class="wallethttp-center-num-btn" @click="metClick">
            <span>{{ $t("lang.Authorize") }}</span>
          </div>
        </div>
      </div>
      <div class="wallethttp-center-bottom">
        <div class="wallethttp-center-top-title2"></div>
        <div class="wallethttp-center-top-num">
          <div class="wallethttp-center-num-input">
            <img
              src="../../assets/img/image-backjian.png"
              alt=""
              @click="search1Click(0, 'busd')"
            />
            <el-input v-model="search3" placeholder=""></el-input>
            <img
              src="../../assets/img/image-backjia.png"
              alt=""
              @click="search1Click(1, 'busd')"
            />
          </div>
          <div class="wallethttp-center-num-btn" @click="busdClick">
            <span>{{ $t("lang.Authorize") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//封装调用合约
import {
  connectMetamask,
  rechargeAuthorization,
  egcRecharge,
  rechargeAuthorizationMet,
  metRecharge,
  rechargeAuthorizationBUSD,
  BUSDRecharge,
} from "../../abi/index";

//接口请求
import { postInfo } from "api/index";

export default {
  name: "StoredValue",
  data() {
    return {
      //余额
      moneyObj: {},

      //1000000000000000000
      //4000000000000000000
      //egc币
      search1: 0,
      //游戏代币
      search2: 0,
      //busd
      search3: 0,
    };
  },
  methods: {
    //初始化
    async init() {
      await connectMetamask();
    },

    //钱包余额
    postInfo() {
      postInfo().then((res) => {
        this.search1 = 0;
        this.search2 = 0;
        this.search3 = 0;
        this.moneyObj = res.data.data;
      });
    },

    //egc充值
    async egcClick() {
      if (this.search1 >= 1) {
        var codemsg = await rechargeAuthorization();
        // alert(codemsg)
        if (codemsg === 1) {
          const code = await egcRecharge(this.search1 + "");
          console.log(code);

          if (Number(code) === 1) {
            await this.postInfo();
            this.$message({
              message: this.$i18n.t("lang.SuccessfulRecharge"),
              type: "success",
            });
          } else {
            this.$message({
              message: this.$i18n.t("lang.Rechargefailed"),
              type: "error",
            });
          }
        }
      } else if (this.search1 === 0) {
        this.$message({
          message: this.$i18n.t("lang.Enteramount"),
          type: "error",
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Enteramountgreaterthan"),
          type: "error",
        });
      }
    },

    //met充值
    async metClick() {
      if (this.search2 >= 1) {
        var codemsg = await rechargeAuthorizationMet();
        // alert(codemsg)
        if (codemsg === 1) {
          const code = await metRecharge(this.search2 + "");
          console.log(code);

          if (Number(code) === 1) {
            await this.postInfo();
            this.$message({
              message: this.$i18n.t("lang.SuccessfulRecharge"),
              type: "success",
            });
          } else {
            this.$message({
              message: this.$i18n.t("lang.Rechargefailed"),
              type: "error",
            });
          }
        }
      } else if (this.search2 === 0) {
        this.$message({
          message: this.$i18n.t("lang.Enteramount"),
          type: "error",
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Enteramountgreaterthan"),
          type: "error",
        });
      }
    },

    async busdClick() {
      if (this.search3 >= 1) {
        var codemsg = await rechargeAuthorizationBUSD();
        // alert(codemsg)
        if (codemsg === 1) {
          const code = await BUSDRecharge(this.search3 + "");
          console.log(code);

          if (Number(code) === 1) {
            await this.postInfo();
            this.$message({
              message: this.$i18n.t("lang.SuccessfulRecharge"),
              type: "success",
            });
          } else {
            this.$message({
              message: this.$i18n.t("lang.Rechargefailed"),
              type: "error",
            });
          }
        }
      } else if (this.search3 === 0) {
        this.$message({
          message: this.$i18n.t("lang.Enteramount"),
          type: "error",
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Enteramountgreaterthan"),
          type: "error",
        });
      }
    },

    //egc币选择
    search1Click(value, text) {
      if (text === "egc") {
        if (value === 0) {
          if (this.search1 > 1) {
            this.search1--;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Minimumrecharge"),
              type: "warning",
            });
          }
        } else {
          if (this.search1 < 1000000000) {
            this.search1++;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Maximumnumberofrecharges"),
              type: "warning",
            });
          }
        }
      } else if (text === "met") {
        if (value === 0) {
          if (this.search2 > 1) {
            this.search2--;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Minimumrecharge"),
              type: "warning",
            });
          }
        } else {
          if (this.search2 < 1000000000) {
            this.search2++;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Maximumnumberofrecharges"),
              type: "warning",
            });
          }
        }
      } else {
        if (value === 0) {
          if (this.search3 > 1) {
            this.search3--;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Minimumrecharge"),
              type: "warning",
            });
          }
        } else {
          if (this.search3 < 1000000000) {
            this.search3++;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Maximumnumberofrecharges"),
              type: "warning",
            });
          }
        }
      }
    },
  },
  created() {
    this.init();
    this.postInfo();
  },
};
</script>

<style lang="less" scoped>
#storedvalue {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 300px;
  .wallethttp-center {
    padding: 20px 20px;

    background: url("../../assets/img/iamge5.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    .wallethttp-center-top {
      padding: 20px 60px;
      background: rgba(0, 0, 1, 0.7);
      border-radius: 20px;
      margin-bottom: 10px;

      display: flex;
      justify-content: center;
      img {
        width: 40px;
        height: 40px;
        margin: 0 15px;
        margin-left: 40px;
      }
      span {
        margin: auto 0;
        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";
      }
    }
    .wallethttp-center-bottom {
      width: 100%;
      height: 49%;
      background: rgba(0, 0, 1, 0.7);
      border-radius: 20px;
      margin: 10px 0px;
      padding: 20px 0;

      display: flex;
      .wallethttp-center-top-title {
        position: relative;
        left: 100px;

        width: 80px;
        height: 40px;
        // padding: 40px 40px;
        // padding-left: 30px;
        padding-top: 30px;
        margin: auto 0;

        background: url("../../assets/img/image-backjian-egc.png") no-repeat;
        background-size: 100% 100%;

        font-size: 20px;
        color: #00e4ff;
        font-family: "JDZY";
      }
      .wallethttp-center-top-title1 {
        position: relative;
        left: 100px;

        width: 80px;
        height: 40px;
        // padding: 40px 40px;
        // padding-left: 30px;
        padding-top: 30px;
        margin: auto 0;

        background: url("../../assets/img/image-backjian-met.png") no-repeat;
        background-size: 100% 100%;

        font-size: 20px;
        color: #00e4ff;
        font-family: "JDZY";
      }
      .wallethttp-center-top-title2 {
        position: relative;
        left: 100px;

        width: 80px;
        height: 40px;
        // padding: 40px 40px;
        // padding-left: 30px;
        padding-top: 30px;
        margin: auto 0;

        background: url("../../assets/img/netmarkets-busd.png") no-repeat;
        background-size: 100% 100%;

        font-size: 20px;
        color: #00e4ff;
        font-family: "JDZY";
      }
      .wallethttp-center-top-num {
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .wallethttp-center-num-input {
          display: flex;
          img {
            margin: 0 10px;
            width: 50px;
            height: 50px;
          }
          /deep/.el-input {
            height: 100%;
            margin: auto 0;
            display: flex;
          }
          /deep/.el-input__inner {
            // flex: 1;
            width: 150px;
            height: 48px;
            border: none;
            font-size: 20px;
            font-family: "JDZY";
            background: transparent;
            background: url("../../assets/img/image7.png") no-repeat;
            background-size: 100% 100%;

            margin: auto 0;
          }
        }
        .wallethttp-center-num-btn {
          display: flex;
          justify-content: center;
          span {
            margin-top: 20px;
            padding: 10px 60px;
            background: url("../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;

            font-size: 20px;
            font-weight: bold;
            color: #3a3a3b;
            font-family: "JDZY";
          }
        }
      }
    }
  }
}
</style>
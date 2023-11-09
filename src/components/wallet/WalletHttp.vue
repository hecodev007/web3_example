<template>
  <div id="wallethttp">
    <div class="wallethttp-center">
      <div class="wallethttp-center-top">
        <div class="wallethttp-center-top-title">{{ $t("lang.Wallets") }}</div>
        <ul>
          <div v-for="(item, index) in options" :key="index">
            <li>
              <p>{{ item.name }}</p>
              <img
                src="../../assets/img/image-backjian-egc.png"
                alt=""
                class="img-tow"
                v-if="item.name === 'EGC'"
              />
              <img
                src="../../assets/img/image-backjian-met.png"
                alt=""
                class="img-tow"
                v-if="item.name === 'MET'"
              />
              <img
                src="../../assets/img/netmarkets-busd.png"
                alt=""
                class="img-tow"
                v-if="item.name === 'BUSD'"
              />
              <p class="p-tow">
                <span>{{ Math.floor((tokenBalance[index] / 1000000000000000000) * 10) / 10 }}</span>
              </p>
            </li>
          </div>
        </ul>
      </div>
      <div class="wallethttp-center-top">
        <div class="wallethttp-center-top-title">
          {{ $t("lang.InGameTokens") }}
        </div>
        <ul>
          <div v-for="(item, index) in options" :key="index">
            <li>
              <p>{{ item.name }}</p>
              <img
                src="../../assets/img/image-backjian-egc.png"
                alt=""
                class="img-tow"
                v-if="item.name === 'EGC'"
              />
              <img
                src="../../assets/img/image-backjian-met.png"
                alt=""
                class="img-tow"
                v-if="item.name === 'MET'"
              />
              <img
                src="../../assets/img/netmarkets-busd.png"
                alt=""
                class="img-tow"
                v-if="item.name === 'BUSD'"
              />
              <p class="p-tow">
                <span>{{ item.num }}</span>
              </p>
            </li>
            <a
              href="javascript:void(0)"
              @click="withdrawClick(item.name, item.num)"
              >{{ $t("lang.Incomewallet") }}</a
            >
            <p>{{ $t("lang.Handlingfee") }}</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//封装调用合约
import {
  connectMetamask,
  withdrawFee,
  busdtokenBalance,
  egctokenBalance,
  mettokenBalance,
} from "../../abi/index";

//接口请求
import { postInfo, postWithdraw } from "api/index";

export default {
  name: "WalletHttp",
  data() {
    return {
      titleList: ["BUSD", "EGC", "MET"],
      moneyList: [],

      tokenBalance: [],

      options: [],

      Metamask: "",
    };
  },
  methods: {
    //初始化
    async init() {
      const Metamask = await connectMetamask();
      this.Metamask = Metamask + "";
    },

    //我的余额
    async postInfo() {
      await postInfo().then((res) => {
        this.options = [];
        this.moneyList = [];

        let obj = res.data.data;
        for (var k in obj) {
          this.moneyList.push(obj[k]);
        }

        const data = this.titleList.length;
        for (let i = 0; i < data; i++) {
          let a = {};
          a.name = this.titleList[i];
          a.num = this.moneyList[i];
          this.options.push(a);
        }
      });
      this.tokenBalance = [
        await busdtokenBalance(),
        await egctokenBalance(),
        await mettokenBalance(),
      ];
    },

    //提现
    withdrawClick(name, num) {
      var type = 0;
      if (name === "BUSD") {
        type = 3;
      } else if (name === "EGC") {
        type = 1;
      } else if (name === "MET") {
        type = 2;
      }
      if (num > 0) {
        if (type === 3  && num < 100) {
          this.$message({
            message: this.$i18n.t("lang.Minimumperwithdrawal"),
            type: "error",
          });
          return;
        }
        if (type === 2  && num < 100) {
          this.$message({
            message: this.$i18n.t("lang.Minimumperwithdrawal"),
            type: "error",
          });
          return;
        }
        if (type === 1 && num < 500) {
          this.$message({
            message: this.$i18n.t("lang.Minimumperwithdrawals"),
            type: "error",
          });
          return;
        }
        postWithdraw(this.Metamask, num + "", type).then(async (res) => {
          if (res.data.code === 200) {
            // let fee = res.data.data.fee;
            // let txid = res.data.data.txid;

            // const code = await withdrawFee(txid, fee);

            await this.postInfo();

            // if (code === 1) {
            this.$message({
              message: this.$i18n.t("lang.Withdrawalsuccess"),
              type: "success",
            });
            // }
          } else {
            this.$message({
              message: res.data.message,
              type: "error",
            });
          }
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Insufficientbalance"),
          type: "error",
        });
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
#wallethttp {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 200px;
  .wallethttp-center {
    padding: 20px 20px;

    background: url("../../assets/img/iamge5.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .wallethttp-center-top {
      width: 100%;
      height: 40%;
      padding-bottom: 20px;
      margin-bottom: 20px;

      background: rgba(0, 0, 1, 0.7);
      border-radius: 20px;

      display: flex;
      .wallethttp-center-top-title {
        width: 10px;
        height: 70%;
        padding: 40px 30px;
        padding-left: 20px;
        padding-top: 40px;
        margin: 5px 5px;
        position: relative;
        top: 0;
        left: 0;

        background: url("../../assets/img/icon-left.png") no-repeat;
        background-size: 100% 100%;

        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";
      }
      ul {
        margin: 20px auto;
        height: 94%;
        width: 60%;
        display: flex;
        justify-content: space-between;

        flex-wrap: wrap;
        div {
          text-align: center;
          width: 26%;

          li {
            cursor: pointer;
            // position: relative;
            // animation: myfirst 2s;

            margin: 20px 10px;
            height: 200px;
            padding: 20px 10px;
            padding-bottom: 10px;

            background: url("../../assets/img/image6.png") no-repeat;
            background-size: 100% 100%;

            display: flex;
            flex-direction: column;
            p {
              margin: 0 20px;
              text-align: center;
              height: 20%;

              font-size: 12px;
              font-weight: bold;
              color: #ffffff;
              font-family: "JDZY";

              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
            }
            .img-tow {
              padding: 0 20px;
              width: 50px;
              height: 50px;
              margin: auto auto;
            }
            .p-tow {
              display: flex;
              justify-content: center;
              span {
                font-size: 14px;
                font-weight: normal;
                color: #ffffff;
                font-family: "JDZY";
                margin-bottom: 5px;

                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              }
            }
          }
          a {
            margin-top: 10px;
            padding: 10px 50px;
            text-align: center;
            background: url("../../assets/img/icon-image11.png") no-repeat;
            background-size: 100% 100%;

            color: #fefefe;
            font-weight: 18px;
            font-weight: bold;
            font-family: "JDZY";
            margin-bottom: 5px;
          }
          p {
            margin-top: 20px;
            color: #ffffff;
            font-size: 14px;
            font-family: "JDZY";
          }
        }
      }
    }
  }
}
</style>
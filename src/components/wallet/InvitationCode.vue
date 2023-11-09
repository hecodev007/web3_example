<template>
  <div id="invitationcode">
    <div class="wallethttp-center">
      <div class="wallethttp-center-top">
        <span>{{ $t("lang.Friend") }}：{{ dataList.length }}</span>
        <span
          >{{ $t("lang.Splitaccounts") }}：{{
            money / 1000000000000000000
          }}</span
        >
      </div>
      <div class="wallethttp-center-bottom">
        <div class="wallethttp-center-top-title">
          {{ $t("lang.Friendaddress") }}
        </div>
        <ul>
          <li v-for="item in dataList" :key="item">
            {{ item.substr(0, 4) + "****" + item.substr(38) }}
          </li>
        </ul>
      </div>
      <div class="wallethttp-center-bottom-center">
        <div class="wallethttp-center-bottom-my">
          <p>{{ $t("lang.Myinvitationcode") }}</p>
          <div class="ceneter-left-bottom-input">
            <el-input v-model="search1" placeholder=""></el-input>
            <span @click="copy">{{ $t("lang.Copy") }}</span>
          </div>
          <div class="ceneter-left-bottom-image">
            <div class="ceneter-left-bottom-image-left">
              <img src="../../assets/img/twitter.png" alt="" />
              <img src="../../assets/img/anonymous-letter.png" alt="" />
            </div>
            <div class="ceneter-left-bottom-image-right">
              {{ $t("lang.Inviteyourfriendstojointhegame") }}
            </div>
          </div>
        </div>
        <div class="wallethttp-center-bottom-my">
          <p>{{ $t("lang.Myrecommenders") }}</p>
          <div class="ceneter-left-bottom-input">
            <el-input v-model="getOneUpper" placeholder=""></el-input>
            <!-- <span @click="addClick">{{ $t("lang.Bind") }}</span> -->
          </div>
          <span class="ceneter-left-bottom-input-span"
            >{{ $t("lang.Hint") }}：<br />
            {{ $t("lang.Pleaseextract") }}</span
          >
        </div>
        <div class="wallethttp-center-bottom-btn" @click="childClick">
          {{ $t("lang.Viewrewards") }}
        </div>
      </div>
    </div>
    <div class="wallethttp-bottom"></div>
    <el-dialog :visible.sync="dialogVisible" width="450px">
      <div class="wallethttp-dia-bottom-my">
        <p>{{ $t("lang.Receivaninvitationtobind") }}</p>
        <el-input
          v-model="dataQuery"
          placeholder=""
          class="input-coder"
        ></el-input>
        <div class="coder-syq-span">
          <span @click="addClick" class="span1">{{ $t("lang.Bind") }}</span>
          <span @click="dialogVisible = false" class="span2">{{
            $t("lang.Cancel")
          }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//封装调用合约
import {
  connectMetamask,
  friendAddress,
  addInviter,
  user_invite_reward,
  getOneUpper,
} from "../../abi/index";

export default {
  name: "InvitationCode",
  data() {
    return {
      dataList: [],
      money: 0,

      search1: "",
      dialogVisible: false,
      dataQuery: "",
      getOneUpper: "",
      invite: "0",
    };
  },
  methods: {
    //初始化
    async init() {
      const Metamask = await connectMetamask();
      // let param1 = encodeURI(JSON.stringify(Metamask))
      // alert(param1)
      this.search1 = window.location.host + "/#/Wallet?code=" + Metamask + "";

      const data = await friendAddress();
      console.log(data);
      this.dataList = data;

      const money = await user_invite_reward();
      console.log(money);
      this.money = money;
    },

    childClick() {
      this.$emit("childClick", 1);
    },

    //复制
    copy() {
      var input = document.createElement("input"); // js创建一个input输入框
      input.value = this.search1; // 将需要复制的文本赋值到创建的input输入框中

      document.body.appendChild(input); // 将输入框暂时创建到实例里面
      input.select(); // 选中输入框中的内容
      document.execCommand("Copy"); // 执行复制操作
      this.$message({
        message: this.$i18n.t("lang.Copysuccessfully"),
        type: "success",
      });
      document.body.removeChild(input);
    },

    //我的推荐人绑定
    async addClick() {
      const code = await addInviter(this.dataQuery);
      console.log(code);

      this.dialogVisible = false;
      if (Number(code) === 1) {
        this.$message({
          message: this.$i18n.t("lang.Bindingsucceeded"),
          type: "success",
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Bindfailed"),
          type: "error",
        });
      }
    },
  },
  async created() {
    // setInterval(async () => {
    //   this.invite = window.sessionStorage.getItem("invite");
    // }, 1000);
    await this.init();

    this.dataQuery = this.$route.query.code;
    if (
      this.dataQuery != undefined &&
      window.sessionStorage.getItem("token") != null
    ) {
      this.dialogVisible = true;
    }

    this.getOneUpper = await getOneUpper();
    console.log(this.getOneUpper);
  },
};
</script>

<style lang="less" scoped>
#invitationcode {
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
      span {
        margin: auto 30px;
        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";
      }
    }
    .wallethttp-center-bottom {
      width: 100%;
      height: 49%;
      padding-bottom: 20px;

      background: rgba(0, 0, 1, 0.7);
      border-radius: 20px;
      margin-bottom: 10px;

      display: flex;
      .wallethttp-center-top-title {
        width: 10px;
        height: 70%;
        padding: 30px 30px;
        padding-left: 30px;
        padding-top: 30px;
        margin: 10px 10px;
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
        margin: 20px 0;
        height: 94%;
        display: flex;
        // justify-content: space-evenly;

        flex-wrap: wrap;
        li {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          width: 200px;
          margin: 20px 20px;
          font-size: 20px;
          color: #ffffff;
          font-family: "JDZY";
        }
      }
    }
    .wallethttp-center-bottom-center {
      display: flex;

      .wallethttp-center-bottom-my {
        width: 48%;
        // height: 200px;
        text-align: center;
        padding: 20px 0;
        margin-right: 10px;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        p {
          margin-top: 20px;
          font-size: 20px;
          color: #ffffff;
          font-family: "JDZY";
        }
        .ceneter-left-bottom-input {
          // position: relative;
          // animation: myfirsts 2s;
          width: 70%;
          margin: 0 auto;
          margin-top: 20px;

          display: flex;
          /deep/.el-input__inner {
            flex: 1;
            border: none;
            background: transparent;
            background: url("../../assets/img/image7.png") no-repeat;
            background-size: 100% 100%;

            margin: auto 0;
            font-size: 20px;
            font-family: "JDZY";
          }
          span {
            cursor: pointer;
            text-align: center;
            width: 50%;
            margin-left: 10px;
            color: #3a3a3b;
            font-weight: bold;
            font-size: 20px;
            font-family: "JDZY";
            border: none;
            background: url("../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 125%;
            background-position-y: -5px;

            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
        .ceneter-left-bottom-image {
          border-top: 1px solid #626262;
          margin: 0 10%;
          margin-top: 20px;
          padding-top: 25px;
          display: flex;
          justify-content: center;
          .ceneter-left-bottom-image-left {
            display: flex;
            // width: 20%;
            img {
              margin: 0 20px;
              width: 60px;
              height: 60px;
            }
          }
          .ceneter-left-bottom-image-right {
            flex: 1;
            font-size: 16px;
            color: #ffffff;
            font-family: "JDZY";
          }
        }
        .ceneter-left-bottom-input-span {
          border-top: 1px solid #626262;
          margin: 0 10%;
          margin-top: 20px;
          padding-top: 25px;
          text-align: center;
          font-size: 16px;
          color: #626262;
          font-family: "JDZY";
        }
      }
      .wallethttp-center-bottom-btn {
        cursor: pointer;

        text-align: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5px 10px;
        padding: 0 3%;
        font-size: 24px;
        font-weight: bold;
        color: #3a3a3b;

        background: url("../../assets/img/image-back19.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .wallethttp-bottom {
    height: 1000px;
  }
  /deep/.el-dialog__body {
    padding: 0 0;
  }
  /deep/.el-dialog__header {
    display: none;
  }
  /deep/.el-input__inner {
    margin-bottom: 10px;
    width: 80% !important;
    border: none;
    background: transparent;
    background: url("../../assets/img/image7.png") no-repeat !important;
    background-size: 100% 100% !important;

    margin: auto 0;
    font-size: 20px;
    font-family: "JDZY";
  }
  /deep/.el-dialog {
    // height: 700px;
    // margin-right: 8%;
    margin-top: 33vh !important;
    border-radius: 21px !important;
    border: 1px solid #999;

    // background: transparent;

    .wallethttp-dia-bottom-my {
      width: 100%;
      text-align: center;
      margin-right: 10px;

      background: rgba(0, 0, 1, 1);
      border-radius: 20px;

      display: flex;
      flex-direction: column;
      p {
        margin: 20px 0;
        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";
      }

      .input-coder {
        margin-bottom: 20px;
        /deep/.el-input__inner {
          margin-bottom: 10px;
          width: 80% !important;
          border: none;
          background: transparent;
          background: url("../../assets/img/image7.png") no-repeat !important;
          background-size: 100% 100% !important;

          margin: auto 0;
          font-size: 20px;
          font-family: "JDZY";
        }
      }
      .coder-syq-span {
        margin: 0 30px;
        padding: 20px 0;
        border-top: 2px solid #999;
        display: flex;
        justify-content: space-evenly;
        .span1 {
          cursor: pointer;
          text-align: center;
          width: 22%;
          margin-left: 10px;
          padding: 5px 0;
          color: #3a3a3b;
          font-weight: bold;
          font-size: 20px;
          font-family: "JDZY";
          border: none;
          background: url("../../assets/img/btn-image2.png") no-repeat;
          background-size: 100% 125%;
          background-position-y: -5px;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .span2 {
          cursor: pointer;
          text-align: center;
          width: 22%;
          margin-left: 10px;
          padding: 5px 0;
          color: #ffffff;
          font-weight: bold;
          font-size: 20px;
          font-family: "JDZY";
          border: none;
          background: url("../../assets/img/btn-image1.png") no-repeat;
          background-size: 100% 125%;
          background-position-y: -5px;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
  /deep/.el-dialog__headerbtn {
    display: none;
  }
}
</style>
<template>
  <div id="buy">
    <span>据结束 天 时 分 秒</span>
    <div class="privateplacements-center-back">
      <p>软顶-硬顶 1000-2000BNB</p>
      <div class="privateplacements-back-progress">
        <el-progress
          color="#5bccee"
          :percentage="50"
          status="success"
          :text-inside="true"
        ></el-progress>
      </div>
      <div class="privateplacements-back-title">
        <div class="privateplacements-title-left">
          <span>我的余额 0 BNB</span>
        </div>
        <div class="privateplacements-title-right">
          <div>
            <span>兑换比例</span>
            <p>1 BNB=500 Met</p>
          </div>
          <div>
            <span>最小</span>
            <p>0.1 BNB</p>
          </div>
          <div>
            <span>最大</span>
            <p>2 BNB</p>
          </div>
        </div>
      </div>
      <span class="span-title">兑换数量</span>
      <div class="privateplacements-back-btn">
        <el-input v-model="input" placeholder="兑换BNB金额"></el-input>
        <div class="privateplacements-btn-max">
          <span>最大</span>
        </div>
      </div>
      <div class="privateplacements-btn-max">
        <span>购买</span>
      </div>
    </div>
    <span class="privateplacements-center-co">购买规则：</span>
    <p>1.最高发行2000BNB</p>
    <p>2.每个地址可购买0.1-2BNB</p>
    <p>3.购买结束后，请手动领取MET</p>
    <p>4.购买的MET在募集后可立即领取50%，剩下50%在随后4周内领取</p>
  </div>
</template>

<script>
export default {
  name: "Buy",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="less" scoped>
#buy {
  span {
    display: flex;
    justify-content: center;
    margin: 30px 0;

    color: #ffffff;
    font-size: 24px;
    font-family: "JDZY";
  }
  .privateplacements-center-back {
    padding: 30px 50px;
    background: url("../../assets/img/privateplacements-center-back.png")
      no-repeat;
    background-size: 100% 100%;
    p {
      margin-bottom: 20px;
      color: #ffffff;
      font-size: 18px;
      font-family: "JDZY";
    }
    .privateplacements-back-progress {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      /deep/.el-progress-bar__outer {
        height: 25px !important;
        background-color: #52575e;
      }
    }
    .privateplacements-back-title {
      margin-top: 80px;
      width: 100%;
      background: url("../../assets/img/privateplacements-back-title.png")
        no-repeat;
      background-size: 100% 100%;
      padding: 5px 0;

      display: flex;
      justify-content: space-between;
      .privateplacements-title-left {
        width: 40%;

        display: flex;
        justify-content: space-around;
        span {
          color: #66dbf7;
          font-size: 16px;
          font-family: "JDZY";
        }
      }
      .privateplacements-title-right {
        padding-right: 50px;
        width: 60%;

        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            margin: 0 0;
            margin-bottom: 10px;
            color: #66dbf7;
            font-size: 16px;
            font-family: "JDZY";
          }
          p {
            margin: 0 0;
            color: #66dbf7;
            font-size: 18px;
            font-family: "JDZY";
          }
        }
      }
    }
    .span-title {
      margin-top: 80px;
      margin-bottom: 40px;
      color: #66dbf7;
      font-size: 24px;
      font-family: "JDZY";
    }
    .privateplacements-back-btn {
      height: 68px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .el-input {
        height: 100%;
        width: 70%;
        color: #000 !important;
      }
      /deep/.el-input__inner {
        height: 100%;
        border: none;
        background: #69dcf6;
        color: #000 !important;
        font-size: 18px;
      }
      .privateplacements-btn-max {
        position: relative;
        top: -35px;

        width: 30%;
        height: 120px;
        line-height: 120px;
        text-align: center;

        background: url("../../assets/img/privateplacements-btn.png") no-repeat;
        background-size: 100% 100%;
        span {
          padding: 0 0;
          margin: 0 0;
          margin-top: 10px;
          margin-right: 15px;
          color: #ffffff;
          font-size: 18px;
          font-family: "JDZY";
        }
      }
    }
    .privateplacements-btn-max {
      width: 30%;
      height: 120px;
      line-height: 120px;
      text-align: center;

      background: url("../../assets/img/privateplacements-btn.png") no-repeat;
      background-size: 100% 100%;
      span {
        padding-top: 10px;
        margin: 0 0;
        margin-top: 10px;
        margin-right: 15px;
        color: #ffffff;
        font-size: 18px;
        font-family: "JDZY";
      }
    }
  }
  .privateplacements-center-co {
    display: flex;
    justify-content: flex-start;
    margin: 40px 0;

    color: #ffffff;
    font-size: 20px;
    font-family: "JDZY";
  }
  p {
    margin: 10px 0;
    color: #ffffff;
    font-size: 18px;
    font-family: "JDZY";
  }
}
</style>
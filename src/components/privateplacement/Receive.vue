<template>
  <div id="receive">
    <div class="privateplacements-center-title">
      <div class="privateplacements-center-title-li">
        <span>代币余额</span>
        <p>1000 MET</p>
      </div>
      <div class="privateplacements-center-title-li">
        <span>可领取余额</span>
        <p>500 MET</p>
      </div>
    </div>
    <div class="privateplacements-center-back">
      <p>领取时间 7 天 30 时 30 分</p>
      <div class="privateplacements-back-btn">
        <div class="privateplacements-btn-text">
          <span>可领取</span>
          <span>500 MET</span>
        </div>
        <div class="privateplacements-btn-max">
          <span>领取</span>
        </div>
      </div>
    </div>
    <span class="privateplacements-center-co">领取规则；</span>
    <p>1.$MET在预售结束后可领取</p>
    <p>2.$MET首次释放50%，剩余部分每周释放总量的12.5%</p>
    <p>3.领取代币会自动到达钱包</p>
    <p>4.MET合约地址：0x.....</p>
  </div>
</template>

<script>
export default {
  name: "Receive",
  data() {
    return {
        
    };
  },
};
</script>

<style lang="less" scoped>
#receive {
  padding-bottom: 320px;
  .privateplacements-center-title {
    margin: 50px 0;
    margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    .privateplacements-center-title-li {
      display: flex;
      flex-direction: column;
      span {
        color: #ffffff;
        font-size: 24px;
        font-family: "JDZY";
        margin: 10px 0;
      }
      p {
        color: #ffffff;
        font-size: 16px;
        font-family: "JDZY";
      }
    }
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
    .privateplacements-back-btn {
      height: 68px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .privateplacements-btn-text {
        border-radius: 5px;
        height: 100%;
        width: 70%;
        color: #000 !important;

        background: #69dcf6;
        font-size: 18px;

        display: flex;
        justify-content: space-around;
        span {
          margin: auto 0;
          color: #000;
          font-size: 18px;
          font-family: "JDZY";
          font-weight: bold;
        }
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
          position: relative;
          top: 10px;

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
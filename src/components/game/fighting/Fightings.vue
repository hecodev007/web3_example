<template>
  <div id="fightings">
    <!-- <div class="levels-center-num">
      <div class="levels-center-div">
        <img src="../../../assets/img/levels-energy.png" alt="" />
        <span>1119</span>
      </div>
    </div>
    <div class="fightings-center">
      <div class="fightings-center-list1" @click="levelClick(1)"></div>
      <div class="fightings-center-list2" @click="levelClick(2)"></div>
      <div class="fightings-center-list3" @click="levelClick(3)"></div>
      <div class="fightings-center-list4" @click="levelClick(4)"></div>
      <div class="fightings-center-list5" @click="levelClick(5)"></div>
      <div class="fightings-center-list6" @click="levelClick(6)"></div>
      <ul>
        <li>
          <span>M71{{ $t("lang.Planet") }}</span>
          <p>{{ $t("lang.Combatpowers") }}：18503</p>
        </li>
        <li>
          <span>M72{{ $t("lang.Planet") }}</span>
          <p>{{ $t("lang.Combatpowers") }}：18503</p>
        </li>
        <li>
          <span>M73{{ $t("lang.Planet") }}</span>
          <p>{{ $t("lang.Combatpowers") }}：18503</p>
        </li>
        <li>
          <span>M74{{ $t("lang.Planet") }}</span>
          <p>{{ $t("lang.Combatpowers") }}：18503</p>
        </li>
        <li>
          <span>M75{{ $t("lang.Planet") }}</span>
          <p>{{ $t("lang.Combatpowers") }}：18503</p>
        </li>
        <li>
          <span>M76{{ $t("lang.Planet") }}</span>
          <p>{{ $t("lang.Combatpowers") }}：18503</p>
        </li>
      </ul>
    </div> -->

    <div style="flex-direction: row; display: flex">
      <div style="width: 800%; height: 900px">
        <iframe
          ref="unityIframe"
          src="/Metawars_H5_Go/index.html"
          frameborder="0"
          style="width: 100%; height: 100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fightings",
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("message", this.vueSendToUnity);
  },
  methods: {
    levelClick(value) {
      this.$router.push({
        path: "/Game/Level",
        query: { id: value },
      });
    },
    // unityWatch(e) {
    //   // console.log(
    //   //   "unityWatch方法调用 e==" + e.data.guid + "    event=" + e.data.event
    //   // );
    //     this.vueSendToUnity();
    // },

    vueSendToUnity() {
      // console.log("coder-syq--------------------------------------------");
      //window.sessionStorage.getItem('token')
      // window.sessionStorage.setItem('coder-token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJpc3MiOiIiLCJhdWQiOiIiLCJpYXQiOjE2NTQ0OTQ5ODQsIm5iZiI6MTY1NDQ5NDk4NCwiZXhwIjoxNjY0NDA5Mzg0fQ.FcJJxTtTi92yuU7fE2sQrSsRi55JM9KnNu-yEqOK-n8' )
      const codertoken = window.sessionStorage.getItem("token");

      this.$refs.unityIframe.contentWindow.sendMsgToUnity(codertoken);
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
#fightings {
  padding-top: 56px;
  padding-bottom: 100px;

  background: url("../../../assets/img/image-back23.png") no-repeat;
  background-size: 100% 100%;
  /deep/ #unity-container {
    width: 100%;
  }
  /deep/ .unity-canvas {
    width: 100% !important;
  }
  .levels-center-num {
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    .levels-center-div {
      margin-top: 50px;
      width: 90px;
      padding: 5px 5px;
      display: flex;
      justify-content: space-evenly;

      background: url("../../../assets/img/levels-back.png") no-repeat;
      background-size: 100% 100%;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        color: #ffffff;
        font-size: 18px;
        font-family: "JDZY";
      }
    }
  }
  .fightings-center {
    height: 100%;
    width: 80%;
    height: 700px;
    margin: 150px auto;
    margin-bottom: 0;

    background: url("../../../assets/img/iamge-fightings.png") no-repeat;
    background-size: 100% 100%;
    .fightings-center-list1 {
      position: absolute;
      top: 310px;
      left: 9%;

      border-radius: 50%;
      width: 300px;
      height: 300px;
      // background: #ffffff;
      opacity: 0.5;
    }
    .fightings-center-list2 {
      position: absolute;
      top: 600px;
      left: 31%;

      border-radius: 50%;
      width: 200px;
      height: 200px;
      // background: #ffffff;
      opacity: 0.5;
    }
    .fightings-center-list3 {
      position: absolute;
      top: 370px;
      left: 40%;

      border-radius: 50%;
      width: 100px;
      height: 100px;
      // background: #ffffff;
      opacity: 0.5;
    }
    .fightings-center-list4 {
      position: absolute;
      top: 500px;
      left: 50%;

      border-radius: 50%;
      width: 400px;
      height: 400px;
      // background: #ffffff;
      opacity: 0.5;
    }
    .fightings-center-list5 {
      position: absolute;
      top: 240px;
      left: 78%;

      border-radius: 50%;
      width: 230px;
      height: 230px;
      // background: #ffffff;
      opacity: 0.5;
    }
    .fightings-center-list6 {
      position: absolute;
      top: 200px;
      left: 58%;

      border-radius: 50%;
      width: 150px;
      height: 150px;
      // background: #ffffff;
      opacity: 0.5;
    }
    ul {
      li {
        width: 100px;
        display: flex;
        flex-direction: column;
        span {
          padding: 5px 10px;
          text-align: center;

          font-size: 18px;
          color: #3a3a3b;
          font-family: "JDZY";

          background: url("../../../assets/img/icon-imagef.png") no-repeat;
          background-size: 100% 100%;
        }
        p {
          margin-top: 10px;
          text-align: center;
          font-size: 16px;
          color: #ffffff;
          font-family: "JDZY";
        }
      }
    }
    ul li:nth-child(1) {
      position: relative;
      top: 250px;
      left: 20%;
    }
    ul li:nth-child(2) {
      position: relative;
      top: 450px;
      left: 40%;
    }
    ul li:nth-child(3) {
      position: relative;
      top: 80px;
      left: 47%;
    }
    ul li:nth-child(4) {
      position: relative;
      top: 320px;
      left: 78%;
    }
    ul li:nth-child(5) {
      margin-left: 20px;
      position: relative;
      top: -110px;
      left: 100%;
    }
    ul li:nth-child(6) {
      position: relative;
      top: -240px;
      left: 50%;
    }
  }
  /deep/#unity-canvas {
    width: 1400px !important;
  }
}
</style>
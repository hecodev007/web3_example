<template>
  <div id="combatreas">
    <div class="levels-center-num">
      <div class="levels-center-div">
        <img src="../../../assets/img/levels-energy.png" alt="" />
        <span>1119</span>
      </div>
    </div>
    <div class="levels-center">
      <div class="levels-center-back">
        <div class="levels-center-back-top">
          <div class="levels-center-back-top-left">
            <span>M78{{ $t("lang.Planet") }}</span>
            <span>{{ $t("lang.Combatpower") }}：7789</span>
          </div>
          <div class="levels-center-back-top-right">
            <ul>
              <li v-for="item in 5" :key="item">
                <img src="../../../assets/img/A.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div class="levels-center-back-bottom">
          <div class="levels-center-back-bottom-left">
            <ul>
              <li v-for="item in 3" :key="item">
                <img src="../../../assets/img/levels-back-me.png" alt="" />
              </li>
            </ul>
          </div>
          <div class="levels-center-back-bottom-right">
            <div class="levels-center-back-right-role">
              <img src="../../../assets/img/home-back3.png" alt="" />
            </div>
            <div class="levels-center-back-right-btn">
              <div>
                <span @click="rolebodyClick">{{ $t("lang.Body") }}</span>
                <span @click="RoleconsumeClick">{{ $t("lang.Consume") }}</span>
              </div>
              <p>{{ $t("lang.Zoomwithexpandbox") }}</p>
            </div>
          </div>
        </div>
        <div class="levels-center-back-btn">
          <div>
            <img src="../../../assets/img/levels-energy.png" alt="" />
            <a href="javascript:void(0)">12</a>
          </div>
          <span>{{ $t("lang.Gotowar") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CombatReas",
  data() {
    return {
     
    };
  },
  methods: {
    //机体跳转
    rolebodyClick() {
      this.$router.push({
        path: "/Game/Rolebody",
        query: { id: "1" },
      });
    },

    //消耗品跳转
    RoleconsumeClick() {
      this.$router.push({
        path: "/Game/Roleconsume",
        query: { id: "11" },
      });
    },
  },
};
</script>

<style lang="less" scoped>
#combatreas {
  padding-top: 56px;
  padding-bottom: 150px;

  background: url("../../../assets/img/levels-back-image.png") no-repeat;
  background-size: 100% 100%;
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
  .levels-center {
    width: 80%;
    margin: 150px auto;
    margin-bottom: 0;

    background: url("../../../assets/img/image-back24.png") no-repeat;
    background-size: 100% 100%;
    .levels-center-back {
      padding: 30px 30px;
      margin: 3px 3px;
      height: 100%;

      background: url("../../../assets/img/levels-back-center.png") no-repeat;
      background-size: 100% 100%;

      display: flex;
      flex-direction: column;
      .levels-center-back-top {
        display: flex;
        .levels-center-back-top-left {
          padding: 20px 20px;
          margin-right: 40px;
          flex: 1;
          background: url("../../../assets/img/levels-back-title.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          justify-content: space-between;
          span {
            color: #ffffff;
            font-size: 20px;
            font-family: "JDZY";
          }
        }
        .levels-center-back-top-right {
          width: 30%;
          ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            li {
              padding: 20px 20px;
              background: url("../../../assets/img/levels-back-d.png") no-repeat;
              background-size: 100% 100%;
              img {
                width: 20px;
                height: 100%;
              }
            }
          }
        }
      }
      .levels-center-back-bottom {
        padding-top: 50px;

        display: flex;
        justify-content: space-between;
        .levels-center-back-bottom-left {
          flex: 1;
          ul {
            width: 100%;
            height: 100%;
            display: flex;
            // justify-content: center;
            li {
              margin: 0 10px;
              width: 25%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .levels-center-back-bottom-right {
          text-align: right;
          width: 50%;

          display: flex;
          flex-direction: column;
          .levels-center-back-right-role {
            flex: 1;
            img {
              height: 100%;
              width: 100%;
            }
          }
          .levels-center-back-right-btn {
            height: 20%;
            text-align: center;
            div {
              display: flex;
              justify-content: center;
              span {
                margin: 0 30px;
                padding: 10px 20px;
                color: #3a3a3b;
                font-size: 20px;
                font-weight: bold;
                font-family: "JDZY";

                background: url("../../../assets/img/btn-image2.png") no-repeat;
                background-size: 100% 100%;
              }
            }
            p {
              margin-top: 20px;
              color: #d1aa31;
              font-size: 18px;
              font-weight: bold;
              font-family: "JDZY";
            }
          }
        }
      }
      .levels-center-back-btn {
        position: relative;
        bottom: -45px;
        text-align: center;

        display: flex;
        flex-direction: column;
        div {
          display: flex;
          justify-content: center;
          img {
            color: #d1aa31;
            width: 20px;
            height: 20px;
          }
          a {
            color: #d1aa31;
            font-size: 18px;
            font-family: "JDZY";
          }
        }
        span {
          width: 8%;
          margin: 0 auto;
          margin-top: 10px;
          padding: 10px 20px;
          color: #3a3a3b;
          font-size: 20px;
          font-weight: bold;
          font-family: "JDZY";

          background: url("../../../assets/img/btn-image2.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
<template>
  <!-- 动态市场 -->
  <div id="dynamic">
    <div class="playermarkets-ceneter">
      <div class="playermarkets-ceneter-left">
        <div class="playermarkets-ceneter-left-bottom">
          <a href="javascript:void(0)">{{ $t("lang.Recentlysold") }}</a>
          <ul>
            <li v-for="item in 6" :key="item">
              <p>{{ $t("lang.Combatpowers") }}</p>
              <img src="../../assets/img/image-wuqi.png" alt="" class="img-tow" />
              <p class="p-tow">
                <img src="../../assets/img/icon-image1.png" alt="" />
                <span>8888</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="playermarkets-ceneter-right">
        <div class="playermarkets-ceneter-right-bottom">
          <a href="javascript:void(0)">{{ $t("lang.Newstockarrival") }}</a>
          <ul>
            <li v-for="item in 15" :key="item">
              <p>{{ $t("lang.Combatpowers") }}</p>
              <img src="../../assets/img/image-wuqi.png" alt="" class="img-tow" />
              <p class="p-tow">
                <img src="../../assets/img/icon-image1.png" alt="" />
                <span>8888</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dynamic",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
#dynamic {
  width: 80%;
  margin: 0 auto;
  .playermarkets-ceneter {
    padding: 20px 20px;
    // margin-top: 50px;
    // height: 900px;

    display: flex;
    justify-content: space-between;
    .playermarkets-ceneter-left {
      width: 30%;

      display: flex;
      flex-direction: column;
      .playermarkets-ceneter-left-bottom {
        flex: 1;
        padding: 50px 30px;
        padding-top: 30px;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        a {
          font-size: 20px;
          font-weight: normal;
          color: #ffffff;
          font-family: "JDZY";

          padding-bottom: 10px;
        }
        ul {
          margin-bottom: 20px;
          padding: 20px 0;
          width: 100%;
          border-bottom: 1px solid #626262;
          border-top: 1px solid #626262;

          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            cursor: pointer;
            // position: relative;
            // animation: myfirst 2s;

            margin: 10px 2px;
            width: 40%;
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
              flex: 1;
            }
            .p-tow {
              display: flex;
              justify-content: center;
              img {
                margin: 0 10px;
                margin-top: 20px;
                width: 15px;
                height: 15px;

                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              }
              span {
                font-size: 12px;
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
        }
      }
    }
    .playermarkets-ceneter-right {
      width: 69%;

      display: flex;
      flex-direction: column;
      .playermarkets-ceneter-right-top {
        height: 20px;
        position: relative;
        animation: myfirsts 2s;

        text-align: center;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 12px;
        background-size: 100% 100%;
        padding: 15px 0;

        font-size: 16px;
        color: #00e4ff;
        font-family: "JDZY";
      }
      .playermarkets-ceneter-right-bottom {
        flex: 1;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 80px 30px;
        padding-top: 30px;

        display: flex;
        flex-direction: column;
        a {
          font-size: 20px;
          font-weight: normal;
          color: #ffffff;
          font-family: "JDZY";

          padding-bottom: 10px;
        }
        ul {
          margin-bottom: 20px;
          padding: 20px 0;
          width: 100%;
          border-bottom: 1px solid #626262;
          border-top: 1px solid #626262;

          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            cursor: pointer;
            // position: relative;
            // animation: myfirst 2s;

            margin: 10px 0px;
            width: 16%;
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
              flex: 1;
            }
            .p-tow {
              display: flex;
              justify-content: center;
              img {
                margin: 0 10px;
                margin-top: 20px;
                width: 15px;
                height: 15px;

                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              }
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
        }
        .ceneter-right-bottom-bottom {
          flex: 1;

          display: flex;
          justify-content: center;
          .ceneter-right-bottom-bottom-left {
            cursor: pointer;
            position: relative;
            animation: myfirsts 2s;

            text-align: center;
            width: 120px;
            padding: 10px 0;
            background: url("../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;

            font-size: 16px;
            color: #00e4ff;
            font-family: "JDZY";

            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .ceneter-right-bottom-bottom-center {
            margin: auto 80px;
            font-size: 16px;
            color: #00e4ff;
            font-family: "JDZY";
          }
          .ceneter-right-bottom-bottom-right {
            cursor: pointer;
            position: relative;
            animation: myfirst 2s;

            text-align: center;
            width: 100px;
            padding: 10px 0;
            background: url("../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;

            font-size: 16px;
            color: #00e4ff;
            font-family: "JDZY";

            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
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
}
</style>
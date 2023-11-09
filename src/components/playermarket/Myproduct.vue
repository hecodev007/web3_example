<template>
  <!-- 我的商品 -->
  <div id="myproduct">
    <div class="playermarkets-ceneter">
      <div class="playermarkets-ceneter-right">
        <div class="playermarkets-ceneter-right-bottom">
          <ul>
            <li v-for="item in 21" :key="item">
              <p>COMBAT EFFECTIVEMESS</p>
              <img src="../../assets/img/image-wuqi.png" alt="" class="img-tow" />
              <p class="p-tow">
                <img src="../../assets/img/icon-image1.png" alt="" />
                <span>8888</span>
              </p>
            </li>
          </ul>
          <div class="ceneter-right-bottom-bottom">
            <div class="ceneter-right-bottom-bottom-left">{{ $t("lang.Previouspage") }}</div>
            <div class="ceneter-right-bottom-bottom-center">{{ page }}/{{ total }}</div>
            <div class="ceneter-right-bottom-bottom-right">{{ $t("lang.Nextpage") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myproduct",
  data() {
    return {
      Showtype: false,

      //搜索
      search: "",

      //总页数
      total: 10,
      //当前页
      page: 1,

      //PowerCore选择器
      Poweroptions: [],
      //PowerCore被选值
      Powercore: "",

      //price选择器
      priceoptions: [],
      //price被选值
      price: "",

      //quality选择器
      qualityoptions: [],
      //quality被选值
      quality: "",
    };
  },
};
</script>

<style lang="less" scoped>
#myproduct {
  width: 80%;
  margin: 0 auto;
  .playermarkets-ceneter {
    padding: 20px 20px;
    // margin-top: 50px;
    // height: 900px;

    display: flex;
    justify-content: space-between;
    .playermarkets-ceneter-right {
      width: 100%;

      display: flex;
      flex-direction: column;
      .playermarkets-ceneter-right-bottom {
        flex: 1;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 95px 30px;
        padding-top: 30px;

        display: flex;
        flex-direction: column;
        ul {
          margin-bottom: 40px;
          height: 94%;  
          width: 100%;
          display: flex;
          justify-content: space-between;

          flex-wrap: wrap;
          li {
            cursor: pointer;
            // position: relative;
            // animation: myfirst 2s;

            margin: 10px 0px;
            width: 12%;
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
        .ceneter-right-bottom-bottom {
          flex: 1;

          display: flex;
          justify-content: center;
          .ceneter-right-bottom-bottom-left {
            cursor: pointer;
            position: relative;
            animation: myfirsts 2s;

            text-align: center;
            width: 11%;
            padding: 10px 0;
            background: url("../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;

            font-size: 20px;
            font-weight: bold;
            color: #3A3A3B;
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
            width: 11%;
            padding: 10px 0;
            background: url("../../assets/img/btn-image1.png") no-repeat;
            background-size: 100% 100%;

            font-size: 20px;
            font-weight: bold;
            color: #FEFEFE;
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
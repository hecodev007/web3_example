<template>
  <!-- 搜索市场 -->
  <div id="market">
    <div class="playermarkets-ceneter">
      <div class="playermarkets-ceneter-left">
        <div class="playermarkets-ceneter-left-bottom">
          <p>{{ $t("lang.Searchcondition") }}</p>
          <div class="playermarkets-ceneter-left-center">
            <div class="ceneter-left-bottom-input">
              <el-input v-model="search" placeholder=""></el-input>
              <span>{{ $t("lang.Equipment") }}</span>
            </div>
            <div class="ceneter-left-bottom-title">{{ $t("lang.Type") }}</div>
            <div class="ceneter-left-bottom-mecha">
              <span>{{ $t("lang.Mech") }}</span>
              <img
                v-if="!Showtype"
                src="../../assets/img/icon-image1.png"
                alt=""
                @click="Showtype = true"
              />
              <img
                v-else
                src="../../assets/img/icon-image3.png"
                alt=""
                @click="Showtype = false"
              />
            </div>
            <div class="ceneter-left-bottom-powercore">
              <el-select
                v-model="Powercore"
                :placeholder="$t('lang.Powercore')"
                :popper-append-to-body="false"
              >
                <el-option
                  v-for="item in Poweroptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="ceneter-left-bottom-title">{{ $t("lang.Price") }}</div>
            <div class="ceneter-left-bottom-powercore powercore2">
              <el-select
                v-model="price"
                :placeholder="$t('lang.Alls')"
                :popper-append-to-body="false"
              >
                <el-option
                  v-for="item in priceoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="ceneter-left-bottom-title">{{ $t("lang.Quality") }}</div>
            <div class="ceneter-left-bottom-powercore powercore3">
              <el-select
                v-model="quality"
                :placeholder="$t('lang.Alls')"
                :popper-append-to-body="false"
              >
                <el-option
                  v-for="item in qualityoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
      </div>
      <div class="playermarkets-ceneter-right">
        <div class="playermarkets-ceneter-right-top">{{ $t("lang.Productswerefound") }} 20 {{ $t("lang.Productswerefounds") }}</div>
        <div class="playermarkets-ceneter-right-bottom">
          <ul>
            <li v-for="item in 15" :key="item" @click="dialogVisible = true">
              <p>COMBAT EFFECTIVEMESS</p>
              <img
                src="../../assets/img/image-wuqi.png"
                alt=""
                class="img-tow"
              />
              <p class="p-tow">
                <img src="../../assets/img/icon-image1.png" alt="" />
                <span>8888</span>
              </p>
            </li>
          </ul>
          <div class="ceneter-right-bottom-bottom">
            <div class="ceneter-right-bottom-bottom-left">{{ $t("lang.Previouspage") }}</div>
            <div class="ceneter-right-bottom-bottom-center">1/2</div>
            <div class="ceneter-right-bottom-bottom-right">{{ $t("lang.Nextpage") }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <el-dialog :visible.sync="dialogVisible" width="400px">
      <div class="dialog-div">
        <div class="dialog-div-top">
          <img src="../../assets/img/SS.png" alt="" />
          <div>
            <span>COMBAT EFFECTIVENESS</span>
            <a href="javascript:void(0)">SCORE:999999</a>
          </div>
        </div>
        <div class="dialog-div-ul">
          <ul>
            <li
              v-for="(item, index) in imgList"
              :key="index"
              @click="dialogVisiblechild = true"
            >
              <img :src="item.img" alt="" />
            </li>
          </ul>
        </div>
        <div class="dialog-div-center">
          <ul>
            <li v-for="(item, index) in progressList" :key="index">
              <img :src="item.img" alt="" />
              <div>
                <el-progress
                  color="#D1AA31"
                  :show-text="false"
                  :percentage="50"
                  status="success"
                ></el-progress>
              </div>
              <a href="javascript:void(0)">3214</a>
            </li>
          </ul>
        </div>
        <div class="dialog-div-bottom">
          <div class="dialog-div-bottom-install">購買</div>
        </div>
      </div>
    </el-dialog>

    <!-- 二级弹框 -->
    <el-dialog :visible.sync="dialogVisiblechild" width="400px" class="dia-tow">
      <div class="dialog-div1">
        <div class="dialog-div-top">
          <img src="../../assets/img/SS.png" alt="" />
          <div>
            <span>COMBAT EFFECTIVENESS</span>
            <a href="javascript:void(0)">SCORE:999999</a>
          </div>
        </div>
        <div class="dialog-div-center">
          <ul>
            <li v-for="(item, index) in progressList" :key="index">
              <img :src="item.img" alt="" />
              <div>
                <el-progress
                  color="#D1AA31"
                  :show-text="false"
                  :percentage="50"
                  status="success"
                ></el-progress>
              </div>
              <a href="javascript:void(0)">3214</a>
            </li>
          </ul>
        </div>
        <div class="dialog-div-bottom">
          <div class="dialog-div-bottom-install">購買</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Market",
  data() {
    return {
      Showtype: false,

      //搜索
      search: "",

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

      progressList: [
        {
          img: require("../../assets/img/icon-gongji.png"),
        },
        {
          img: require("../../assets/img/icon-huifu.png"),
        },
        {
          img: require("../../assets/img/icon-hujia.png"),
        },
        {
          img: require("../../assets/img/icon-mingzhong.png"),
        },
        {
          img: require("../../assets/img/icon-shengming.png"),
        },
      ],

      dialogVisible: false,

      imgList: [
        {
          img: require("../../assets/img/SS.png"),
        },
        {
          img: require("../../assets/img/SS.png"),
        },
        {
          img: require("../../assets/img/SS.png"),
        },
        {
          img: require("../../assets/img/SS.png"),
        },
      ],

      dialogVisiblechild: false,
    };
  },
};
</script>

<style lang="less" scoped>
#market {
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

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;
        p {
          text-align: center;
          margin: 30px auto;
          margin-top: 0;
          color: #ffffff;
          font-size: 20px;
          font-weight: bold;
          font-family: "JDZY";
        }
        .playermarkets-ceneter-left-center {
          padding: 40px 0;
          background: url("../../assets/img/image-backcenter.png") no-repeat;
          background-size: 100% 100%;
          .ceneter-left-bottom-input {
            // position: relative;
            // animation: myfirsts 2s;

            display: flex;
            /deep/.el-input__inner {
              flex: 1;
              border: none;
              background: transparent;
              background: url("../../assets/img/image7.png") no-repeat;
              background-size: 100% 100%;

              margin: auto 0;
            }
            span {
              cursor: pointer;
              text-align: center;
              width: 50%;
              margin-left: 10px;
              color: #3a3a3b;
              font-size: 20px;
              font-weight: bold;
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
          .ceneter-left-bottom-title {
            // position: relative;
            // animation: myfirst 2s;

            font-size: 20px;
            color: #ffffff;
            font-family: "JDZY";
            margin: 10px 0;
            padding-top: 10px;
            padding-bottom: 5px;

            border-bottom: 1px solid #626262;
          }
          .ceneter-left-bottom-mecha {
            position: relative;
            animation: myfirsts 2s;

            margin-bottom: 10px;
            padding: 10px 20px;
            background: url("../../assets/img/image10.png") no-repeat;
            background-size: 100% 100%;

            display: flex;
            justify-content: space-between;
            span {
              margin: auto 0;
              font-size: 18px;
              color: #3a3a3b;
              font-family: "JDZY";
            }
            img {
              margin: 5px 0;
              height: 20px;
              margin: auto 0;
            }
          }
          .ceneter-left-bottom-powercore {
            position: relative;
            animation: myfirst 2s;

            margin-bottom: 10px;
            background: url("../../assets/img/image10.png") no-repeat;
            background-size: 100% 100%;
            /deep/.el-select {
              background: transparent;
              width: 100%;
            }
            /deep/.el-select-dropdown {
              background: rgba(209, 170, 49, 0.9) !important;
              border: none;
              color: #ffffff;
              // border: 1px solid #00e4ff;
            }
            /deep/.el-select-dropdown__item.hover {
              background: #172b4b !important;
            }
            /deep/.el-popper[x-placement^="bottom"] .popper__arrow::after {
              border-bottom-color: #d1aa31 !important;
            }
            /deep/.el-input--suffix .el-input__inner {
              padding: 0 20px !important;
            }
            /deep/.el-input__suffix {
              right: 20px !important;
            }
            /deep/.el-input__inner {
              font-size: 18px;
              color: #3a3a3b !important;
              font-family: "JDZY";

              background: transparent;
              border: none;
            }
            /deep/.el-select .el-input .el-select__caret {
              color: #3a3a3b;
              font-size: 18px;
              font-weight: bold;
            }

            ::v-deep {
              input::-webkit-input-placeholder {
                color: #3a3a3b;
              }

              input::-moz-input-placeholder {
                color: #3a3a3b;
              }

              input::-ms-input-placeholder {
                color: #3a3a3b;
              }
            }
          }
          .powercore2 {
            position: relative;
            animation: myfirsts 2s;
          }
          .powercore3 {
            position: relative;
            animation: myfirst 2s;
          }
        }
      }
    }
    .playermarkets-ceneter-right {
      width: 69%;

      display: flex;
      flex-direction: column;
      .playermarkets-ceneter-right-top {
        position: relative;
        animation: myfirsts 2s;

        text-align: center;
        margin-bottom: 12px;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 15px 0;

        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        font-family: "JDZY";
      }
      .playermarkets-ceneter-right-bottom {
        flex: 1;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 20px 30px;
        padding-bottom: 60px;

        display: flex;
        flex-direction: column;
        ul {
          margin-bottom: 20px;
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
            width: 16%;
            height: 200px;
            padding: 10px 10px;
            padding-top: 20px;

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
            width: 15%;
            padding: 10px 0;
            background: url("../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;

            font-size: 20px;
            font-weight: bold;
            color: #3a3a3b;
            font-family: "JDZY";

            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .ceneter-right-bottom-bottom-center {
            margin: auto 80px;
            font-size: 16px;
            color: #ffffff;
            font-family: "JDZY";
          }
          .ceneter-right-bottom-bottom-right {
            cursor: pointer;
            position: relative;
            animation: myfirst 2s;

            text-align: center;
            width: 15%;
            padding: 10px 0;
            background: url("../../assets/img/btn-image1.png") no-repeat;
            background-size: 100% 100%;

            font-size: 20px;
            font-weight: bold;
            color: #fefefe;
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
  /deep/.el-dialog {
    height: 550px;
    margin-right: 8%;
    margin-top: 25vh !important;
    background: none;
  }
  /deep/.el-dialog__body {
    padding-top: 0px;
  }
  /deep/.el-dialog__headerbtn {
    display: none;
  }
  .dialog-div {
    width: 92%;
    margin: 0 auto;
    padding: 20px 50px;
    background: url("../../assets/img/image-back10.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .dialog-div-top {
      height: 20%;
      margin-top: 20px;

      display: flex;
      justify-content: center;
      img {
        width: 70px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 20px;
        span {
          font-weight: bold;
          font-size: 18px;
          color: #ffffff;
          font-family: "JDZY";
        }
        a {
          font-weight: bold;
          font-size: 16px;
          color: #00e4ff;
          font-family: "JDZY";
        }
      }
    }
    .dialog-div-ul {
      width: 100%;
      margin-top: 60px;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          width: 20%;
          img {
            width: 70px;
          }
        }
      }
    }
    .dialog-div-center {
      flex: 1;
      width: 100%;

      margin: auto 0;
      margin-top: 20px;
      ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 3px;
        li {
          display: flex;
          justify-content: flex-end;
          margin: 10px 0;
          // margin-bottom: 0;
          img {
            width: 8%;
            // font-weight: bold;
            // font-size: 18px;
            // color: #ffffff;
            // font-family: "JDZY";

            // border-right: 2px solid #00e4ff;
            // margin: auto 0;
            // margin-right: 10px;
          }
          div {
            flex: 1;
            margin: auto 8px;
            width: 100%;
            /deep/.el-progress-bar__outer {
              background-color: #52575e;
            }
          }
          a {
            width: 12%;
            margin: auto 0;
            margin-left: 20px;
            font-size: 14px;
            font-weight: bold;
            color: #8fe539;
            font-family: "JDZY";
          }
        }
      }
    }
    .dialog-div-bottom {
      height: 20%;
      margin: 40px 0;

      display: flex;
      justify-content: center;
      .dialog-div-bottom-install {
        padding: 10px 40px;
        font-size: 20px;
        font-weight: bold;
        color: #3a3a3b;
        font-family: "JDZY";

        background: url("../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .dia-tow {
    background: none;
  }
  .dialog-div1 {
    background: url("../../assets/img/image-back11.png") no-repeat;
    background-size: 100% 100%;
    width: 92%;
    margin: 0 auto;
    padding: 20px 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    position: relative;
    right: 450px;
    .dialog-div-top {
      height: 20%;
      margin-top: 20px;

      display: flex;
      justify-content: center;
      img {
        width: 70px;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 20px;
        span {
          font-weight: bold;
          font-size: 18px;
          color: #ffffff;
          font-family: "JDZY";
        }
        a {
          font-weight: bold;
          font-size: 16px;
          color: #00e4ff;
          font-family: "JDZY";
        }
      }
    }
    .dialog-div-center {
      flex: 1;
      width: 100%;

      margin: auto 0;
      margin-top: 40px;
      ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 3px;
        li {
          display: flex;
          justify-content: flex-end;
          margin: 10px 0;
          // margin-bottom: 0;
          img {
            width: 8%;
            // font-weight: bold;
            // font-size: 18px;
            // color: #ffffff;
            // font-family: "JDZY";

            // border-right: 2px solid #00e4ff;
            // margin: auto 0;
            // margin-right: 10px;
          }
          div {
            flex: 1;
            margin: auto 8px;
            width: 100%;
            /deep/.el-progress-bar__outer {
              background-color: #52575e;
            }
          }
          a {
            width: 12%;
            margin: auto 0;
            margin-left: 20px;
            font-size: 14px;
            font-weight: bold;
            color: #8fe539;
            font-family: "JDZY";
          }
        }
      }
    }
    .dialog-div-bottom {
      height: 20%;
      margin: 40px 0;

      display: flex;
      justify-content: center;
      .dialog-div-bottom-install {
        padding: 10px 40px;
        font-size: 20px;
        font-weight: bold;
        color: #3a3a3b;
        font-family: "JDZY";

        background: url("../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
<template>
  <!-- 上架 -->
  <div id="ontheshelf">
    <div class="ontheshelf-ceneter">
      <div class="ontheshelf-ceneter-left">
        <div class="ontheshelf-ceneter-left-bottom">
          <div class="ceneter-left-bottom-title">TYPE</div>
          <div
            class="ceneter-left-bottom-mecha"
            v-for="(item, index) in titleList"
            @click="selectClick(index)"
            :key="index"
          >
            <span>{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- 数据 -->
      <div class="ontheshelf-ceneter-right">
        <div class="ontheshelf-ceneter-right-bottom">
          <ul>
            <li
              v-for="item in dataList"
              :key="item.id"
              @click="showClick(item)"
            >
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
            <div class="ceneter-right-bottom-bottom-center">1/2</div>
            <div class="ceneter-right-bottom-bottom-right">{{ $t("lang.Nextpage") }}</div>
          </div>
        </div>
      </div>

      <!-- 下架弹窗 -->
      <el-dialog
        :visible.sync="dialogVisiblechild"
        width="350px"
        class="dia-tow"
      >
        <div class="dialog-div1">
          <div class="dialog-div-top">
            <img src="../../assets/img/C.png" alt="" />
            <div>
              <span>BUSD CURRENCY</span>
            </div>
          </div>
          <div class="dialog-div-center">
            <p>999999</p>
          </div>
          <div class="dialog-div-bottom">
            <div class="dialog-div-bottom-install">下架</div>
          </div>
        </div>
      </el-dialog>

      <!-- 上架弹窗 -->
      <el-dialog
        :visible.sync="dialogVisiblechilds"
        width="350px"
        class="dia-tow"
      >
        <div class="dialog-div">
          <div class="dialog-div-top">
            <img src="../../assets/img/C.png" alt="" />
            <div>
              <span>BUSD CURRENCY</span>
            </div>
          </div>
          <div class="dialog-div-bottom">
            <el-input v-model="search" placeholder=""></el-input>
            <div class="dialog-div-bottom-install">上架</div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ontheshelf",
  data() {
    return {
      //数据
      dataList: [
        {
          id: 8,
          money: 8888,
          name: "codersyq",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 9,
          money: 8888,
          name: "codersyq",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 111,
          money: 8888,
          name: "codersyq",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 222,
          money: 8888,
          name: "codersyq",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 333,
          money: 8888,
          name: "codersyq",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 3,
          money: 8888,
          name: "ycmd",
          status: {
            value: 0,
            label: "下架",
          },
        },
        {
          id: 2,
          money: 8888,
          name: "name",
          status: {
            value: 0,
            label: "下架",
          },
        },
        {
          id: 10,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 11,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 12,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 112,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 113,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 113,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 113,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
        {
          id: 113,
          money: 8888,
          name: "coderycmd",
          status: {
            value: 1,
            label: "上架",
          },
        },
      ],
      //navbar栏
      titleList: [this.$i18n.t("lang.Mech"), this.$i18n.t("lang.Part")],
      //被选中的下标
      selectIndex: 0,

      //下架弹框
      dialogVisiblechild: false,
      //上架弹窗
      dialogVisiblechilds: false,
      //搜索
      search: '',
    };
  },
  methods: {
    selectClick(index) {
      this.selectIndex = index;
    },

    //被选中的货币
    showClick(item) {
      if (item.status.value === 0) {
        this.dialogVisiblechild = true;
      } else if (item.status.value === 1) {
        this.dialogVisiblechilds = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
#ontheshelf {
  width: 80%;
  margin: 0 auto;
  .ontheshelf-ceneter {
    padding: 20px 20px;
    // margin-top: 50px;
    // height: 900px;

    display: flex;
    justify-content: space-between;
    .ontheshelf-ceneter-left {
      width: 30%;

      display: flex;
      flex-direction: column;
      .ontheshelf-ceneter-left-bottom {
        flex: 1;
        padding: 20px 30px;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

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
            color: #3A3A3B;
            font-family: "JDZY";
          }
          img {
            margin: 5px 0;
            height: 20px;
            margin: auto 0;
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
    .ontheshelf-ceneter-right {
      width: 69%;

      display: flex;
      flex-direction: column;
      .ontheshelf-ceneter-right-bottom {
        flex: 1;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 30px 20px;
        padding-bottom: 115px;

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
            width: 15%;
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
            color: #FEFEFE;
            font-family: "JDZY";
          }
          .ceneter-right-bottom-bottom-right {
            cursor: pointer;
            position: relative;
            animation: myfirst 2s;

            text-align: center;
            width: 15%;
            padding: 10px 0;
            background: url("../../assets/img/btn-image2.png") no-repeat;
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
  .dia-tow {
    background: none;
  }
  .dialog-div1 {
    background: url("../../assets/img/image-back12.png") no-repeat;
    background-size: 100% 100%;
    width: 92%;
    margin: 0 auto;
    padding: 20px 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    position: relative;
    right: 200px;
    .dialog-div-top {
      height: 20%;
      margin-top: 20px;

      display: flex;
      // justify-content: space-between;
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
      }
    }
    .dialog-div-center {
      flex: 1;
      width: 100%;

      margin: auto 0;
      margin-top: 40px;
      text-align: center;
      p {
        padding-top: 40px;
        font-size: 20px;
        color: #ffffff;
        font-family: "JDZY";
      }
    }
    .dialog-div-bottom {
      height: 20%;
      margin: 40px 0;

      display: flex;
      justify-content: center;
      .dialog-div-bottom-install {
        position: relative;
        top: 20px;

        padding: 10px 40px;
        font-size: 20px;
        font-weight: bold;
        color: #3A3A3B;
        font-family: "JDZY";

        background: url("../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .dialog-div {
    background: url("../../assets/img/image-back13.png") no-repeat;
    background-size: 100% 100%;
    width: 92%;
    margin: 0 auto;
    padding: 20px 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    position: relative;
    right: 200px;
    .dialog-div-top {
      height: 20%;
      margin-top: 20px;

      display: flex;
      // justify-content: space-between;
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
      }
    }
    .dialog-div-bottom {
      height: 20%;
      margin: 40px 0;
      margin-bottom: 10px;

      display: flex;
      justify-content: center;
      /deep/.el-input {
        width: 60%;
        margin-right: 10px;
        display: flex;
      }
      /deep/.el-input__inner {
        flex: 1;
        border: none;
        background: transparent;
        background: url("../../assets/img/image7.png") no-repeat;
        background-size: 100% 100%;

        margin: auto 0;
      }
      .dialog-div-bottom-install {
        text-align: center;
        width: 30%;
        padding: 8px 10px;
        font-size: 20px;
        font-weight: bold;
        color: #3A3A3B;
        font-family: "JDZY";

        background: url("../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
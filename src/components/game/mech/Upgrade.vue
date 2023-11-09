<template>
  <!-- 升级 -->
  <div id="upgrade">
    <div class="upgrade-ceneter">
      <div class="upgrade-ceneter-left">
        <div class="upgrade-ceneter-left-bottom">
          <div class="ceneter-left-bottom-title">
            {{ $t("lang.Partsupgrade") }}
          </div>
          <div class="ceneter-left-bottom-center">
            <img
              src="../../../assets/img/image-item.png"
              alt=""
              v-if="JSON.stringify(upgradeData) === '{}'"
              class="back-img2"
            />
            <div v-else @click="itemClick(objData.id, -1)">
              <img
                src="../../../assets/img/jijia-back-1.png"
                alt=""
                class="back-img1"
                v-if="upgradeData.quality_level === 'N'"
              />
              <img
                src="../../../assets/img/jijia-back-2.png"
                alt=""
                class="back-img1"
                v-if="upgradeData.quality_level === 'R'"
              />
              <img
                src="../../../assets/img/jijia-back-3.png"
                alt=""
                class="back-img1"
                v-if="upgradeData.quality_level === 'SR'"
              />
              <img
                src="../../../assets/img/jijia-back-4.png"
                alt=""
                class="back-img1"
                v-if="upgradeData.quality_level === 'SSR'"
              />
              <img
                src="../../../assets/img/jijia-back-5.png"
                alt=""
                class="back-img1"
                v-if="upgradeData.quality_level === 'UR'"
              />
              <img :src="upgradeData.big_cover_photo" alt="" class="back-img2" />
              <div class="ul-li-div1">Lv.{{ new_level }}</div>
            </div>
            <img
              src="../../../assets/img/upgrade-boder-su.gif"
              alt=""
              class="back-img3"
              v-if="showUp === 1"
            />
            <!-- <img
              src="../../../assets/img/upgrade-boder-back-1.gif"
              alt=""
              class="back-img4"
              v-if="showUp === 0"
            /> -->
            <div class="ceneter-left-bottom-center-btn">
              <span>{{ $t("lang.Successrate") }}</span>
              <a href="javascript:void(0);"
                >{{
                  upgradeData.upgrade_success_rate === undefined
                    ? 0
                    : upgradeData.upgrade_success_rate
                }}%</a
              >
            </div>
          </div>
          <div class="ceneter-left-bottom-bottom">
            <div class="ceneter-left-bottom-bottom-top">
              <img src="../../../assets/img/image-backjian-egc.png" alt="" />
              <span>{{
                upgradeData.upgrade_need_egc === undefined
                  ? 0
                  : upgradeData.upgrade_need_egc
              }}</span>
            </div>
            <div class="ceneter-left-bottom-bottom-btn" @click="upgradeClick">
              {{ $t("lang.Upgrades") }}
            </div>
          </div>
        </div>
      </div>
      <div class="upgrade-ceneter-right">
        <div class="synthesis-ceneter-right-title">
          <div class="mechs-top">
            <div
              v-for="(item, index) in titleList1"
              :key="index"
              @click="selectClick(index)"
              :class="{
                active: selectIndex === index,
                ceneter: selectIndex != index,
              }"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="synthesis-ceneter-right-top">
          <!-- <div v-for="(item, index) in roleinfoData" :key="index">
            <img
              src="../../../assets/img/jijia-1.png"
              alt=""
              v-if="item.cover_resource === '1'"
            />
            <img
              src="../../../assets/img/jijia-2.png"
              alt=""
              v-if="item.cover_resource === '2'"
            />
            <img
              src="../../../assets/img/jijia-3.png"
              alt=""
              v-if="item.cover_resource === '3'"
            />
            <img
              src="../../../assets/img/jijia-4.png"
              alt=""
              v-if="item.cover_resource === '4'"
            />
            <img
              src="../../../assets/img/jijia-5.png"
              alt=""
              v-if="item.cover_resource === '5'"
            />
          </div> -->
        </div>
        <!-- jijia-back-syq.png -->
        <div class="upgrade-ceneter-right-bottom">
          <div class="ul-title">
            <span
              v-for="(item, index) in titleList"
              :key="index"
              @click="titleClick(index, item.id)"
              :class="{ titleActive: titleIndex === index }"
            >
              {{ item.type_name }}</span
            >
          </div>
          <ul>
            <li
              v-for="(item, index) in dataList"
              :key="index"
              @click="itemClick(item.id, 1)"
            >
              <img
                src="../../../assets/img/jijia-back-1.png"
                alt=""
                class="back-img1"
                v-if="item.quality_level === 'N'"
              />
              <img
                src="../../../assets/img/jijia-back-2.png"
                alt=""
                class="back-img1"
                v-if="item.quality_level === 'R'"
              />
              <img
                src="../../../assets/img/jijia-back-3.png"
                alt=""
                class="back-img1"
                v-if="item.quality_level === 'SR'"
              />
              <img
                src="../../../assets/img/jijia-back-4.png"
                alt=""
                class="back-img1"
                v-if="item.quality_level === 'SSR'"
              />
              <img
                src="../../../assets/img/jijia-back-5.png"
                alt=""
                class="back-img1"
                v-if="item.quality_level === 'UR'"
              />
              <img :src="item.cover_photo" alt="" class="back-img" />
              <div class="ul-li-div1">Lv.{{ item.level }}</div>
            </li>
          </ul>
          <div class="ceneter-right-bottom-bottom" v-if="last_page > 1">
            <div class="ceneter-right-bottom-bottom-left" @click="pageClick(0)">
              {{ $t("lang.Previouspage") }}
            </div>
            <div class="ceneter-right-bottom-bottom-center">
              {{ page }} / {{ last_page }}
            </div>
            <div
              class="ceneter-right-bottom-bottom-right"
              @click="pageClick(1)"
            >
              {{ $t("lang.Nextpage") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 二次封装弹框 -->
    <SyqDialog
      :upgradeShow="upgradeShow"
      :objData="objData"
      :dialogVisible="dialogVisible"
      @showClick="showClick"
      @childClick="childClick"
      :diaText="remove"
    />
  </div>
</template>

<script>
import SyqDialog from "../../common/Dialog.vue";

//接口请求
import {
  postRoleinfo,
  postUserequip,
  postUpgrade,
  postEquiptype,
} from "api/index";

export default {
  name: "Upgrade",
  components: {
    SyqDialog,
  },
  data() {
    return {
      titleList: [
        {
          type_name: this.$i18n.t("lang.All"),
          id: 0,
        },
      ],

      dialogVisible: false,
      upgradeShow: true,

      //顶部栏
      titleList1: [
        this.$i18n.t("lang.Dynamic"),
        this.$i18n.t("lang.Partsupgrade"),
        this.$i18n.t("lang.Componentsynthesis"),
        // this.$i18n.t("lang.Camp"),
      ],
      //筛选栏下标
      titleIndex: 0,
      //被选择下标
      selectIndex: 1,

      //当前页
      page: 1,
      //一页条数
      size: 999,
      //总页数
      last_page: 0,
      //分类id
      equipId: 0,

      //机甲数据
      dataList: [],
      //背包数据
      roleinfoData: [],
      showimg: 0,

      //单个商品数据
      objData: {},

      //被放入的商品
      upgradeData: {},
      new_level: 0,
      //代币
      money: 5,

      //角色id
      user_id: "",
      showUp: -1,
    };
  },
  methods: {
    //被点击的顶部栏
    selectClick(index) {
      this.$emit("clildClick", index);
      this.selectIndex = index;
    },

    //背包数据
    async postInfo() {
      await postEquiptype().then((res) => {
        res.data.data.forEach((item) => {
          this.titleList.push(item);
        });
      });
      await postRoleinfo().then((res) => {
        this.roleinfoData = res.data.data.rows;
        console.log(res.data.data.rows);
      });
    },

    //机甲数据
    async postUserequip() {
      await postUserequip(this.page, this.equipId, this.size, 0).then((res) => {
        console.log(res);
        this.dataList = res.data.data.rows;
        this.last_page = res.data.data.total_pages;
      });
    },

    //分页
    async pageClick(value) {
      if (value === 0) {
        if (this.page > 1) {
          this.page--;
          await this.postUserequip();
        } else {
          this.$message({
            message: "第一页",
            type: "warning",
          });
        }
      } else {
        if (this.page < this.last_page) {
          this.page++;
          await this.postUserequip();
        } else {
          this.$message({
            message: "最后一页",
            type: "warning",
          });
        }
      }
    },

    //筛选栏
    async titleClick(index, id) {
      this.titleIndex = index;
      this.equipId = id;
      this.page = 1;
      this.dataList = [];
      this.last_page = 0;
      await this.postUserequip();

      var data = this.dataList;
      this.dataList = [];

      data.forEach((item) => {
        if (item.id != this.upgradeData.id) {
          this.dataList.push(item);
        }
      });
    },

    //商品被点击
    itemClick(id, value) {
      if (value === -1) {
        this.upgradeShow = false;
      } else {
        this.upgradeShow = true;
      }
      this.dialogVisible = true;
      this.dataList.forEach((item) => {
        if (item.id === id) {
          this.objData = item;
        }
      });
    },

    //关闭弹框
    showClick() {
      this.dialogVisible = false;
    },

    //放入
    async childClick(value) {
      if (value === 0) {
        await this.postUserequip();

        this.upgradeData = this.objData;
        this.new_level = this.upgradeData.level;
        this.$message({
          message: this.$i18n.t("lang.Putinsuccessfully"),
          type: "success",
        });

        var data = this.dataList;
        this.dataList = [];

        data.forEach((item) => {
          if (item.id != this.upgradeData.id) {
            this.dataList.push(item);
          }
        });

        this.dialogVisible = false;
      } else if (value === -1) {
        await this.postUserequip();

        this.upgradeData = {};
        this.dialogVisible = false;
      }
    },

    //升级
    async upgradeClick() {
      if (JSON.stringify(this.upgradeData) != "{}") {
        await postUpgrade(this.upgradeData.id).then((res) => {
          console.log(res);
          if (res.data.code === 0) {
            this.new_level = res.data.data.new_level;
            this.showUp = 1;
            setTimeout(() => {
              this.showUp = -1;
            }, 1500);
            this.$message({
              message: res.data.message,
              type: "success",
            });
          } else {
            this.$message({
              message: res.data.message,
              type: "error",
            });
            this.showUp = 0;
            setTimeout(() => {
              this.showUp = -1;
            }, 1000);
          }
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Nopartshavebeenplaced"),
          type: "warning",
        });
      }
    },
  },
  async created() {
    //背包数据
    await this.postInfo();
    //机甲数据
    await this.postUserequip();
  },
};
</script>

<style lang="less" scoped>
#upgrade {
  width: 80%;
  margin: 0 auto;
  .upgrade-ceneter {
    height: 1000px;
    padding: 20px 20px;
    // margin-top: 50px;
    // height: 900px;

    display: flex;
    justify-content: space-between;
    .upgrade-ceneter-left {
      margin-top: 120px;
      width: 30%;

      display: flex;
      flex-direction: column;
      .upgrade-ceneter-left-bottom {
        flex: 1;
        padding: 50px 30px;
        padding-top: 40px;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        .ceneter-left-bottom-title {
          text-align: center;
          height: 10%;

          font-weight: bold;
          font-size: 22px;
          color: #ffffff;
          font-family: "JDZY";

          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ceneter-left-bottom-center {
          height: 62%;

          background: url("../../../assets/img/image-backcenter.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          .back-img2 {
            position: absolute;
            top: 100px;
            right: 30%;

            width: 140px;
            height: 140px;
            margin: 0 auto;
          }
          .back-img1 {
            width: 150px;
            height: 150px;
            position: absolute;
            top: 95px;
            right: 30%;
          }
          .back-img3 {
            width: 200px;
            height: 175px;
            position: absolute;
            top: 55px;
            right: 24%;
          }
          .back-img4 {
            width: 130px;
            height: 130px;
            position: absolute;
            top: 86px;
            right: 33%;
          }
          .ul-li-div1 {
            position: absolute;
            top: 210px;
            right: 27%;

            margin: 10px 10px;
            background: rgba(0, 0, 1, 0.7);
            color: orange;
            text-align: center;
            font-size: 10px;
            width: 150px;
          }

          .ceneter-left-bottom-center-btn {
            position: absolute;
            top: 250px;
            left: 33%;

            margin: 35px auto;
            width: 35%;
            padding: 8px 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            span {
              font-size: 14px;
              color: #ffffff;
              font-family: "JDZY";
            }
            a {
              font-size: 16px;
              color: #d1aa31;
              font-family: "JDZY";
            }
          }
        }
        .ceneter-left-bottom-bottom {
          height: 20%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          .ceneter-left-bottom-bottom-top {
            margin: 0 auto;
            display: flex;

            img {
              width: 20px;
              height: 20px;
            }
            span {
              margin: 0 20px;
              font-size: 18px;
              color: #d1aa31;
              font-family: "JDZY";
            }
          }
          .ceneter-left-bottom-bottom-btn {
            margin: 10px auto;
            padding: 10px 0;
            width: 45%;
            text-align: center;

            font-size: 20px;
            font-weight: bold;
            color: #3a3a3b;
            font-family: "JDZY";

            background: url("../../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
    .upgrade-ceneter-right {
      width: 69%;

      display: flex;
      flex-direction: column;
      .synthesis-ceneter-right-title {
        height: 100px;

        .mechs-top {
          text-align: right;

          display: flex;
          justify-content: flex-end;
          .ceneter {
            margin: 0 10px;
            cursor: pointer;

            text-align: center;
            width: 18%;
            padding: 15px 0;
            background: url("../../../assets/img/btn-image1.png") no-repeat;
            background-size: 100% 84%;
            background-position-y: 4px;

            display: flex;
            flex-direction: column;
            justify-content: center;

            font-size: 18px;
            // font-weight: bold;
            color: #fefefe;
            font-family: "JDZY";

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .active {
            position: relative;
            top: 5px;

            margin: 0 10px;
            cursor: pointer;

            text-align: center;
            width: 18%;
            padding: 12px 0;
            background: url("../../../assets/img/btn-image2.png") no-repeat;
            background-size: 100% 84%;

            font-size: 18px;
            font-weight: bold;
            color: #3a3a3b;
            font-family: "JDZY";

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .synthesis-ceneter-right-top {
        margin-bottom: 12px;
        background-size: 100% 100%;

        font-size: 16px;
        color: #00e4ff;
        font-family: "JDZY";

        display: flex;
        div {
          background: url("../../../assets/img/jijia-back-syq.png") no-repeat;
          background-size: 100% 100%;

          margin-right: 10px;
          height: 100%;
          width: 11%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .activeimg {
          border-radius: 5px;
          border: 1px solid #52575e;
        }
      }
      .upgrade-ceneter-right-bottom {
        height: 80%;
        margin-top: 10px;
        flex: 1;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 60px 0px;
        padding-top: 20px;

        display: flex;
        flex-direction: column;
        .ul-title {
          padding: 0 20px;
          margin: 30px 4%;
          margin-top: 10px;
          border-bottom: 1px solid #626262;

          display: flex;
          justify-content: space-around;
          span {
            padding: 10px 0;
            text-align: center;
            width: 12%;
            font-size: 18px;
            color: #ffffff;
            font-family: "JDZY";

            background: url("../../../assets/img/image-back1.png") no-repeat;
            background-size: 100% 100%;
          }
          .titleActive {
            padding: 10px 0;
            text-align: center;
            width: 12%;
            font-size: 18px;
            color: #ffffff;
            font-family: "JDZY";

            background: url("../../../assets/img/image-back111.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        ul {
          margin-top: 5px;
          margin-bottom: 40px;
          padding: 0 95px;
          // height: 94%;
          display: flex;
          // justify-content: space-between;

          flex-wrap: wrap;

          // height: 100vh;
          overflow: hidden;
          overflow-y: visible;
          li {
            cursor: pointer;

            // width: 11%;
            padding: 0px 1%;
            margin-bottom: 20px;

            display: flex;
            flex-direction: column;
            position: relative;
            .back-img1 {
              width: 100%;
              height: 100px;
              // width: 100%;
              // height: 100%;
            }
            .ul-li-div1 {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;

              margin: 10px 10px;
              background: rgba(0, 0, 1, 0.7);
              color: orange;
              text-align: center;
              font-size: 10px;
            }
            .back-img {
              margin: auto auto;
              position: absolute;
              top: 1px;
              left: 11px;

              // width: 80px;
              // height: 80px;
            }
          }
        }
        .ceneter-right-bottom-bottom {
          // height: 100%;
          // flex: 1;

          display: flex;
          justify-content: center;
          .ceneter-right-bottom-bottom-left {
            cursor: pointer;
            position: relative;
            animation: myfirsts 2s;

            text-align: center;
            width: 15%;
            padding: 10px 0;
            background: url("../../../assets/img/btn-image2.png") no-repeat;
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
            font-size: 18px;
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
            background: url("../../../assets/img/btn-image2.png") no-repeat;
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
}
</style>
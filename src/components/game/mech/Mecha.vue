<template>
  <!-- 机甲 -->
  <div id="mecha">
    <!-- <div class="mecha-ceneter">
      <div class="mecha-ceneter-left">
        <div class="mecha-ceneter-left-bottom">
          <ul>
            <li
              v-for="(item, index) in roleData.game_equip"
              :key="index"
              @click="roleClick(item.ue_id, 'remove')"
            >
              <img :src="item.equip_images" alt="" />
            </li>
          </ul>
          <div class="ceneter-left-bottom-progressbar">
            <ul>
              <li>
                <img src="../../../assets/img/icon-gongji.png" alt="" />
                <div>
                  <el-progress
                    color="#D1AA31"
                    :show-text="false"
                    :percentage="roleData.hit"
                    status="success"
                  ></el-progress>
                </div>
                <a href="javascript:void(0)">{{ roleData.hit }}</a>
              </li>
              <li>
                <img src="../../../assets/img/icon-huifu.png" alt="" />
                <div>
                  <el-progress
                    color="#D1AA31"
                    :show-text="false"
                    :percentage="roleData.life"
                    status="success"
                  ></el-progress>
                </div>
                <a href="javascript:void(0)">{{ roleData.life }}</a>
              </li>
              <li>
                <img src="../../../assets/img/icon-hujia.png" alt="" />
                <div>
                  <el-progress
                    color="#D1AA31"
                    :show-text="false"
                    :percentage="roleData.armor"
                    status="success"
                  ></el-progress>
                </div>
                <a href="javascript:void(0)">{{ roleData.armor }}</a>
              </li>
              <li>
                <img src="../../../assets/img/icon-mingzhong.png" alt="" />
                <div>
                  <el-progress
                    color="#D1AA31"
                    :show-text="false"
                    :percentage="roleData.attack"
                    status="success"
                  ></el-progress>
                </div>
                <a href="javascript:void(0)">{{ roleData.attack }}</a>
              </li>
              <li>
                <img src="../../../assets/img/icon-shengming.png" alt="" />
                <div>
                  <el-progress
                    color="#D1AA31"
                    :show-text="false"
                    :percentage="roleData.reply"
                    status="success"
                  ></el-progress>
                </div>
                <a href="javascript:void(0)">{{ roleData.reply }}</a>
              </li>
            </ul>
          </div>
          <div class="ceneter-left-bottom-copyright">
            SCORE:{{ roleData.sword }}
          </div>
        </div>
      </div>
      <div class="mecha-ceneter-right">
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
        <div class="mecha-ceneter-right-top">
          <img
            v-for="(item, index) in roleinfoData"
            :key="index"
            :class="{ activeimg: roleIndex === index }"
            @click="roleinfClick(item.id, index)"
            src="../../../assets/img/icon-jia.png"
            alt=""
          />
        </div>
        <div class="mecha-ceneter-right-bottom">
          <div class="ul-title">
            <span
              v-for="(item, index) in titleList"
              :key="index"
              @click="titleClick(item.id)"
              :class="{ titleActive: titleIndex === item.id }"
            >
              {{ item.name }}</span
            >
          </div>
          <ul>
            <li
              v-for="(item, index) in dataList"
              :key="index"
              @click="itemClick(item.id, 'equipment')"
            >
              <img :src="item.images" alt="" />
            </li>
          </ul>
          <div class="ceneter-right-bottom-bottom">
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
    </div> -->

    <!-- 二次封装弹框 -->
    <!-- <SyqDialog
      :objData="objData"
      :dialogVisible="dialogVisible"
      :diaText="diaText"
      @showClick="showClick"
      @childClick="childClick"
    /> -->

    <div class="mecha-ceneter-right">
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
    </div>
    <div
      style="
        flex-direction: row;
        display: flex;
        position: relative;
        top: -100px;
      "
    >
      <div style="width: 100%; height: 900px">
        <iframe
          ref="unityIframe"
          src="/Knapsack_H5/index.html"
          frameborder="0"
          style="width: 100%; height: 100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import SyqDialog from "../../common/Dialog.vue";

//接口请求
import {
  postRoleinfo,
  postUserequip,
  postWear,
  postUnload,
  postUsergetEquip,
} from "api/index";

export default {
  name: "Mecha",
  components: {
    SyqDialog,
  },
  data() {
    return {
      titleList: [
        {
          name: this.$i18n.t("lang.All"),
          id: 0,
        },
        {
          name: this.$i18n.t("lang.Mech"),
          id: 6,
        },
        {
          name: this.$i18n.t("lang.Wing"),
          id: 4,
        },
        {
          name: this.$i18n.t("lang.Arms"),
          id: 2,
        },
        {
          name: this.$i18n.t("lang.Pauldron"),
          id: 3,
        },
        {
          name: this.$i18n.t("lang.PowerCore"),
          id: 5,
        },
      ],

      diaText: "",
      dialogVisible: false,

      //顶部栏
      titleList1: [
        this.$i18n.t("lang.Dynamic"),
        this.$i18n.t("lang.Partsupgrade"),
        this.$i18n.t("lang.Componentsynthesis"),
        // this.$i18n.t("lang.Camp"),
      ],
      //筛选栏下标
      titleIndex: 0,

      //被选中
      selectIndex: 0,
      //当前页
      page: 1,
      //一页条数
      size: 35,
      //总条数
      last_page: 0,

      //机甲数据
      dataList: [],
      //背包数据
      roleinfoData: [],
      //角色数据
      roleData: {},
      roleIndex: 0,

      //单个商品数据
      objData: {},

      //角色id
      user_id: "",
    };
  },
  methods: {
    vueSendToUnity() {
      // console.log("coder-syq--------------------------------------------");
      // window.sessionStorage.getItem('token')
      // window.sessionStorage.setItem(
      //   "coder-token",
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFtZXMiLCJ1c2VyX2lkIjoxLCJhZGRyZXNzIjoiMHg2MmMzOGQzZWU3ODIxMWZhYzkyNjI5MTZmZmFmN2M1ZTYxMTEwZWM2IiwiZXhwIjoxNjU3NzU5NTc0fQ.D1tu1k6XL6JaKe644P5MmCHG5oeI2IvJLcvsO2D07Zw"
      // );
      const codertoken = window.sessionStorage.getItem("token");

      this.$refs.unityIframe.contentWindow.sendMsgToUnity(codertoken + "");
    },

    //被点击的顶部栏
    selectClick(index) {
      this.$emit("clildClick", index);
      this.selectIndex = index;
    },

    //背包数据
    async postRoleinfo() {
      await postRoleinfo(Number(this.user_id)).then((res) => {
        // this.roleinfoData = res.data.data;
        console.log(res.data.data);
      });
    },

    //选中角色
    async roleinfClick(id, index) {
      this.roleIndex = index;
      await this.roleinfInfo(id);
    },

    //角色装备
    roleinfInfo(id) {
      if (id === 0) {
        this.roleinfoData.forEach((item, index) => {
          if (index === id) {
            this.roleData = item;
            console.log(item);
          }
        });
      } else {
        this.roleinfoData.forEach((item) => {
          if (item.id === id) {
            this.roleData = item;
          }
        });
      }
    },

    //机甲数据
    async postUserequip() {
      await postUserequip(this.page, this.size, this.titleIndex).then((res) => {
        console.log(res);
        this.dataList = res.data.data.data;
        this.last_page = res.data.data.last_page;
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
    async titleClick(id) {
      this.titleIndex = id;
      this.page = 1;
      await this.postUserequip();
    },

    //角色装备详情
    async roleClick(ue_id, value) {
      this.diaText = value;
      this.dialogVisible = true;
      await postUsergetEquip(ue_id).then((res) => {
        res.data.data.forEach((item) => {
          if (item.id === ue_id) {
            this.objData = item;
          }
        });
      });
    },

    //商品被点击
    itemClick(id, value) {
      this.diaText = value;
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

    //穿戴&卸下
    async childClick(value) {
      if (value === 1) {
        //穿戴
        await postWear(this.roleData.id, this.objData.id).then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
        await this.postRoleinfo();
        await this.roleinfInfo(this.roleData.id);
      } else {
        //卸下
        await postUnload(this.roleData.id, this.objData.id).then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.$message({
              message: res.data.msg,
              type: "success",
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
        await this.postRoleinfo();
        await this.roleinfInfo(this.roleData.id);
      }
      this.dialogVisible = false;
    },
  },
  mounted() {
    window.addEventListener("message", this.vueSendToUnity);
  },
  created() {
    //机甲数据
    this.postUserequip();
    //背包数据
    this.postRoleinfo();

    setTimeout(() => {
      //角色装备
      this.roleinfInfo(0);
    }, 500);
  },
};
</script>

<style lang="less" scoped>
#mecha {
  width: 100%;
  margin: 0 auto;
  .mecha-ceneter {
    padding: 20px 20px;

    display: flex;
    justify-content: space-between;
    .mecha-ceneter-left {
      width: 30%;

      display: flex;
      flex-direction: column;
      .mecha-ceneter-left-bottom {
        flex: 1;
        padding: 50px 30px;
        padding-top: 40px;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        // justify-content: space-evenly;
        ul {
          padding: 0 15px;
          // height: 50%;
          text-align: left;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          li {
            margin: 5px 0;
            width: 100%;
            // height: 16%;
            img {
              height: 100%;
              width: 25%;
            }
          }
        }
        .ceneter-left-bottom-progressbar {
          width: 100%;
          margin: 40px 0;
          ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            li {
              display: flex;
              justify-content: flex-start;
              img {
                width: 15%;
                // font-weight: bold;
                // font-size: 18px;
                // color: #ffffff;
                // font-family: "JDZY";

                // padding-right: 10px;
                // border-right: 2px solid #00e4ff;
                // margin-right: 20px;
              }
              div {
                flex: 1;
                margin: auto 0;
                width: 100%;
                /deep/.el-progress-bar__outer {
                  background-color: #52575e;
                }
              }
              a {
                width: 12%;
                margin: auto 0;
                margin-left: 20px;
                font-size: 20px;
                font-weight: bold;
                color: #ffffff;
                font-family: "JDZY";
              }
            }
          }
        }
        .ceneter-left-bottom-copyright {
          padding: 20px 0;
          text-align: center;

          font-weight: bold;
          font-size: 40px;
          color: #ffffff;
          //font-family: "JDZY";
        }
      }
    }
    .mecha-ceneter-right {
      position: relative;
      top: 100px;

      float: right;

      // width: 69%;

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
      .mecha-ceneter-right-top {
        text-align: center;
        margin-bottom: 12px;

        font-size: 16px;
        color: #00e4ff;
        font-family: "JDZY";

        display: flex;
        // justify-content: space-between;
        img {
          margin-right: 10px;
          height: 100%;
          width: 11%;
        }
        .activeimg {
          border-radius: 5px;
          border: 1px solid #52575e;
        }
      }
      .mecha-ceneter-right-bottom {
        flex: 1;

        background: rgba(0, 0, 1, 0.7);
        border-radius: 20px;

        padding: 235px 0;
        padding-top: 60px;

        display: flex;
        flex-direction: column;
        .ul-title {
          padding: 0 5px;
          margin: 0 4%;
          margin-top: 10px;
          border-bottom: 1px solid #626262;

          display: flex;
          justify-content: space-evenly;
          span {
            padding: 10px 0;
            text-align: center;
            width: 12%;
            font-size: 14px;
            color: #626262;
            font-family: "JDZY";

            background: url("../../../assets/img/image-back1.png") no-repeat;
            background-size: 100% 100%;
          }
          .titleActive {
            padding: 10px 0;
            text-align: center;
            width: 12%;
            font-size: 14px;
            color: #ffffff;
            font-family: "JDZY";

            background: url("../../../assets/img/image-back111.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        ul {
          margin-top: 30px;
          margin-bottom: 40px;
          padding: 0 80px;
          //   height: 94%;
          display: flex;
          justify-content: space-between;

          flex-wrap: wrap;
          li {
            cursor: pointer;

            width: 11%;
            padding: 0px 1%;
            margin-bottom: 20px;

            display: flex;
            flex-direction: column;
            img {
              // width: 100%;
              // height: 100%;
            }
          }
        }
        .ceneter-right-bottom-bottom {
          //   flex: 1;

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
            background: url("../../../assets/img/btn-image1.png") no-repeat;
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
  #unity-canvas {
    width: 0px;
    width: 1152px !important;
  }
  .mecha-ceneter-right {
    position: relative;
    top: 20px;
    z-index: 999;

    right: 11%;

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
          width: 10%;
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
          width: 10%;
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
  }
}
</style>
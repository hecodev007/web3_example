<template>
  <!-- 合成 -->
  <div id="synthesis">
    <div class="synthesis-ceneter">
      <div class="synthesis-ceneter-left">
        <div class="synthesis-ceneter-left-bottom">
          <div class="ceneter-left-bottom-title">
            {{ $t("lang.Componentsynthesis") }}
          </div>
          <div class="ceneter-left-bottom-center">
            <div class="ceneter-left-bottom-center-top">
              <img
                src="../../../assets/img/image-item.png"
                alt=""
                v-if="JSON.stringify(partData) === '{}'"
                class="back-img2222"
              />
              <div v-else>
                <img
                  src="../../../assets/img/jijia-back-1.png"
                  alt=""
                  class="back-img1111"
                  v-if="partData.quality_level === 'N'"
                />
                <img
                  src="../../../assets/img/jijia-back-2.png"
                  alt=""
                  class="back-img1111"
                  v-if="partData.quality_level === 'R'"
                />
                <img
                  src="../../../assets/img/jijia-back-3.png"
                  alt=""
                  class="back-img1111"
                  v-if="partData.quality_level === 'SR'"
                />
                <img
                  src="../../../assets/img/jijia-back-4.png"
                  alt=""
                  class="back-img1111"
                  v-if="partData.quality_level === 'SSR'"
                />
                <img
                  src="../../../assets/img/jijia-back-5.png"
                  alt=""
                  class="back-img1111"
                  v-if="partData.quality_level === 'UR'"
                />
                <img
                  :src="partData.cover_photo"
                  alt=""
                  class="back-img2222"
                  v-if="showSynthesis === 0"
                />
                <img
                  src="../../../assets/img/synthesis-boder-su.gif"
                  alt=""
                  class="back-img2222"
                  v-if="showSynthesis === 1"
                />
              </div>
            </div>
            <div class="ceneter-left-bottom-center-image">
              <img
                src="../../../assets/img/image-back8.png"
                alt=""
                v-if="showSynthesis === 0"
              />
              <!-- <img src="../../../assets/img/synthesis-boder-back.gif" alt="" v-if="showSynthesis === 1"> -->
            </div>
            <div class="ceneter-left-bottom-center-center">
              <img
                src="../../../assets/img/image-item.png"
                alt=""
                v-if="JSON.stringify(resourceData) === '{}'"
                class="back-img22"
              />
              <div v-else @click="itemClick(resourceData.id, -1)">
                <img
                  src="../../../assets/img/jijia-back-1.png"
                  alt=""
                  class="back-img11"
                  v-if="resourceData.quality_level === 'N'"
                />
                <img
                  src="../../../assets/img/jijia-back-2.png"
                  alt=""
                  class="back-img11"
                  v-if="resourceData.quality_level === 'R'"
                />
                <img
                  src="../../../assets/img/jijia-back-3.png"
                  alt=""
                  class="back-img11"
                  v-if="resourceData.quality_level === 'SR'"
                />
                <img
                  src="../../../assets/img/jijia-back-4.png"
                  alt=""
                  class="back-img11"
                  v-if="resourceData.quality_level === 'SSR'"
                />
                <img
                  src="../../../assets/img/jijia-back-5.png"
                  alt=""
                  class="back-img11"
                  v-if="resourceData.quality_level === 'UR'"
                />
                <img
                  :src="resourceData.cover_photo"
                  alt=""
                  class="back-img22"
                />
                <div class="ul-li-div1">Lv.{{ resourceData.level }}</div>
              </div>
              <p>
                <span>{{ $t("lang.Successrate") }}</span>
                <a href="javascript:void(0);">{{ synthesis_success }}%</a>
              </p>
              <img
                src="../../../assets/img/image-item.png"
                alt=""
                v-if="JSON.stringify(materialData) === '{}'"
                class="back-img222"
              />
              <div v-else @click="itemClick(materialData.id, -2)">
                <img
                  src="../../../assets/img/jijia-back-1.png"
                  alt=""
                  class="back-img111"
                  v-if="materialData.quality_level === 'N'"
                />
                <img
                  src="../../../assets/img/jijia-back-2.png"
                  alt=""
                  class="back-img111"
                  v-if="materialData.quality_level === 'R'"
                />
                <img
                  src="../../../assets/img/jijia-back-3.png"
                  alt=""
                  class="back-img111"
                  v-if="materialData.quality_level === 'SR'"
                />
                <img
                  src="../../../assets/img/jijia-back-4.png"
                  alt=""
                  class="back-img111"
                  v-if="materialData.quality_level === 'SSR'"
                />
                <img
                  src="../../../assets/img/jijia-back-5.png"
                  alt=""
                  class="back-img111"
                  v-if="materialData.quality_level === 'UR'"
                />
                <img
                  :src="materialData.cover_photo"
                  alt=""
                  class="back-img222"
                />
                <div class="ul-li-div11">Lv.{{ materialData.level }}</div>
              </div>
            </div>
            <div class="ceneter-left-bottom-center-bottom">
              <img
                src="../../../assets/img/netmarkets-jian.png"
                alt=""
                @click="search1Click(0)"
              />
              <img
                src="../../../assets/img/image-backjian-met.png"
                alt=""
                class="pos-img"
              />
              <el-input
                v-model="met"
                placeholder=""
                :disabled="true"
              ></el-input>
              <img
                src="../../../assets/img/netmarkets-jia.png"
                alt=""
                @click="search1Click(1)"
              />
            </div>
          </div>
          <div class="ceneter-left-bottom-bottom">
            <div class="ceneter-left-bottom-bottom-top">
              <img src="../../../assets/img/image-backjian-egc.png" alt="" />
              <span>{{
                resourceData.synthesis_need_egc === undefined
                  ? 0
                  : resourceData.synthesis_need_egc
              }}</span>
            </div>
            <div class="ceneter-left-bottom-bottom-btn" @click="postSynthesis">
              {{ $t("lang.Synthesiss") }}
            </div>
          </div>
        </div>
      </div>
      <div class="synthesis-ceneter-right">
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
        <div class="synthesis-ceneter-right-bottom">
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
      :synthesisShow="synthesisShow"
      :objData="objData"
      :dialogVisible="dialogVisible"
      @showClick="showClick"
      @childClick="childClick"
    />
  </div>
</template>

<script>
import SyqDialog from "../../common/Dialog.vue";

//封装调用合约
import { connectMetamask, nft_compose } from "../../../abi/index";

//接口请求
import {
  postRoleinfo,
  postUserequip,
  postSynthesis,
  postEquiptype,
  postSynthesisequip,
  postInfo,
} from "api/index";

export default {
  name: "Synthesis",
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
      synthesisShow: true,

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
      selectIndex: 2,

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
      dataList1: [],
      //背包数据
      roleinfoData: [],
      //角色数据
      roleData: {},
      roleIndex: 0,

      //单个商品数据
      objData: {},

      //合成后的部件
      partData: {},

      //资源数据
      resourceData: {},
      //材料数据
      materialData: {},
      //资源水晶
      resourceCrystal: 5,
      //游戏代币
      met: 0,
      //合成成功率
      synthesis_success: 0,
      showSynthesis: 0,

      //角色id
      user_id: "",
      moneyObj: {},
      active: 0,
    };
  },
  methods: {
    //被点击的顶部栏
    selectClick(index) {
      this.$emit("clildClick", index);
      this.selectIndex = index;
    },

    //初始化
    async init() {
      await connectMetamask();
    },

    //背包数据
    async postInfo() {
      await postInfo().then((res) => {
        this.moneyObj = res.data.data;
      });
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
        this.dataList1 = res.data.data.rows;
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
        if (item.id != this.materialData.id) {
          this.dataList.push(item);
        }
      });
    },

    //商品被点击
    itemClick(id, value) {
      // alert('---')
      if (value === -1) {
        this.synthesisShow = false;
        this.active = -1;
      } else if (value === -2) {
        this.synthesisShow = false;
        this.active = -2;
      } else if (value === 1) {
        this.synthesisShow = true;
      }

      this.dialogVisible = true;

      // alert(id);
      this.dataList1.forEach((item) => {
        if (item.id === id) {
          // alert(item.id)
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
      if (value === -1) {
        // alert('卸下')
        if (this.active === -1) {
          // alert("资源");

          this.resourceData = {};
          // await this.postUserequip();
          this.dialogVisible = false;
          this.synthesis_success = 0

          this.dataList1.forEach((item) => {
            if (item.id === this.objData.id) {
              // alert(item.id)
              this.dataList.unshift(item);
            }
          });
        }
        if (this.active === -2) {
          // alert("材料");

          this.materialData = {};
          // await this.postUserequip();
          this.dialogVisible = false;

          this.dataList1.forEach((item) => {
            if (item.id === this.objData.id) {
              // alert(item.id)
              this.dataList.unshift(item);
            }
          })
        }
        return;
      }
      // alert(value)
      if (value === 2) {
        //材料
        if (this.objData.level <= 5) {
          // await this.postUserequip();
          this.materialData = this.objData;
          this.$message({
            message: this.$i18n.t("lang.Putinsuccessfully"),
            type: "success",
          });

          var data = this.dataList;
          this.dataList = [];

          data.forEach((item) => {
            if (item.id != this.materialData.id) {
              this.dataList.push(item);
            }
          });

          this.dialogVisible = false;
        }
      } else {
        //资源
        if (this.objData.level === 5) {
          // await this.postUserequip();
          this.resourceData = this.objData;
          this.synthesis_success = this.resourceData.synthesis_success_rate;
          this.$message({
            message: this.$i18n.t("lang.Putinsuccessfully"),
            type: "success",
          });

          var data = this.dataList;
          this.dataList = [];

          data.forEach((item) => {
            if (item.id != this.resourceData.id) {
              this.dataList.push(item);
            }
          });

          this.dialogVisible = false;
        } else {
          this.$message({
            message: this.$i18n.t("lang.Thelevelof"),
            type: "warning",
          });
        }
      }
    },

    //使用met
    search1Click(value) {
      if (value === 0) {
        if (JSON.stringify(this.resourceData) != "{}") {
          if (this.met > 0) {
            this.met--;
            this.synthesis_success -= 10;
          } else {
            this.$message({
              message: this.$i18n.t("lang.Minimummetvalue"),
              type: "warning",
            });
          }
        }
      } else {
        if (JSON.stringify(this.resourceData) != "{}") {
          if (this.met < 5) {
            this.met++;
            if (this.synthesis_success < 100) {
              this.synthesis_success += 10;
            }
          } else {
            this.$message({
              message: this.$i18n.t("lang.Maxmetvalue"),
              type: "warning",
            });
          }
        }
      }
    },

    //合成
    async postSynthesis() {
      if (this.met <= this.moneyObj.met_balance) {
        await postSynthesis(
          this.resourceData.nft_id,
          this.materialData.nft_id,
          this.met
        ).then(async (res) => {
          if (res.data.code === 0) {
            let nft_one = res.data.data.nft_one;
            let nft_two = res.data.data.nft_two;
            let id = res.data.data.id;

            //测试nftid 1031~1038
            const code = await nft_compose(nft_one, nft_two, id);

            if (code === 1) {
              this.showSynthesis = 1;
              await postSynthesisequip(res.data.data.id).then((res) => {
                this.partData = res.data.data;
              });

              this.resourceData = {};
              this.materialData = {};
              this.synthesis_success = 0;
              this.met = 0;

              setTimeout(() => {
                this.showSynthesis = 0;
              }, 1500);
              setTimeout(() => {
                this.partData = {};
              }, 3000);
              this.$message({
                message: res.data.message,
                type: "success",
              });
            }
            console.log(code);
          } else {
            this.$message({
              message: res.data.message,
              type: "warning",
            });
          }
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Insufficientmetbalance"),
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
    //调用初始化
    await this.init();
  },
};
</script>

<style lang="less" scoped>
#synthesis {
  width: 80%;
  margin: 0 auto;
  .synthesis-ceneter {
    padding: 20px 20px;
    // margin-top: 50px;
    height: 1000px;

    display: flex;
    justify-content: space-between;
    .synthesis-ceneter-left {
      margin-top: 120px;
      width: 30%;

      display: flex;
      flex-direction: column;
      .synthesis-ceneter-left-bottom {
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
          height: 100%;

          background: url("../../../assets/img/image-backcenter.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          .ceneter-left-bottom-center-top {
            text-align: center;
            position: relative;
            .back-img2222 {
              position: absolute;
              top: -100px;
              right: 36%;

              width: 100px;
              height: 100px;
              margin: 0 auto;
            }
            .back-img1111 {
              width: 100px;
              height: 100px;
              position: absolute;
              top: -100px;
              right: 36%;
            }
          }
          .ceneter-left-bottom-center-image {
            text-align: center;
            img {
              width: 55%;
            }
          }
          .ceneter-left-bottom-center-center {
            display: flex;
            justify-content: center;
            text-align: center;
            position: relative;

            .back-img22 {
              position: absolute;
              top: 0px;
              right: 70%;

              width: 100px;
              height: 100px;
              margin: 0 auto;
            }
            .back-img11 {
              width: 100px;
              height: 100px;
              position: absolute;
              top: 0;
              right: 70%;
            }
            .back-img222 {
              position: absolute;
              top: 0px;
              right: 4%;

              width: 100px;
              height: 100px;
              margin: 0 auto;
            }
            .back-img111 {
              width: 100px;
              height: 100px;
              position: absolute;
              top: 0;
              right: 4%;
            }
            .ul-li-div1 {
              position: absolute;
              top: 62px;
              left: 8px;

              padding: 5px 0;
              margin: 10px 10px;
              background: rgba(0, 0, 1, 0.7);
              color: orange;
              text-align: center;
              font-size: 10px;
              width: 95px;
            }
            .ul-li-div11 {
              position: absolute;
              top: 62px;
              right: 7px;

              padding: 5px 0;
              margin: 10px 10px;
              background: rgba(0, 0, 1, 0.7);
              color: orange;
              text-align: center;
              font-size: 10px;
              width: 95px;
            }
            p {
              margin: 0 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              span {
                font-size: 18px;
                color: #ffffff;
                font-family: "JDZY";
              }
              a {
                font-size: 18px;
                color: #d1aa31;
                font-family: "JDZY";
              }
            }
          }
          .ceneter-left-bottom-center-bottom {
            margin-top: 100px;
            text-align: center;

            display: flex;
            justify-content: center;
            img {
              width: 50px;
              height: 50px;
              margin-top: 25px;
            }
            .pos-img {
              width: 20px;
              height: 20px;
              margin-top: 25px;
              margin-left: 10px;
              padding-top: 15px;
            }
            div {
              margin: 0 10px;
              width: 100px;
              height: 100px;

              display: flex;
              flex-direction: column;
              justify-content: center;
              // background: url("../../../assets/img/image-item.png") no-repeat;
              // background-size: 100% 100%;
            }
            /deep/.el-input {
              height: 100%;
              margin: 12px 10px;
              display: flex;
            }
            /deep/.el-input__inner {
              // flex: 1;

              height: 48px;
              border: none;
              font-size: 20px;
              font-family: "JDZY";
              background: transparent;
              background: url("../../../assets/img/netmarkets-input.png")
                no-repeat;
              background-size: 100% 100%;

              margin: auto 0;
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
              color: #ffffff;
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
    .synthesis-ceneter-right {
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
        justify-content: space-between;
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
      }
      .synthesis-ceneter-right-bottom {
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
}
</style>
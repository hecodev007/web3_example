<template>
  <div id="dialog">
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="450px"
    >
      <div class="dialog-div">
        <ul class="ul-blind-box">
          <li>
            <div class="ul-li-div">
              <img
                :src="imgList.img2"
                alt=""
                class="image2"
                v-if="objData.quality_level === 'N'"
              />
              <div class="back-codersyq-text">Lv.{{ objData.level }}</div>
              <img
                :src="imgList.img22"
                alt=""
                class="image2"
                v-if="objData.quality_level === 'R'"
              />
              <img
                :src="imgList.img222"
                alt=""
                class="image2"
                v-if="objData.quality_level === 'SR'"
              />
              <img
                :src="imgList.img2222"
                alt=""
                class="image2"
                v-if="objData.quality_level === 'SSR'"
              />
              <img
                :src="imgList.img22222"
                alt=""
                class="image2"
                v-if="objData.quality_level === 'UR'"
              />
              <img
                :src="imgList.img1"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'N'"
              />
              <img
                :src="imgList.img11"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'R'"
              />
              <img
                :src="imgList.img111"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'SR'"
              />
              <img
                :src="imgList.img1111"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'SSR'"
              />
              <img
                :src="imgList.img11111"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'UR'"
              />
              <img :src="objData.big_cover_photo" alt="" class="image3" />
            </div>
            <div class="ul-li-div1">{{ objData.sword }}</div>
            <div class="ul-li-div2">
              <div class="back-codersyq-title">#{{ objData.nft_id }}</div>
              <img
                :src="imgList.img3"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'N'"
              />
              <img
                :src="imgList.img33"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'R'"
              />
              <img
                :src="imgList.img333"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'SR'"
              />
              <img
                :src="imgList.img3333"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'SSR'"
              />
              <img
                :src="imgList.img33333"
                alt=""
                class="image1"
                v-if="objData.quality_level === 'UR'"
              />
              <!-- BOdy -->
              <div
                class="ceneter-left-bottom-progressbar"
                v-if="objData.equip_type === 1"
              >
                <div class="progressbar-ul">
                  <!-- 生命 -->
                  <div class="progressbar-li" v-if="objData.life > 0">
                    <img
                      src="../../assets/img/icon-shengming.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">life</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.life) / 2510) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.life }}</span>
                  </div>
                  <!-- 攻击 -->
                  <div class="progressbar-li" v-if="objData.attack > 0">
                    <img
                      src="../../assets/img/icon-gongji.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">attack</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.attack) / 502) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.attack }}</span>
                  </div>
                  <!-- 回复 -->
                  <div class="progressbar-li" v-if="objData.reply > 0">
                    <img
                      src="../../assets/img/icon-huifu.png"
                      alt=""
                      class="imgg-hujia"
                    />
                    <!-- <span class="span1">reply</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.reply) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.reply }}</span>
                  </div>
                  <!-- 护甲 -->
                  <div class="progressbar-li" v-if="objData.armor > 0">
                    <img
                      src="../../assets/img/icon-hujia.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">armor</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.armor) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.armor }}</span>
                  </div>
                  <!-- 命中 -->
                  <div class="progressbar-li" v-if="objData.maneuver > 0">
                    <img
                      src="../../assets/img/icon-mingzhong.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">maneuver</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.maneuver) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.maneuver }}</span>
                  </div>
                </div>
              </div>
              <!-- Weapon -->
              <div
                class="ceneter-left-bottom-progressbar"
                v-if="objData.equip_type === 2"
              >
                <div class="progressbar-ul">
                  <!-- 攻击 -->
                  <div class="progressbar-li" v-if="objData.attack > 0">
                    <img
                      src="../../assets/img/icon-gongji.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">attack</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.attack) / 502) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.attack }}</span>
                  </div>
                  <!-- 生命 -->
                  <div class="progressbar-li" v-if="objData.life > 0">
                    <img
                      src="../../assets/img/icon-shengming.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">life</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.life) / 2510) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.life }}</span>
                  </div>
                  <!-- 回复 -->
                  <div class="progressbar-li" v-if="objData.reply > 0">
                    <img
                      src="../../assets/img/icon-huifu.png"
                      alt=""
                      class="imgg-hujia"
                    />
                    <!-- <span class="span1">reply</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.reply) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.reply }}</span>
                  </div>
                  <!-- 护甲 -->
                  <div class="progressbar-li" v-if="objData.armor > 0">
                    <img
                      src="../../assets/img/icon-hujia.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">armor</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.armor) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.armor }}</span>
                  </div>
                  <!-- 命中 -->
                  <div class="progressbar-li" v-if="objData.maneuver > 0">
                    <img
                      src="../../assets/img/icon-mingzhong.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">maneuver</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.maneuver) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.maneuver }}</span>
                  </div>
                </div>
              </div>
              <!-- Pauldrons -->
              <div
                class="ceneter-left-bottom-progressbar"
                v-if="objData.equip_type === 4"
              >
                <div class="progressbar-ul">
                  <!-- 护甲 -->
                  <div class="progressbar-li" v-if="objData.armor > 0">
                    <img
                      src="../../assets/img/icon-hujia.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">armor</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.armor) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.armor }}</span>
                  </div>
                  <!-- 生命 -->
                  <div class="progressbar-li" v-if="objData.life > 0">
                    <img
                      src="../../assets/img/icon-shengming.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">life</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.life) / 2510) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.life }}</span>
                  </div>
                  <!-- 攻击 -->
                  <div class="progressbar-li" v-if="objData.attack > 0">
                    <img
                      src="../../assets/img/icon-gongji.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">attack</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.attack) / 502) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.attack }}</span>
                  </div>
                  <!-- 回复 -->
                  <div class="progressbar-li" v-if="objData.reply > 0">
                    <img
                      src="../../assets/img/icon-huifu.png"
                      alt=""
                      class="imgg-hujia"
                    />
                    <!-- <span class="span1">reply</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.reply) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.reply }}</span>
                  </div>

                  <!-- 命中 -->
                  <div class="progressbar-li" v-if="objData.maneuver > 0">
                    <img
                      src="../../assets/img/icon-mingzhong.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">maneuver</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.maneuver) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.maneuver }}</span>
                  </div>
                </div>
              </div>
              <!-- Thruster -->
              <div
                class="ceneter-left-bottom-progressbar"
                v-if="objData.equip_type === 5"
              >
                <div class="progressbar-ul">
                  <!-- 命中 -->
                  <div class="progressbar-li" v-if="objData.maneuver > 0">
                    <img
                      src="../../assets/img/icon-mingzhong.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">maneuver</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.maneuver) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.maneuver }}</span>
                  </div>
                  <!-- 生命 -->
                  <div class="progressbar-li" v-if="objData.life > 0">
                    <img
                      src="../../assets/img/icon-shengming.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">life</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.life) / 2510) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.life }}</span>
                  </div>
                  <!-- 攻击 -->
                  <div class="progressbar-li" v-if="objData.attack > 0">
                    <img
                      src="../../assets/img/icon-gongji.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">attack</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.attack) / 502) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.attack }}</span>
                  </div>
                  <!-- 回复 -->
                  <div class="progressbar-li" v-if="objData.reply > 0">
                    <img
                      src="../../assets/img/icon-huifu.png"
                      alt=""
                      class="imgg-hujia"
                    />
                    <!-- <span class="span1">reply</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.reply) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.reply }}</span>
                  </div>
                  <!-- 护甲 -->
                  <div class="progressbar-li" v-if="objData.armor > 0">
                    <img
                      src="../../assets/img/icon-hujia.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">armor</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.armor) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.armor }}</span>
                  </div>
                </div>
              </div>
              <!-- Core -->
              <div
                class="ceneter-left-bottom-progressbar"
                v-if="objData.equip_type === 3"
              >
                <div class="progressbar-ul">
                  <!-- 回复 -->
                  <div class="progressbar-li" v-if="objData.reply > 0">
                    <img
                      src="../../assets/img/icon-huifu.png"
                      alt=""
                      class="imgg-hujia"
                    />
                    <!-- <span class="span1">reply</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.reply) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.reply }}</span>
                  </div>
                  <!-- 生命 -->
                  <div class="progressbar-li" v-if="objData.life > 0">
                    <img
                      src="../../assets/img/icon-shengming.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">life</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.life) / 2510) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.life }}</span>
                  </div>
                  <!-- 攻击 -->
                  <div class="progressbar-li" v-if="objData.attack > 0">
                    <img
                      src="../../assets/img/icon-gongji.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">attack</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.attack) / 502) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.attack }}</span>
                  </div>
                  <!-- 护甲 -->
                  <div class="progressbar-li" v-if="objData.armor > 0">
                    <img
                      src="../../assets/img/icon-hujia.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">armor</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.armor) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.armor }}</span>
                  </div>
                  <!-- 命中 -->
                  <div class="progressbar-li" v-if="objData.maneuver > 0">
                    <img
                      src="../../assets/img/icon-mingzhong.png"
                      alt=""
                      class="imgg"
                    />
                    <!-- <span class="span1">maneuver</span> -->
                    <div>
                      <el-progress
                        color="#d4c190"
                        :show-text="false"
                        :percentage="(Number(objData.maneuver) / 251) * 100"
                        status="success"
                      ></el-progress>
                    </div>
                    <span>{{ objData.maneuver }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dialog-div-bottom">
              <div
                class="dialog-div-bottom-install"
                @click="childClick(0)"
                v-if="upgradeShow"
              >
                {{ $t("lang.Putintoa") }}
              </div>
              <div
                class="dialog-div-bottom-install"
                @click="childClick(1)"
                v-if="!upgradeShow && diaText === 'equipment'"
              >
                裝備
              </div>
              <div
                class="dialog-div-bottom-remove"
                @click="childClick(-1)"
                v-if="!upgradeShow && !synthesisShow"
              >
                {{ $t("lang.Remove") }}
              </div>
              <div
                class="dialog-div-bottom-install"
                @click="childClick(3)"
                v-if="synthesisShow"
              >
                {{ $t("lang.Mainmaterial") }}
              </div>
              <div
                class="dialog-div-bottom-install"
                @click="childClick(2)"
                v-if="synthesisShow"
              >
                {{ $t("lang.Secondarymaterial") }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    objData: {
      type: Object,
      default() {
        return {};
      },
    },
    dialogVisible: {
      type: Boolean,
      default() {
        return false;
      },
    },
    upgradeShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
    synthesisShow: {
      type: Boolean,
      default() {
        return false;
      },
    },
    diaText: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      imgList: {
        img1: require("../../assets/img/netmarkets-back1.png"),
        img11: require("../../assets/img/netmarkets-back2.png"),
        img111: require("../../assets/img/netmarkets-back3.png"),
        img1111: require("../../assets/img/netmarkets-back4.png"),
        img11111: require("../../assets/img/netmarkets-back5.png"),
        img2: require("../../assets/img/netmarkets-back11.png"),
        img22: require("../../assets/img/netmarkets-back22.png"),
        img222: require("../../assets/img/netmarkets-back33.png"),
        img2222: require("../../assets/img/netmarkets-back44.png"),
        img22222: require("../../assets/img/netmarkets-back55.png"),
        img3: require("../../assets/img/netmarkets-back111.png"),
        img33: require("../../assets/img/netmarkets-back222.png"),
        img333: require("../../assets/img/netmarkets-back333.png"),
        img3333: require("../../assets/img/netmarkets-back444.png"),
        img33333: require("../../assets/img/netmarkets-back555.png"),
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$emit("showClick");
    },
    childClick(value) {
      this.$emit("childClick", value);
    },
  },
};
</script>

<style lang="less" scoped>
#dialog {
  /deep/.el-dialog {
    height: 700px;
    margin-right: 33%;
    margin-top: 15vh !important;

    background: transparent;
  }
  /deep/.el-dialog__headerbtn {
    display: none;
  }
  .dialog-div {
    // width: 60%;
    // padding: 0 50px;

    // background: url("../../assets/img/image-dig.png") no-repeat;
    // background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .ul-blind-box {
      display: flex;
      justify-content: space-between;
      li {
        height: 610px;
        width: 250px;

        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        .ul-li-div {
          position: relative;
          height: 60%;
          .image1 {
            position: absolute;
            top: 0;

            width: 100%;
            height: 100%;
          }
          .image2 {
            padding: 10px 10px;
            position: absolute;
            top: 0px;

            width: 92%;
            height: 95%;
          }
          .image3 {
            position: absolute;
            left: 13%;
            top: 29%;

            width: 150px;
            height: 200px;
          }
          .back-codersyq-text {
            position: absolute;
            bottom: 25px;
            left: 44%;
            color: orange;
          }
        }
        .ul-li-div1 {
          background: url("../../assets/img/coder-syq-pfk.png") no-repeat;
          background-size: 100% 100%;
          color: orange;
          text-align: center;
        }
        .ul-li-div2 {
          position: relative;
          height: 20%;
          .back-codersyq-title {
            position: absolute;
            top: 20px;
            left: 43%;
            color: orange;
          }
          .image1 {
            width: 100%;
            height: 100%;
          }
          .ceneter-left-bottom-progressbar {
            position: absolute;
            top: 20px;

            width: 100%;
            margin: 0 auto;
            .progressbar-ul {
              // height: 100%;
              display: flex;
              flex-direction: column;
              .progressbar-li {
                margin: 10px 20px;
                display: flex;
                justify-content: center;
                .imgg {
                  width: 20px;
                  height: 20px;
                  // font-weight: bold;
                  // font-size: 18px;
                  // color: #ffffff;
                  // font-family: "JDZY";

                  // padding-right: 10px;
                  // border-right: 2px solid #00e4ff;
                  // margin-right: 20px;
                }
                .imgg-hujia {
                  width: 20px !important;
                  height: 20px !important;
                }
                span {
                  // margin: auto 20px;
                  color: #ffffff;
                  font-size: 14px;
                  font-family: "JDZY";

                  // overflow: hidden;
                  // text-overflow: ellipsis;
                  // white-space: nowrap;
                }
                .span1 {
                  margin: auto 0;
                  color: #ffffff;
                  font-size: 12px;
                  font-family: "JDZY";
                }
                div {
                  flex: 1;
                  margin: auto 13px;
                  width: 100px;
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
        }
        .ul-li-div3 {
          height: 10%;

          background: url("../../assets/img/netmarkets-back1111.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          div {
            margin: 0 10px;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            img {
              width: 20px;
              height: 20px;
            }
            span {
              font-size: 18px;
              font-weight: bold;
              color: #ffffff;
              font-family: "JDZY";
            }
            p {
              color: transparent;
            }
          }
        }
        p {
          position: relative;
          top: 80px;
          left: 115%;

          height: 10%;
          font-size: 16px;
          // font-weight: bold;
          color: #ffffff;
          font-family: "JDZY";
          text-align: center;
        }
      }
    }
    .dialog-div-bottom {
      // height: 20%;
      margin: 40px 0;
      margin-top: 10px;

      display: flex;
      justify-content: space-around;
      .dialog-div-bottom-install {
        padding: 10px 10px;
        margin: 0 5px;

        font-size: 12px;
        font-weight: bold;
        color: #3a3a3b;
        font-family: "JDZY";

        background: url("../../assets/img/btn-image2.png") no-repeat;
        background-size: 100% 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dialog-div-bottom-remove {
        padding: 10px 10px;

        font-size: 12px;
        font-weight: bold;
        color: #fefefe;
        font-family: "JDZY";

        background: url("../../assets/img/btn-image1.png") no-repeat;
        background-size: 100% 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
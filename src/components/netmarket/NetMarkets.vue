<template>
  <div id="netmarkets">
    <div class="netmarkets-cneter" v-loading="loading">
      <!-- 宝箱 -->
      <div class="netmarkets-top">
        <div class="netmarkets-top-left">
          <div class="netmarkets-top-right-progress-bar">
            <div>
              <el-progress
                color="#779ac5"
                :percentage="Number(proVal) === 0 ? 1 : Number(proVal)"
                status="success"
                :text-inside="true"
              ></el-progress>
            </div>
            <img
              src="../../assets/img/netmarkets-back-ss.png"
              alt=""
              @click="titleShow = !titleShow"
            />
          </div>
          <div class="netmarkets-top-left-title1" v-if="titleShow">
            <span>{{ $t("lang.Everytimeyoudraw") }}</span>
          </div>
          <div class="netmarkets-top-left-text">
            <span>{{ $t("lang.DividendPrizePool") }}: </span>
            <img src="../../assets/img/netmarkets-busd.png" alt="" />&nbsp;
            <span>{{ Math.floor(getRewardInfo * 100) / 100 }}</span>
            <img
              src="../../assets/img/netmarkets-back-ss.png"
              alt=""
              @click="awardShow = !awardShow"
            />
          </div>
          <div class="netmarkets-top-left-title" v-if="awardShow">
            <p>
              {{ $t("lang.Dividendthisweek") }}
              {{ Math.floor((myReward / 1000000000000000000) * 10) / 10 }}
            </p>
            <span>{{ $t("lang.Everyweek") }}</span>
          </div>
          <div class="netmarkets-top-left-input">
            <div class="netmarkets-top-left-input-top">
              <span>{{ $t("lang.Drawtime") }}:&nbsp;</span>
              <span>
                {{ openRewardTime.Sky }}
                <a href="javascript:void(0)"> {{ $t("lang.Sky") }}</a>
                {{ openRewardTime.Time }}
                <a href="javascript:void(0)"> {{ $t("lang.Time") }}</a>
                {{ openRewardTime.Minute }}
                <a href="javascript:void(0)"> {{ $t("lang.Minute") }}</a>
              </span>
            </div>
            <div class="netmarkets-top-left-input-center">
              <span>{{ $t("lang.Mydividend") }}:</span>
              <img src="../../assets/img/netmarkets-busd.png" alt="" />
              <span>{{
                Math.floor((myReward / 1000000000000000000) * 100) / 100
              }}</span>
              <div
                class="netmarkets-top-left-input-center-btn"
                v-if="
                  time <= 0 &&
                  Math.floor((myReward / 1000000000000000000) * 100) / 100 > 0
                "
                @click="diaShow = true"
              >
                <span>{{ $t("lang.Receive") }}</span>
              </div>
              <div class="netmarkets-top-left-input-center-btn1" v-else>
                <span>{{ $t("lang.Receive") }}</span>
              </div>
            </div>
            <div class="netmarkets-top-left-input-bottom">
              <div class="netmarkets-top-left-input-bottom-span1">
                <span>{{ $t("lang.Participateindividends") }}:&nbsp;</span>
                <span>{{ totalCrystalNft }}</span>
              </div>
              <div
                class="netmarkets-top-left-input-bottom-span2"
                v-if="userCrystalNft > 0"
              >
                <span>{{ $t("lang.Personalparticipation") }}:&nbsp;</span>
                <span>{{ userCrystalNft }}</span>
              </div>
            </div>
          </div>
          <div class="netmarkets-top-left-input-btn">
            <div class="netmarkets-top-left-input1" v-if="consumptionShow">
              <div class="netmarkets-top-left-input-top">
                <p>
                  <span>{{ $t("lang.Mydividend") }}:</span>
                  <img src="../../assets/img/netmarkets-busd.png" alt="" />
                  <span>{{
                    Math.floor((myReward / 1000000000000000000) * 100) / 100
                  }}</span>
                </p>
                <p>
                  <img src="../../assets/img/nft-back-zhiy.png" alt="" />
                  <span>{{ myCrystalBalance }}</span>
                </p>
              </div>
              <div class="netmarkets-top-left-input-center">
                <el-input v-model="search2" placeholder=""></el-input>
              </div>
              <div class="netmarkets-top-left-input-bottom">
                <div
                  class="netmarkets-top-left-btn-coder"
                  @click="postDividends"
                >
                  {{ $t("lang.Sure") }}
                </div>
                <div
                  class="netmarkets-top-left-btn-coder"
                  @click="consumptionShow = false"
                >
                  {{ $t("lang.Cancel") }}
                </div>
              </div>
            </div>
            <div
              class="netmarkets-top-left-btn"
              @click="consumptionShow = !consumptionShow"
            >
              <img src="../../assets/img/nft-back-zhiy.png" alt="" />
              <p>{{ myCrystalBalance }}</p>
            </div>
          </div>
        </div>
        <div class="netmarkets-top-center">
          <!-- <div class="netmarkets-top-center-top">
            {{ $t("lang.Treasurechests") }}
          </div> -->
          <div class="netmarkets-top-center-center">
            <img src="" alt="" />
          </div>
          <div class="netmarkets-top-center-btn">
            <div class="netmarkets-top-left-num" v-if="showBtn">
              <img
                src="../../assets/img/netmarkets-jian.png"
                alt=""
                @click="search1Click(0)"
              />
              <el-input v-model="search1" placeholder=""></el-input>
              <img
                src="../../assets/img/netmarkets-jia.png"
                alt=""
                @click="search1Click(1)"
              />
            </div>
            <div
              class="netmarkets-top-left-btn1"
              @click="markInfo"
              v-if="postUserinfo === 1"
            >
              <span>{{ $t("lang.Use") }}</span>
              <img src="../../assets/img/netmarkets-busd.png" alt="" />
              <p>
                {{ (search1 * 5 * Number(getPrice)) / 1000000000000000000 }}
              </p>
            </div>
            <div class="netmarkets-top-left-btn2" v-else>
              <span>{{ $t("lang.Use") }}</span>
              <img src="../../assets/img/netmarkets-busd.png" alt="" />
              <p>
                {{ (search1 * 5 * Number(getPrice)) / 1000000000000000000 }}
              </p>
            </div>
          </div>
        </div>
        <div class="netmarkets-top-right">
          <!-- <span>{{ $t("lang.Sweepstakesinstructions") }}</span> -->
        </div>
      </div>
    </div>
    <div class="netmarkets-bottom">
      <ul>
        <li v-for="item in proList" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- 开盲盒个数 -->
    <!-- <el-dialog title="提示" :visible.sync="dialogShow" width="80%">
      <ul class="ul-coder-syq">
        <li v-for="(item, index) in search1" :key="index" @click="markInfo">
          <img src="../../assets/img/baoxiang.png" alt="">
        </li>
      </ul>
      <div class="ceneter-right-bottom-bottom">
        <div class="ceneter-right-bottom-bottom-left" @click="PageClick(0)">
          {{ $t("lang.Previouspage") }}
        </div>
        <div class="ceneter-right-bottom-bottom-center">
          {{ page }}/{{ dataList2.length }}
        </div>
        <div class="ceneter-right-bottom-bottom-right" @click="PageClick(1)">
          {{ $t("lang.Nextpage") }}
        </div>
      </div>
    </el-dialog> -->

    <!-- 开盲盒获得奖励 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      class="el-dialog-one"
    >
      <h1 v-if="crystalShow" class="h1">
        <img src="../../assets/img/nft-back-zhiy.png" alt="" />
        <span>+1</span>
      </h1>
      <ul class="ul-blind-box">
        <li v-for="(item, index) in dataList1" :key="index">
          <div class="ul-li-div">
            <img
              :src="imgList[index].img2"
              alt=""
              class="image2"
              v-if="item.quality_level === 'N'"
            />
            <div class="back-codersyq-text">Lv.1</div>
            <img
              :src="imgList[index].img22"
              alt=""
              class="image2"
              v-if="item.quality_level === 'R'"
            />
            <img
              :src="imgList[index].img222"
              alt=""
              class="image2"
              v-if="item.quality_level === 'SR'"
            />
            <img
              :src="imgList[index].img2222"
              alt=""
              class="image2"
              v-if="item.quality_level === 'SSR'"
            />
            <img
              :src="imgList[index].img22222"
              alt=""
              class="image2"
              v-if="item.quality_level === 'UR'"
            />
            <img
              :src="imgList[index].img1"
              alt=""
              class="image1"
              v-if="item.quality_level === 'N'"
            />
            <img
              :src="imgList[index].img11"
              alt=""
              class="image1"
              v-if="item.quality_level === 'R'"
            />
            <img
              :src="imgList[index].img111"
              alt=""
              class="image1"
              v-if="item.quality_level === 'SR'"
            />
            <img
              :src="imgList[index].img1111"
              alt=""
              class="image1"
              v-if="item.quality_level === 'SSR'"
            />
            <img
              :src="imgList[index].img11111"
              alt=""
              class="image1"
              v-if="item.quality_level === 'UR'"
            />
            <img :src="item.big_cover_photo" alt="" class="image3" />
          </div>
          <div class="ul-li-div1">{{ item.sword }}</div>
          <div class="ul-li-div2">
            <div class="back-codersyq-title">#{{ item.nft_id }}</div>
            <img
              :src="imgList[index].img3"
              alt=""
              class="image1"
              v-if="item.quality_level === 'N'"
            />
            <img
              :src="imgList[index].img33"
              alt=""
              class="image1"
              v-if="item.quality_level === 'R'"
            />
            <img
              :src="imgList[index].img333"
              alt=""
              class="image1"
              v-if="item.quality_level === 'SR'"
            />
            <img
              :src="imgList[index].img3333"
              alt=""
              class="image1"
              v-if="item.quality_level === 'SSR'"
            />
            <img
              :src="imgList[index].img33333"
              alt=""
              class="image1"
              v-if="item.quality_level === 'UR'"
            />
            <!-- BOdy -->
            <div
              class="ceneter-left-bottom-progressbar"
              v-if="item.equip_type === 1"
            >
              <div class="progressbar-ul">
                <!-- 生命 -->
                <div class="progressbar-li" v-if="item.life > 0">
                  <img src="../../assets/img/icon-shengming.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.life) / 2510) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.life }}</span>
                </div>
                <!-- 攻击 -->
                <div class="progressbar-li" v-if="item.attack > 0">
                  <img src="../../assets/img/icon-gongji.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.attack) / 502) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.attack }}</span>
                </div>
                <!-- 回复 -->
                <div class="progressbar-li" v-if="item.reply > 0">
                  <img src="../../assets/img/icon-huifu.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.reply) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.reply }}</span>
                </div>
                <!-- 护甲 -->
                <div class="progressbar-li" v-if="item.armor > 0">
                  <img src="../../assets/img/icon-hujia.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.armor) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.armor }}</span>
                </div>
                <!-- 命中 -->
                <div class="progressbar-li" v-if="item.maneuver > 0">
                  <img src="../../assets/img/icon-mingzhong.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.maneuver) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.maneuver }}</span>
                </div>
              </div>
            </div>
            <!-- Weapon -->
            <div
              class="ceneter-left-bottom-progressbar"
              v-if="item.equip_type === 2"
            >
              <div class="progressbar-ul">
                <!-- 攻击 -->
                <div class="progressbar-li" v-if="item.attack > 0">
                  <img src="../../assets/img/icon-gongji.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.attack) / 502) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.attack }}</span>
                </div>
                <!-- 生命 -->
                <div class="progressbar-li" v-if="item.life > 0">
                  <img src="../../assets/img/icon-shengming.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.life) / 2510) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.life }}</span>
                </div>
                <!-- 回复 -->
                <div class="progressbar-li" v-if="item.reply > 0">
                  <img src="../../assets/img/icon-huifu.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.reply) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.reply }}</span>
                </div>
                <!-- 护甲 -->
                <div class="progressbar-li" v-if="item.armor > 0">
                  <img src="../../assets/img/icon-hujia.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.armor) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.armor }}</span>
                </div>
                <!-- 命中 -->
                <div class="progressbar-li" v-if="item.maneuver > 0">
                  <img src="../../assets/img/icon-mingzhong.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.maneuver) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.maneuver }}</span>
                </div>
              </div>
            </div>
            <!-- Pauldrons -->
            <div
              class="ceneter-left-bottom-progressbar"
              v-if="item.equip_type === 4"
            >
              <div class="progressbar-ul">
                <!-- 护甲 -->
                <div class="progressbar-li" v-if="item.armor > 0">
                  <img src="../../assets/img/icon-hujia.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.armor) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.armor }}</span>
                </div>
                <!-- 攻击 -->
                <div class="progressbar-li" v-if="item.attack > 0">
                  <img src="../../assets/img/icon-gongji.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.attack) / 502) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.attack }}</span>
                </div>
                <!-- 生命 -->
                <div class="progressbar-li" v-if="item.life > 0">
                  <img src="../../assets/img/icon-shengming.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.life) / 2510) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.life }}</span>
                </div>
                <!-- 回复 -->
                <div class="progressbar-li" v-if="item.reply > 0">
                  <img src="../../assets/img/icon-huifu.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.reply) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.reply }}</span>
                </div>
                <!-- 命中 -->
                <div class="progressbar-li" v-if="item.maneuver > 0">
                  <img src="../../assets/img/icon-mingzhong.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.maneuver) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.maneuver }}</span>
                </div>
              </div>
            </div>
            <!-- Thruster -->
            <div
              class="ceneter-left-bottom-progressbar"
              v-if="item.equip_type === 5"
            >
              <div class="progressbar-ul">
                <!-- 命中 -->
                <div class="progressbar-li" v-if="item.maneuver > 0">
                  <img src="../../assets/img/icon-mingzhong.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.maneuver) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.maneuver }}</span>
                </div>
                <!-- 攻击 -->
                <div class="progressbar-li" v-if="item.attack > 0">
                  <img src="../../assets/img/icon-gongji.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.attack) / 502) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.attack }}</span>
                </div>
                <!-- 生命 -->
                <div class="progressbar-li" v-if="item.life > 0">
                  <img src="../../assets/img/icon-shengming.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.life) / 2510) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.life }}</span>
                </div>
                <!-- 回复 -->
                <div class="progressbar-li" v-if="item.reply > 0">
                  <img src="../../assets/img/icon-huifu.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.reply) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.reply }}</span>
                </div>
                <!-- 护甲 -->
                <div class="progressbar-li" v-if="item.armor > 0">
                  <img src="../../assets/img/icon-hujia.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.armor) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.armor }}</span>
                </div>
              </div>
            </div>
            <!-- Core -->
            <div
              class="ceneter-left-bottom-progressbar"
              v-if="item.equip_type === 3"
            >
              <div class="progressbar-ul">
                <!-- 回复 -->
                <div class="progressbar-li" v-if="item.reply > 0">
                  <img src="../../assets/img/icon-huifu.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.reply) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.reply }}</span>
                </div>
                <!-- 攻击 -->
                <div class="progressbar-li" v-if="item.attack > 0">
                  <img src="../../assets/img/icon-gongji.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.attack) / 502) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.attack }}</span>
                </div>
                <!-- 生命 -->
                <div class="progressbar-li" v-if="item.life > 0">
                  <img src="../../assets/img/icon-shengming.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.life) / 2510) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.life }}</span>
                </div>
                <!-- 护甲 -->
                <div class="progressbar-li" v-if="item.armor > 0">
                  <img src="../../assets/img/icon-hujia.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.armor) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.armor }}</span>
                </div>
                <!-- 命中 -->
                <div class="progressbar-li" v-if="item.maneuver > 0">
                  <img src="../../assets/img/icon-mingzhong.png" alt="" />
                  <div>
                    <el-progress
                      color="#d4c190"
                      :show-text="false"
                      :percentage="(Number(item.maneuver) / 251) * 100"
                      status="success"
                    ></el-progress>
                  </div>
                  <span>{{ item.maneuver }}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ul-li-div3"
            v-if="index === 1 && item.cover_resource === '1001'"
          >
            <div>
              <img src="../../assets/img/hoem-back-card-iocn3.png" alt="" />
              <span>{{ $t("lang.LaserCannon") }}</span>
              <p>21</p>
            </div>
          </div>
          <p v-if="index === 1 && item.cover_resource === '1001'">
            {{ $t("lang.Normalcombat") }}
          </p>
          <div
            class="ul-li-div3"
            v-if="index === 1 && item.cover_resource === '1002'"
          >
            <div>
              <img src="../../assets/img/hoem-back-card-iocn3.png" alt="" />
              <span>{{ $t("lang.Missile") }}</span>
              <p>21</p>
            </div>
          </div>
          <p v-if="index === 1 && item.cover_resource === '1002'">
            {{ $t("lang.Themostcommon") }}
          </p>
          <div
            class="ul-li-div3"
            v-if="index === 1 && item.cover_resource === '1003'"
          >
            <div>
              <img src="../../assets/img/hoem-back-card-iocn3.png" alt="" />
              <span>{{ $t("lang.Electromagneticgun") }}</span>
              <p>21</p>
            </div>
          </div>
          <p v-if="index === 1 && item.cover_resource === '1003'">
            {{ $t("lang.Commoncombat") }}
          </p>
          <div
            class="ul-li-div3"
            v-if="index === 1 && item.cover_resource === '1004'"
          >
            <div>
              <img src="../../assets/img/hoem-back-card-iocn3.png" alt="" />
              <span>{{ $t("lang.GalaxyCannon") }}</span>
              <p>21</p>
            </div>
          </div>
          <p v-if="index === 1 && item.cover_resource === '1004'">
            {{ $t("lang.Anextremelyrare") }}
          </p>
          <div
            class="ul-li-div3"
            v-if="index === 1 && item.cover_resource === '1005'"
          >
            <div>
              <img src="../../assets/img/hoem-back-card-iocn3.png" alt="" />
              <span>{{ $t("lang.FloatingCannon") }}</span>
              <p>21</p>
            </div>
          </div>
          <p v-if="index === 1 && item.cover_resource === '1005'">
            {{ $t("lang.Rarecombatskills") }}
          </p>
        </li>
        <!-- <li v-if="dataList1.peg === 1">
          <img src="../../assets/img/icon-img1.png" alt="" />
          <p>{{ $t("lang.Participatein") }}</p>
        </li> -->
      </ul>
      <div class="ceneter-right-bottom-bottom" v-if="totalPage > 1">
        <div class="ceneter-right-bottom-bottom-left" @click="PageClick(0)">
          {{ $t("lang.Previouspage") }}
        </div>
        <div class="ceneter-right-bottom-bottom-center">
          {{ page }}/{{ totalPage }}
        </div>
        <div class="ceneter-right-bottom-bottom-right" @click="PageClick(1)">
          {{ $t("lang.Nextpage") }}
        </div>
      </div>
    </el-dialog>

    <div v-if="diaShow" class="el-dialog-tow" width="20%">
      <span>{{ $t("lang.Willreceivedividends") }}</span>
      <div class="el-dialog-tow-div">
        <img src="../../assets/img/netmarkets-busd.png" alt="" />
        <span>{{
          Math.floor((myReward / 1000000000000000000) * 100) / 100
        }}</span>
      </div>
      <p>{{ $t("lang.TiPS") }}</p>
      <span slot="footer" class="dialog-footer">
        <div class="netmarkets-top-left-input-center-btn1" @click="claimClick">
          <span>{{ $t("lang.Sure") }}</span>
        </div>
        <div
          class="netmarkets-top-left-input-center-btn2"
          @click="diaShow = false"
        >
          <span>{{ $t("lang.Cancel") }}</span>
        </div>
      </span>
    </div>

    <!-- 底部版权 -->
    <CopyRight />
  </div>
</template>

<script>
import CopyRight from "../common/CopyRight.vue";

//封装调用合约
import {
  connectMetamask,
  initHash,
  batchMint,
  probabilityWinning,
  resourceCrystal,
  myReward,
  myCrystalBalance,
  openRewardTime,
  totalCrystalNft,
  setApprovalForAll_Crystal,
  isAut,
  stake_batch_crystal_nft,
  myCrystals,
  getRewardInfo,
  getPrice,
  userCrystalNft,
  claim,
} from "../../abi/index";

//接口请求
import { postInfo, postDividends, markInfo, postUserinfo } from "api/index";

export default {
  name: "NetMarkets",
  components: {
    CopyRight,
  },
  data() {
    return {
      diaShow: false,
      //分红数量
      search2: 0,
      //抽奖数量
      search1: 1,
      //个数弹窗
      // dialogShow: false,
      //奖励结果弹窗
      dialogVisible: false,
      //奖励show
      awardShow: false,
      //消费show
      consumptionShow: false,
      titleShow: false,

      //概率值信息
      proList: ["80%", "15%", "4%", "0.8%", "0.2%"],
      imgList: [
        {
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
        {
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
        {
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
        {
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
        {
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
      ],

      //页面数据
      dataObj: {},
      boxDataList: {},

      //抽奖奖励数据 呈现
      dataList1: [],
      //抽奖奖励数据 分页
      dataList2: [],

      //资源水晶值变化
      crystal: 0,
      //分红池数量
      getRewardInfo: 0,
      //我的分红
      myReward: 0,
      //资源水晶数量
      myCrystalBalance: 0,
      //开奖时间
      openRewardTime: {
        Sky: 0,
        Time: 0,
        Minute: 0,
      },
      //参与分红的资源水晶总数量
      totalCrystalNft: 0,
      getPrice: 0,
      userCrystalNft: 0,

      //资源水晶是否展示
      crystalShow: false,
      //抽奖概率
      proVal: 1,

      //当前页
      page: 1,
      //统共页数，默认为1
      totalPage: 1,
      //每页显示数量
      pageSize: 5,
      loading: false,
      time: 0,

      postUserinfo: 0,
      showBtn: true,
    };
  },
  methods: {
    async claimClick() {
      var code = await claim();
      if (code === 1) {
        this.$message({
          message: this.$i18n.t("lang.Receivedsuccessfully"),
          type: "success",
        });
      } else {
        this.$message({
          message: this.$i18n.t("lang.Failedtoclaim"),
          type: "warning",
        });
      }
      this.diaShow = false;
      await this.init();
      await this.initTine();
    },

    formatSecond(second) {
      let d = parseInt(second / 86400);
      d = d < 10 ? "0" + d : d;
      let h = parseInt((second % 86400) / 3600);
      h = h < 10 ? "0" + h : h;
      let m = parseInt(((second % 86400) % 3600) / 60);
      m = m < 10 ? "0" + m : m;
      // 作为返回值返回
      this.openRewardTime.Sky = d;
      this.openRewardTime.Time = h;
      this.openRewardTime.Minute = m;
    },
    async initTine() {
      //开奖时间
      var time = await openRewardTime();
      this.time = time;
      console.log(time);
      await this.formatSecond(time);
    },

    //初始化数据
    async init() {
      await connectMetamask();

      await postUserinfo().then((res) => {
        if (!res.data.data.is_priority_mint) {
          this.showBtn = true;
          this.postUserinfo = 1;
        } else {
          this.showBtn = false;
          if (res.data.data.priority_mint_times >= 1) {
            this.postUserinfo = 1;
          } else {
            this.postUserinfo = 0;
          }
        }
      });

      console.log("init");
      //抽奖概率值
      this.proVal = await probabilityWinning();
      console.log("抽奖概率值" + this.proVal);

      await postInfo().then((res) => {
        console.log(res);
        this.dataObj = res.data.data;
        // this.search2 = this.dataObj.busd_balance;
      });

      //是否抽中资源水晶
      this.crystal = await resourceCrystal();
      console.log("resourceCrystal" + this.crystal);

      // //分红池数量
      this.getRewardInfo = await getRewardInfo();
      console.log("分红池数量" + this.getRewardInfo);
      //我的分红
      this.myReward = await myReward();
      console.log("我的分红" + this.myReward);
      // 资源水晶数量
      this.myCrystalBalance = await myCrystalBalance();
      console.log("资源水晶数量" + this.myCrystalBalance);
      //参与分红的资源水晶总数量
      this.totalCrystalNft = await totalCrystalNft();
      console.log("参与分红的资源水晶总数量" + this.totalCrystalNft);
      this.getPrice = await getPrice();
      //个人分红
      this.userCrystalNft = await userCrystalNft();
      console.log("个人分红" + this.userCrystalNft);
    },

    //点击抽奖
    async markInfo() {
      //调用合约
      this.loading = true;
      var codemassge = await initHash();
      // alert(codemassge)
      if (codemassge === 1) {
        var code = await batchMint(this.search1);
        if (code === 1) {
          this.loading = false;

          this.dialogVisible = true;
          this.dataList1 = [];
          this.dataList2 = [];
          await markInfo(this.page, this.search1 * 5).then(async (res) => {
            //是否抽中资源水晶
            const crystal = await resourceCrystal();
            console.log(crystal);
            //判断是否获得资源水晶
            if (crystal > this.crystal) {
              this.crystalShow = true;
            }

            await this.init();
            this.page = 1;

            //按照box id分组，box按照要求的顺序排序
            await this.sortByMulti(res.data.data.rows);

            this.dataList1 = res.data.data.rows;
            this.dataList2 = res.data.data.rows;
            console.log(res);

            await this.setCurrentPageDataV2();
          });
        }
      }
      this.loading = false;
    },

    //点击使用资源水晶
    async postDividends() {
      this.loading = true;
      const data = await myCrystals();
      console.log(data);

      if (data.length >= Number(this.search2)) {
        if (this.search2 > 0) {
          var num = data.slice(0, Number(this.search2));
          console.log(num);

          var codemassge = await isAut();
          // alert(codemassge)
          if (codemassge === 1) {
            const code = await stake_batch_crystal_nft(num);
            if (code === 1) {
              this.loading = false;

              await this.init();
              this.$message({
                message: this.$i18n.t("lang.Pledgesuccess"),
                type: "success",
              });
            }
          }
        } else {
          this.$message({
            message: this.$i18n.t("lang.Enteramount"),
            type: "warning",
          });
        }
      } else {
        this.$message({
          message: this.$i18n.t("lang.Insufficientresourcecrystals"),
          type: "warning",
        });
      }
      this.loading = false;
      this.consumptionShow = false;
    },

    //抽奖数量
    search1Click(value) {
      if (value === 0) {
        if (this.search1 > 1) {
          this.search1--;
        } else {
          this.$message({
            message: this.$i18n.t("lang.Minimumnumberofchests"),
            type: "warning",
          });
        }
      } else {
        if (this.search1 < 5) {
          this.search1++;
        } else {
          this.$message({
            message: this.$i18n.t("lang.Maximumnumberofchests"),
            type: "warning",
          });
        }
      }
    },

    setCurrentPageDataV2() {
      // 计算一共有几页
      this.totalPage = this.boxDataList.length;
      // 计算得0时设置为1
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;

      this.dataList1 = [];
      this.dataList1 = this.boxDataList[this.page - 1];
      console.log(this.totalPage, this.page, this.boxDataList[1], 99);
    },

    // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
    setCurrentPageData() {
      // 计算一共有几页
      this.totalPage = Math.ceil(this.dataList2.length / this.pageSize);
      // 计算得0时设置为1
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;

      let begin = (this.page - 1) * this.pageSize;
      let end = this.page * this.pageSize;

      this.dataList1 = [];
      var arr = this.dataList2.slice(begin, end);

      this.dataList1 = arr.sort((a, b) => {
        return a.equip_type < b.equip_type
          ? -1
          : a.equip_type > b.equip_type
          ? 1
          : 0;
      });
    },

    sortByMulti(rows) {
      let boxList = {};
      rows.forEach(function (item, index, self) {
        var curr = boxList[item.box_id];
        if (curr) {
          curr.push(item);
        } else {
          boxList[item.box_id] = [item];
        }
      });

      for (var key in boxList) {
        var box = [];
        boxList[key].forEach(function (item, index, self) {
          if (item.equip_type == 1) {
            //机体
            box[0] = item;
          }
          if (item.equip_type == 2) {
            //武器
            box[1] = item;
          }
          if (item.equip_type == 3) {
            //动力核心
            box[2] = item;
          }
          if (item.equip_type == 4) {
            //肩甲
            box[3] = item;
          }
          if (item.equip_type == 5) {
            //翅膀
            box[4] = item;
          }
        });
        boxList[key] = box;
      }

      this.boxDataList = Object.values(boxList);
    },

    //带参数 0=上一页 1=下一页
    PageClick(value) {
      //上一页
      if (value === 0) {
        //判断是否满足上一页
        if (this.page > 1) {
          this.page--;
          this.setCurrentPageDataV2();
          console.log(this.dataList1);
        } else {
          this.$message({
            message: this.$i18n.t("lang.Thefirstpage"),
            type: "warning",
          });
        }
      } else {
        //判断是否满足下一页
        if (this.page < this.totalPage) {
          this.page++;
          this.setCurrentPageDataV2();
          console.log(this.dataList1);
        } else {
          this.$message({
            message: this.$i18n.t("lang.Thelastpage"),
            type: "warning",
          });
        }
      }
    },
  },
  async mounted() {
    await this.init();
    await setInterval(async () => {
      await this.initTine();
    }, 3000);
  },
  created() {},
};
</script>

<style lang="less" scoped>
#netmarkets {
  // padding: 50px 0;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  background: #1a2437;
  .netmarkets-cneter {
    height: 100%;
    background: url("../../assets/img/image22.png") no-repeat;
    background-size: 100% 100%;
    .netmarkets-top {
      height: 900px;
      width: 80%;
      margin: 0 auto;
      margin-top: 100px;

      display: flex;
      .netmarkets-top-left {
        width: 25%;

        display: flex;
        flex-direction: column;
        .netmarkets-top-right-progress-bar {
          width: 100%;

          display: flex;
          justify-content: center;
          div {
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            /deep/.el-progress-bar__outer {
              height: 20px !important;
              background-color: #52575e;
            }
          }
          img {
            margin-right: 10px;
            width: 30px;
            height: 30px;
            // width: 20%;
          }
        }
        .netmarkets-top-left-text {
          padding: 10px 15px;
          margin: 10px 0;
          margin-bottom: 0;
          background: url("../../assets/img/netmarkets-back-coder.png")
            no-repeat;
          background-size: 100% 100%;

          display: flex;
          // justify-content: center;
          span {
            margin: auto 0;
            font-size: 18px;
            color: #ffffff;
            font-family: "JDZY";

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          img {
            margin-left: 10px;
            width: 20px;
            height: 20px;
          }
        }
        .netmarkets-top-left-title1 {
          margin-top: 10px;
          padding: 20px 0;
          // height: 40%;
          background: url("../../assets/img/netmarkets-back-coder-border.png")
            no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          span {
            margin: 0 30px;
            margin-top: 0;
            flex: 1;

            font-size: 18px;
            color: #ffffff;
            font-family: "JDZY";
          }
        }
        .netmarkets-top-left-title {
          margin-top: 10px;
          // height: 40%;
          background: url("../../assets/img/netmarkets-back.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          p {
            position: relative;
            top: -90px;
            margin: 100px auto;
            margin-bottom: 0;
            // height: 20%;

            font-size: 20px;
            color: transparent;
            font-family: "JDZY";
          }
          span {
            position: relative;
            top: -50px;
            margin: 10% 30px;
            margin-top: 0;
            flex: 1;

            font-size: 18px;
            color: #ffffff;
            font-family: "JDZY";
          }
        }

        .netmarkets-top-left-input {
          background: url("../../assets/img/netmarkets-back-border.png")
            no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          margin: 10px 0;
          .netmarkets-top-left-input-top {
            display: flex;
            // justify-content: space-between;
            padding: 15px 15px;
            span {
              font-size: 18px;
              color: #ffffff;
              font-family: "JDZY";
              a {
                font-size: 14px;
                color: #999999;
                font-family: "JDZY";
              }
            }
          }
          .netmarkets-top-left-input-center {
            display: flex;
            // justify-content: space-between;
            padding: 15px 15px;
            span {
              margin: auto 0;
              font-size: 18px;
              color: #ffffff;
              font-family: "JDZY";
            }
            img {
              margin: auto 10px;
              width: 20px;
            }
            .netmarkets-top-left-input-center-btn {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              span {
                margin-right: 10px;
                padding: 10px 30px;
                font-family: "JDZY";
                background: url("../../assets/img/netmarkets-backnbtn1.png")
                  no-repeat;
                background-size: 100% 100%;
                font-size: 14px;
                color: #ffffff;
              }
            }
            .netmarkets-top-left-input-center-btn1 {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              span {
                margin-right: 10px;
                padding: 10px 30px;
                font-family: "JDZY";
                background: url("../../assets/img/netmarkets-backnbtn2.png")
                  no-repeat;
                background-size: 100% 100%;
                font-size: 14px;
                color: #ffffff;
              }
            }
          }
          .netmarkets-top-left-input-bottom {
            display: flex;
            justify-content: space-between;
            padding: 15px 15px;
            span {
              font-size: 18px;
              color: #ffffff;
              font-family: "JDZY";
            }
          }
        }
        .netmarkets-top-left-input-btn {
          position: relative;
          .netmarkets-top-left-input1 {
            position: absolute;
            top: -185px;
            right: -320px;
            z-index: 999;

            background: url("../../assets/img/netmarkets-back-coder-border.png")
              no-repeat;
            background-size: 100% 100%;

            display: flex;
            flex-direction: column;
            margin: 20px 0;
            .netmarkets-top-left-input-top {
              display: flex;
              justify-content: space-between;
              padding: 15px 15px;
              p {
                display: flex;
                img {
                  margin: auto 10px;
                  width: 20px;
                }
                span {
                  font-size: 18px;
                  color: #ffffff;
                  font-family: "JDZY";
                }
              }
            }
            .netmarkets-top-left-input-center {
              display: flex;
              justify-content: center;
              text-align: center;
              /deep/.el-input {
                width: 100% !important;
                padding: 0 30px;

                height: 100%;
                margin: auto 0;
                display: flex;
              }
              /deep/.el-input__inner {
                display: flex;
                justify-content: center;

                height: 38px;
                border: none;
                font-size: 20px;
                font-family: "JDZY";
                background: url("../../assets/img/netmarkets-input.png")
                  no-repeat;
                background-size: 100% 100%;
              }
            }
            .netmarkets-top-left-input-bottom {
              display: flex;
              justify-content: space-between;
              padding: 15px 10px;
              .netmarkets-top-left-btn-coder {
                text-align: center;
                width: 40%;
                margin: 0 auto;
                padding: 10px 0;
                font-size: 16px;
                color: #ffffff;
                font-family: "JDZY";

                background: url("../../assets/img/netmarkets-backnbtn1.png")
                  no-repeat;
                background-size: 100% 100%;
              }
            }
          }
          .netmarkets-top-left-num {
            margin: 30px auto;
            display: flex;
            justify-content: center;
            img {
              margin: 0 10px;
              width: 50px;
              height: 50px;
            }
            /deep/.el-input {
              height: 100%;
              margin: auto 0;
              display: flex;
            }
            /deep/.el-input__inner {
              // flex: 1;
              width: 150px;
              height: 48px;
              border: none;
              font-size: 20px;
              font-family: "JDZY";
              background: transparent;
              background: url("../../assets/img/netmarkets-input.png") no-repeat;
              background-size: 100% 100%;

              margin: auto 0;
            }
          }
          .netmarkets-top-left-btn {
            position: absolute;
            top: 10%;
            left: 20%;

            text-align: center;
            width: 60%;
            margin: 0 auto;
            padding: 15px 0;
            font-size: 22px;
            color: #ffffff;
            font-family: "JDZY";

            background: url("../../assets/img/netmarkets-backnbtn1.png")
              no-repeat;
            background-size: 100% 100%;

            display: flex;
            justify-content: center;
            img {
              width: 25px;
              height: 25px;
            }
            p {
              margin: auto 0;
              margin-left: 10px;
            }
          }
        }
      }
      .netmarkets-top-center {
        height: 70%;
        flex: 1;

        display: flex;
        flex-direction: column;

        background: url("../../assets/img/home-back2.gif") no-repeat;
        background-size: 100% 98%;
        .netmarkets-top-center-top {
          font-size: 22px;
          color: #ffffff;
          font-family: "JDZY";
          text-align: center;
          padding: 10px 0;
          width: 30%;
          margin: 0 auto;
          background: url("../../assets/img/netmarkets-backbtn2.png") no-repeat;
          background-size: 100% 100%;
        }
        .netmarkets-top-center-center {
          position: relative;
          top: 80px;

          margin: 50px 0;
          margin-bottom: 180px;
          width: 100%;
          height: 100%;
          background: url("../../assets/img/netmarkets-backbtn3.png") no-repeat;
          background-size: 100% 100%;
          text-align: center;
          img {
            margin: 0 auto;
          }
        }
        .netmarkets-top-center-btn {
          display: flex;
          flex-direction: column;
          .netmarkets-top-left-num {
            margin: 30px auto;
            display: flex;
            justify-content: center;
            img {
              margin: 0 10px;
              width: 50px;
              height: 50px;
            }
            /deep/.el-input {
              height: 100%;
              margin: auto 0;
              display: flex;
            }
            /deep/.el-input__inner {
              // flex: 1;
              width: 150px;
              height: 48px;
              border: none;
              font-size: 20px;
              font-family: "JDZY";
              background: transparent;
              background: url("../../assets/img/netmarkets-input.png") no-repeat;
              background-size: 100% 100%;

              margin: auto 0;
            }
          }
          .netmarkets-top-left-btn1 {
            text-align: center;
            width: 30%;
            margin: 0 auto;
            padding: 20px 0;

            background: url("../../assets/img/netmarkets-backnbtn1.png")
              no-repeat;
            background-size: 100% 100%;

            display: flex;
            justify-content: center;
            span {
              font-size: 22px;
              color: #ffffff;
              font-family: "JDZY";
            }
            img {
              width: 25px;
              height: 25px;
              margin: 0 10px;
            }
            p {
              margin: auto 0;
              font-size: 18px;
              color: #ffffff;
              font-family: "JDZY";
            }
          }
          .netmarkets-top-left-btn2 {
            text-align: center;
            width: 30%;
            margin: 0 auto;
            padding: 20px 0;

            background: url("../../assets/img/netmarkets-backnbtn2.png")
              no-repeat;
            background-size: 100% 100%;

            display: flex;
            justify-content: center;
            span {
              font-size: 22px;
              color: #ffffff;
              font-family: "JDZY";
            }
            img {
              width: 25px;
              height: 25px;
              margin: 0 10px;
            }
            p {
              margin: auto 0;
              font-size: 18px;
              color: #ffffff;
              font-family: "JDZY";
            }
          }
        }
      }
      .netmarkets-top-right {
        width: 24.5%;

        display: flex;
        flex-direction: column;
        span {
          margin-top: 30px;
          font-size: 16px;
          color: #ffffff;
          font-family: "JDZY";
        }
      }
    }
    /deep/.el-loading-mask {
      position: absolute;
      z-index: 2000;
      background-color: rgba(0, 0, 0, 0.3);
      margin: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: opacity 0.3s;
    }
  }
  .netmarkets-bottom {
    position: static;
    top: -150px;

    height: 300px;
    background: url("../../assets/img/netmarkets-bottom.png") no-repeat;
    background-size: 100% 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    ul {
      display: flex;
      justify-content: center;
      width: 50%;
      margin: 0 auto;
      text-align: center;
      li {
        margin: 45px 0;
        width: 20%;

        font-size: 18px;
        color: #ffffff;
        font-family: "JDZY";
      }
    }
  }
  /deep/.el-loading-spinner .circular {
    width: 100px !important;
    height: 100px !important;
  }
  /deep/.el-dialog {
    background: transparent;
  }
  /deep/.el-dialog__header {
    display: none;
  }
  /deep/.el-dialog__body {
    padding-bottom: 10px;
  }
  .ul-coder-syq {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 30px 3%;
      img {
        width: 150px;
        height: 130px;
      }
    }
  }
  .h1 {
    width: 20%;
    margin: 0 auto;
    background: url("../../assets/img/nft-zhiy.png") no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
    text-align: center;

    display: flex;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;

      margin: 10px 0;
    }
    span {
      margin-left: 10px;
      margin: auto 10px;
      color: #ffffff;
      font-size: 18px;
      font-family: "JDZY";
    }
  }
  .ul-blind-box {
    display: flex;
    justify-content: space-between;
    li {
      height: 700px;
      width: 19%;

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
          left: 30%;
          top: 38%;

          width: 40%;
          height: 30%;
        }

        .back-codersyq-text {
          position: absolute;
          bottom: 30px;
          left: 43%;
          color: orange;
        }
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
              img {
                width: 12%;
                // font-weight: bold;
                // font-size: 18px;
                // color: #ffffff;
                // font-family: "JDZY";

                // padding-right: 10px;
                // border-right: 2px solid #00e4ff;
                // margin-right: 20px;
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
      .ul-li-div1 {
        background: url("../../assets/img/coder-syq-pfk.png") no-repeat;
        background-size: 100% 100%;
        color: orange;
        text-align: center;
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
        top: 10px;
        left: 0;

        height: 10%;
        font-size: 16px;
        // font-weight: bold;
        color: #ffffff;
        font-family: "JDZY";
        text-align: center;
      }
    }
  }
  .ul-blind-box li:nth-child(6) {
    margin: auto 0;
    height: 300px;
    width: 15%;

    background: url("../../assets/img/mine-box-small.png") no-repeat;
    background-size: 100% 100%;
  }
  .ceneter-right-bottom-bottom {
    margin: 50px 0;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    .ceneter-right-bottom-bottom-left {
      cursor: pointer;
      position: relative;
      animation: myfirsts 2s;

      text-align: center;
      width: 10%;
      padding: 10px 0;
      background: url("../../assets/img/btn-image2.png") no-repeat;
      background-size: 100% 100%;

      font-size: 20px;
      // font-weight: bold;
      color: #3a3a3b;
      font-family: "JDZY";

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .ceneter-right-bottom-bottom-center {
      margin: auto 80px;
      font-size: 20px;
      color: #ffffff;
      font-family: "JDZY";
    }
    .ceneter-right-bottom-bottom-right {
      cursor: pointer;
      position: relative;
      animation: myfirst 2s;

      text-align: center;
      width: 10%;
      padding: 10px 0;
      background: url("../../assets/img/btn-image2.png") no-repeat;
      background-size: 100% 100%;

      font-size: 20px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .el-dialog-tow {
    position: absolute;
    top: 100px;
    left: 40%;
    padding: 20px 65px;
    background: url("../../assets/img/netmarkets-back-coder-border.png")
      no-repeat;
    background-size: 100% 100%;
    text-align: center;
    span {
      font-size: 20px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";
    }
    .el-dialog-tow-div {
      margin: 20px 0;
      display: flex;
      justify-content: space-evenly;
      padding: 0 50px;
      img {
        margin: auto 0;
        width: 50px;
        height: 50px;
      }
      span {
        margin: auto 0;
        font-size: 18px;
        // font-weight: bold;
        color: #fefefe;
        font-family: "JDZY";
      }
    }
    p {
      font-size: 18px;
      // font-weight: bold;
      color: #fefefe;
      font-family: "JDZY";
    }
    .dialog-footer {
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
      margin-bottom: 30px;
      padding: 0 50px;
      .netmarkets-top-left-input-center-btn1 {
        // display: flex;
        // justify-content: flex-end;
        span {
          margin-right: 10px;
          padding: 10px 20px;
          font-family: "JDZY";
          background: url("../../assets/img/netmarkets-backnbtn1.png") no-repeat;
          background-size: 100% 100%;
          font-size: 14px;
          color: #ffffff;
        }
      }
      .netmarkets-top-left-input-center-btn2 {
        // display: flex;
        // justify-content: flex-end;
        span {
          margin-right: 10px;
          padding: 10px 20px;
          font-family: "JDZY";
          background: url("../../assets/img/netmarkets-backnbtn1.png") no-repeat;
          background-size: 100% 100%;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
  .el-loading-spinner .path {
    stroke: #00ffff !important;
  }
}
</style>
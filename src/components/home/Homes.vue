<template>
  <div id="homes">
    <div class="homes-center">
      <div class="homes-center-vide">
        <!-- <div class="homes-center-btn">
          <div class="homes-center-btn-back animated bounceInDown wow" @click="syqClick">
            <span>{{ $t("lang.Paly") }}</span>
          </div>
          <div class="homes-center-btn-back animated bounceInDown wow">
            <span>{{ $t("lang.Gamewiki") }}</span>
          </div>
        </div> -->
        <!-- <img src="../../assets/img/homes-back-yj.gif" alt=""> -->
        <div class="homes-center-vide-bottom">
          <div class="homes-center-vide-bottom-left animated bounceInLeft wow">
            <!-- 视频 -->
            <SyqVideo :playerOptions="playerOptions" />
          </div>
          <!-- <div
            class="homes-center-vide-bottom-right animated bounceInRight wow"
          >
            <p>{{ $t("lang.Loadupyour") }}</p>
            <p>
              {{ $t("lang.Hereyoucan") }}
            </p>
          </div> -->
        </div>
      </div>
      <!-- {{ $t("lang.Upgrade") }} -->
      <p class="title-p">{{ $t("lang.Upgrade") }}</p>
      <!-- <div class="homes-center-mech animated bounceInDown wow">
        <img
          src="../../assets/img/home-back3.png"
          alt=""
          class="image2"
          v-if="selectIndex === -1"
        />
        <img
          src="../../assets/img/home-back33.png"
          alt=""
          class="image2"
          v-if="selectIndex === 2"
        />
        <img
          src="../../assets/img/home-back333.png"
          alt=""
          class="image2"
          v-if="selectIndex === 1"
        />
        <img
          src="../../assets/img/home-back3333.png"
          alt=""
          class="image2"
          v-if="selectIndex === 4"
        />
        <img
          src="../../assets/img/home-back33333.png"
          alt=""
          class="image2"
          v-if="selectIndex === 3"
        />
        <img
          src="../../assets/img/home-back333333.png"
          alt=""
          class="image2"
          v-if="selectIndex === 5"
        />
        <ul>
          <li @mouseover="mechClick(1)"></li>
          <li @mouseover="mechClick(2)"></li>
          <li @mouseover="mechClick(3)"></li>
          <li @mouseover="mechClick(4)"></li>
          <li @mouseover="mechClick(5)"></li>
          <li @mouseover="mechClick(5)"></li>
          <div
            class="ul-li-one-div animated bounceInLeft ul-li-list1"
            v-if="selectIndex === 1 || selectIndex === -1"
          >
            <p>{{ $t("lang.Body") }}</p>
            <span>{{ $t("lang.Thecorecomponent") }}</span>
          </div>
          <div
            class="ul-li-tow-div animated bounceInRight ul-li-list2"
            v-if="selectIndex === 2 || selectIndex === -1"
          >
            <p>{{ $t("lang.Powercore") }}</p>
            <span>{{ $t("lang.Theheartofthemech") }}</span>
          </div>
          <div
            class="ul-li-three-div animated bounceInLeft ul-li-list3"
            v-if="selectIndex === 3 || selectIndex === -1"
          >
            <p>{{ $t("lang.Pauldron") }}</p>
            <span>{{ $t("lang.Providesadditional") }}</span>
          </div>
          <div
            class="ul-li-four-div animated bounceInRight ul-li-list4"
            v-if="selectIndex === 4 || selectIndex === -1"
          >
            <p>{{ $t("lang.Arms") }}</p>
            <span>{{ $t("lang.Eachmechcan") }}</span>
          </div>
          <div
            class="ul-li-five-div animated bounceInLeft ul-li-list5"
            v-if="selectIndex === 5 || selectIndex === -1"
          >
            <p>{{ $t("lang.Thruster") }}</p>
            <span>{{ $t("lang.Thecoredevice") }}</span>
          </div>
        </ul>
      </div> -->
      <div class="homes-center-card">
        <ul class="card-ul1">
          <li class="animated bounceInLeft wow">
            <img
              src="../../assets/img/hoem-card1-1.png"
              alt=""
              v-if="cardIndex === 0"
              @click="cardClick(-0)"
            />
            <img
              src="../../assets/img/hoem-card1.png"
              alt=""
              v-else
              @click="cardClick(0)"
            />
          </li>
          <li class="animated bounceInLeft wow">
            <img
              src="../../assets/img/hoem-card2-1.png"
              alt=""
              v-if="cardIndex === 1"
              @click="cardClick(-1)"
            />
            <img
              src="../../assets/img/hoem-card2.png"
              alt=""
              v-else
              @click="cardClick(1)"
            />
          </li>
          <li class="animated bounceInLeft wow">
            <img
              src="../../assets/img/hoem-card3-1.png"
              alt=""
              v-if="cardIndex === 2"
              @click="cardClick(-2)"
            />
            <img
              src="../../assets/img/hoem-card3.png"
              alt=""
              v-else
              @click="cardClick(2)"
            />
          </li>
          <li class="animated bounceInLeft wow">
            <img
              src="../../assets/img/hoem-card4-1.png"
              alt=""
              v-if="cardIndex === 3"
              @click="cardClick(-3)"
            />
            <img
              src="../../assets/img/hoem-card4.png"
              alt=""
              v-else
              @click="cardClick(3)"
            />
          </li>
        </ul>
        <ul class="card-ul2 animated bounceInDown wow">
          <li v-if="cardIndex === 0">
            <img src="../../assets/img/hoem-card11.png" alt="" />
          </li>
          <li v-if="cardIndex === 1">
            <img src="../../assets/img/hoem-card22.png" alt="" />
          </li>
          <li v-if="cardIndex === 2">
            <img src="../../assets/img/hoem-card33.png" alt="" />
          </li>
          <li v-if="cardIndex === 3">
            <img src="../../assets/img/hoem-card44.png" alt="" />
          </li>
        </ul>
        <div class="card-back-image animated bounceInDown wow">
          <img
            src="../../assets/img/hoem-back-card1.gif"
            alt=""
            v-if="cardIndex === 0"
          />
          <img
            src="../../assets/img/hoem-back-card2.gif"
            alt=""
            v-if="cardIndex === 1"
          />
          <img
            src="../../assets/img/hoem-back-card3.gif"
            alt=""
            v-if="cardIndex === 2"
          />
          <img
            src="../../assets/img/hoem-back-card4.gif"
            alt=""
            v-if="cardIndex === 3"
          />
        </div>
        <div class="card-back-title" v-if="cardIndex === 0">
          <div class="card-back-title-text">
            <img src="../../assets/img/hoem-back-card-iocn3.png" alt="" />
            <span>{{ $t("lang.mech1") }}</span>
          </div>
          <div class="ceneter-left-bottom-progressbar">
            <ul>
              <li>
                <img src="../../assets/img/icon-gongji.png" alt="" />
                <span>{{ $t("lang.Firepower") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="90"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-shengming.png" alt="" />
                <span>{{ $t("lang.life") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="70"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-hujia.png" alt="" />
                <span>{{ $t("lang.armor") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="80"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-mingzhong.png" alt="" />
                <span>{{ $t("lang.maneuver") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="60"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-huifu.png" alt="" />
                <span>{{ $t("lang.Reply") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="20"
                    status="success"
                  ></el-progress>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-back-title" v-if="cardIndex === 1">
          <div class="card-back-title-text">
            <img src="../../assets/img/hoem-back-card-iocn2.png" alt="" />
            <span>{{ $t("lang.mech2") }}</span>
          </div>
          <div class="ceneter-left-bottom-progressbar">
            <ul>
              <li>
                <img src="../../assets/img/icon-gongji.png" alt="" />
                <span>{{ $t("lang.Firepower") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="30"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-shengming.png" alt="" />
                <span>{{ $t("lang.life") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="90"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-hujia.png" alt="" />
                <span>{{ $t("lang.armor") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="70"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-mingzhong.png" alt="" />
                <span>{{ $t("lang.maneuver") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="30"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-huifu.png" alt="" />
                <span>{{ $t("lang.Reply") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="35"
                    status="success"
                  ></el-progress>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-back-title" v-if="cardIndex === 2">
          <div class="card-back-title-text">
            <img src="../../assets/img/hoem-back-card-iocn.png" alt="" />
            <span>{{ $t("lang.mech3") }}</span>
          </div>
          <div class="ceneter-left-bottom-progressbar">
            <ul>
              <li>
                <img src="../../assets/img/icon-gongji.png" alt="" />
                <span>{{ $t("lang.Firepower") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="60"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-shengming.png" alt="" />
                <span>{{ $t("lang.life") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="60"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-hujia.png" alt="" />
                <span>{{ $t("lang.armor") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="60"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-mingzhong.png" alt="" />
                <span>{{ $t("lang.maneuver") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="70"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-huifu.png" alt="" />
                <span>{{ $t("lang.Reply") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="60"
                    status="success"
                  ></el-progress>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-back-title" v-if="cardIndex === 3">
          <div class="card-back-title-text">
            <img src="../../assets/img/hoem-back-card-iocn4.png" alt="" />
            <span>{{ $t("lang.mech4") }}</span>
          </div>
          <div class="ceneter-left-bottom-progressbar">
            <ul>
              <li>
                <img src="../../assets/img/icon-gongji.png" alt="" />
                <span>{{ $t("lang.Firepower") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="50"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-shengming.png" alt="" />
                <span>{{ $t("lang.life") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="70"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-hujia.png" alt="" />
                <span>{{ $t("lang.armor") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="45"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-mingzhong.png" alt="" />
                <span>{{ $t("lang.maneuver") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="60"
                    status="success"
                  ></el-progress>
                </div>
              </li>
              <li>
                <img src="../../assets/img/icon-huifu.png" alt="" />
                <span>{{ $t("lang.Reply") }}</span>
                <div>
                  <el-progress
                    color="#d4c190"
                    :show-text="false"
                    :percentage="90"
                    status="success"
                  ></el-progress>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="title-p1">{{ $t("lang.threecamps") }}</p>
      <div class="homes-center-three">
        <img
          src="../../assets/img/home-back-imagesyq1.png"
          alt=""
          class="three-image1"
          @click="campClcik(1)"
          v-if="campIndex != 1"
        />
        <img
          src="../../assets/img/home-back-imagesyq11.png"
          alt=""
          class="three-image11"
          v-else
        />
        <img
          src="../../assets/img/home-back-imagesyq2.png"
          alt=""
          class="three-image2"
          @click="campClcik(2)"
          v-if="campIndex != 2"
        />
        <img
          src="../../assets/img/home-back-imagesyq22.png"
          alt=""
          class="three-image22"
          v-else
        />
        <img
          src="../../assets/img/home-back-imagesyq3.png"
          alt=""
          class="three-image3"
          @click="campClcik(3)"
          v-if="campIndex != 3"
        />
        <img
          src="../../assets/img/home-back-imagesyq33.png"
          alt=""
          class="three-image33"
          v-else
        />

        <img
          src="../../assets/img/home-back-imagesyq-bottom2.png"
          alt=""
          class="back-bottom2"
          v-if="campIndex === 1"
        />
        <img
          src="../../assets/img/home-back-imagesyq-bottom3.png"
          alt=""
          class="back-bottom3"
          v-if="campIndex === 2"
        />
        <img
          src="../../assets/img/home-back-imagesyq-bottom1.png"
          alt=""
          class="back-bottom1"
          v-if="campIndex === 3"
        />

        <div v-if="campIndex === 1">
          <span>{{ $t("lang.EarthFederation") }}</span>
          <p>{{ $t("lang.EarthFederation1") }}</p>
          <p>{{ $t("lang.EarthFederation2") }}</p>
        </div>
        <div v-if="campIndex === 2">
          <span>{{ $t("lang.MechanicalEmpire") }}</span>
          <p>{{ $t("lang.MechanicalEmpire1") }}</p>
          <p>{{ $t("lang.MechanicalEmpire2") }}</p>
        </div>
        <div v-if="campIndex === 3">
          <span>{{ $t("lang.StarThiefAlliance") }}</span>
          <p>{{ $t("lang.StarThiefAlliance1") }}</p>
          <p>{{ $t("lang.StarThiefAlliance2") }}</p>
        </div>
      </div>
      <p class="title-p2">{{ $t("lang.Gamefeatures") }}</p>
      <!-- <div class="homes-center-grade"> -->
      <!-- <div class="homes-center-grade-list list1 animated bounceInLeft wow">
          <img src="../../assets/img/home-back16.png" alt="" class="image-s" />
          <div>
            <span>{{ $t("lang.Synthesis") }}</span>
            <img src="../../assets/img/home-back5.png" alt="" />
            <p>
              {{ $t("lang.Selecttwoparts") }}
            </p> -->
      <!-- <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p>
            <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p> -->
      <!-- </div>
        </div> -->
      <!-- <div class="homes-center-grade-list list2 animated bounceInRight wow">
          <div>
            <span>{{ $t("lang.Upgrade") }}</span>
            <img src="../../assets/img/home-back5.png" alt="" />
            <p>
              {{ $t("lang.Upgradethecomponent") }}
            </p> -->
      <!-- <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p>
            <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p> -->
      <!-- </div>
          <img src="../../assets/img/home-back54.png" alt="" class="image-s" />
        </div> -->
      <!-- <div class="homes-center-grade-list list3 animated bounceInRight wow">
          <img src="../../assets/img/home-back53.png" alt="" class="image-s" />
          <div>
            <span>{{ $t("lang.Trade") }}</span>
            <img src="../../assets/img/home-back5.png" alt="" />
            <p>
              {{ $t("lang.Openthefreetrade") }}
            </p> -->
      <!-- <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p>
            <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p> -->
      <!-- </div>
        </div> -->
      <!-- <div class="homes-center-grade-list list4 animated bounceInLeft wow">
          <div>
            <span>{{ $t("lang.PVE") }}</span>
            <img src="../../assets/img/home-back5.png" alt="" />
            <p>
              {{ $t("lang.Themajorbattlefield") }}
            </p> -->
      <!-- <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p>
            <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p> -->
      <!-- </div>
          <img src="../../assets/img/home-back12.png" alt="" class="image-s" />
        </div> -->
      <!-- <div class="homes-center-grade-list list5 animated bounceInRight wow">
          <img src="../../assets/img/home-back13.png" alt="" class="image-s" />
          <div>
            <span>{{ $t("lang.Minings") }}</span>
            <img src="../../assets/img/home-back5.png" alt="" />
            <p>
              {{ $t("lang.Pledgethesynthetic") }}
            </p> -->
      <!-- <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p>
            <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p> -->
      <!-- </div>
        </div> -->
      <!-- <div class="homes-center-grade-list list6 animated bounceInLeft wow">
          <div>
            <span>{{ $t("lang.Assemble") }}</span>
            <img src="../../assets/img/home-back5.png" alt="" />
            <p>
              {{ $t("lang.Thepartsofthemecha") }}
            </p> -->
      <!-- <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p>
            <p>
              選擇兩個同品質部件合成一個更高品質部件選擇兩個同品質部件合成一個更高品質部件
            </p> -->
      <!-- </div>
          <img src="../../assets/img/home-back14.png" alt="" class="image-s" />
        </div>
      </div> -->
      <div class="homes-center-grade1">
        <el-carousel
          :interval="4000"
          autoplay="true"
          type="card"
          height="600px"
          indicator-position="none"
          style="width: 100%; padding: 0 50px"
        >
          <!-- 
            width: 80%;
            margin: 0 auto;
            overflow-x: unset;
         -->
          <el-carousel-item v-for="item in ulImg2" :key="item">
            <img :src="item.img" alt="" />
            <!-- <p>特殊能力：商业交易。开放能力才能进入行星战争中可以额外获得BUSD</p> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <p class="title-p3">{{ $t("lang.Routemap") }}</p>
      <div class="homes-center-xx">
        <div class="homes-center-route">
          <div class="homes-center-route-top">
            <ul>
              <li class="animated bounceInLeft wow lione">
                <span>{{ $t("lang.Routemap1") }}</span>
                <p>
                  {{ $t("lang.Routemap11") }}<br />{{ $t("lang.Routemap111")
                  }}<br />{{ $t("lang.Routemap1111") }}
                </p>
              </li>
              <li class="animated bounceInDown wow litow">
                <span>{{ $t("lang.Routemap2") }}</span>
                <p>
                  {{ $t("lang.Routemap22") }}<br />{{ $t("lang.Routemap222")
                  }}<br />{{ $t("lang.Routemap2222") }}
                </p>
              </li>
              <li class="animated bounceInRight wow lithree">
                <span>{{ $t("lang.Routemap3") }}</span>
                <p>
                  {{ $t("lang.Routemap33") }}<br />{{ $t("lang.Routemap333")
                  }}<br />{{ $t("lang.Routemap3333") }}<br />{{
                    $t("lang.Routemap33333")
                  }}<br />{{ $t("lang.Routemap333333") }}<br />{{
                    $t("lang.Routemap3333333")
                  }}<br />{{ $t("lang.Routemap33333333") }}
                </p>
              </li>
              <li class="animated bounceInLeft wow lifour">
                <span>{{ $t("lang.Routemap4") }}</span>
                <p>
                  {{ $t("lang.Routemap44") }}<br />{{ $t("lang.Routemap444")
                  }}<br />{{ $t("lang.Routemap4444") }}
                </p>
              </li>
              <li class="animated bounceInDown wow lifive">
                <span>{{ $t("lang.Routemap5") }}</span>
                <p>
                  {{ $t("lang.Routemap55") }}<br />{{ $t("lang.Routemap555")
                  }}<br />{{ $t("lang.Routemap5555") }}
                </p>
              </li>
              <li class="animated bounceInRight wow lisex">
                <span>{{ $t("lang.Routemap6") }}</span>
                <p>
                  {{ $t("lang.Routemap66") }}<br />{{ $t("lang.Routemap666") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="title-p4">{{ $t("lang.Tokendistribution") }}</p>
      <div
        class="homes-center-echarts animated rotateIn wow"
        v-if="lang === 'en-US'"
      >
        <img src="../../assets/img/home-back7.png" alt="" class="image1" />
        <img src="../../assets/img/home-back77.gif" alt="" class="image2" />
      </div>
      <div class="homes-center-echarts animated rotateIn wow" v-else>
        <img src="../../assets/img/home-back-7.png" alt="" class="image1" />
        <img src="../../assets/img/home-back77.gif" alt="" class="image2" />
      </div>
      <div class="homes-center-audit">
        <p class="title-p5">{{ $t("lang.Audit") }}</p>
        <div class="homes-center-shengji" @click="Linkhttp"></div>
        <p class="title-p6">{{ $t("lang.The") }}</p>
        <ul>
          <li v-for="(item, index) in ulImg3" :key="index" @click="auditClick(index)">
            <img :src="item.img1" alt="" class="img1" />
            <span class="span1">{{ item.name }}</span>
            <span class="span2">{{ item.title }}</span>
            <img :src="item.img2" alt="" class="img2" />
          </li>
        </ul>
      </div>
      <p class="title-p5">{{ $t("lang.Partner") }}</p>
      <div class="homes-center-Partner">
        <img src="../../assets/img/home-back17.png" alt="" />
      </div>
    </div>
    <!-- 顶部版权 -->
    <CopyRight />
  </div>
</template>

<script>
import WOW from "wow.js";

import SyqVideo from "../common/Video.vue";
import CopyRight from "../common/CopyRight.vue";

export default {
  name: "Homes",
  components: {
    SyqVideo,
    CopyRight,
  },
  data() {
    return {
      // 视频播放
      playerOptions: {
        controls: true, // 是否显示底部控制栏
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: "muted", //打开并处于播放状态。true需要点击播放 muted
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "https://www.youtube.com/embed/SelFdEyIcpA", //url地址
          },
        ],
        // oster: '', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false, // 当前时间和持续时间的分隔符
          durationDisplay: false, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          currentTimeDisplay: false, // 当前时间
          volumeControl: true, // 声音控制键
          progressControl: false, // 进度条
          playToggle: false, // 暂停-播放 按钮
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },

      selectIndex: -1,

      //当前语言
      lang: "",

      ulImg1: [
        {
          img: require("../../assets/img/hoem-card1.png"),
        },
        {
          img: require("../../assets/img/hoem-card2.png"),
        },
        {
          img: require("../../assets/img/hoem-card3.png"),
        },
        {
          img: require("../../assets/img/hoem-card4.png"),
        },
      ],
      ulImg2: [
        {
          img: require("../../assets/img/hoem-card-carousel11.png"),
        },
        {
          img: require("../../assets/img/hoem-card-carousel22.png"),
        },
        {
          img: require("../../assets/img/hoem-card-carousel33.png"),
        },
        {
          img: require("../../assets/img/hoem-card-carousel44.png"),
        },
        {
          img: require("../../assets/img/hoem-card-carousel55.png"),
        },
      ],
      ulImg3: [
        {
          img1: require("../../assets/img/home-ul-li1.png"),
          name: "Jeffrey Kang",
          title: "CEO",
          img2: require("../../assets/img/in.png"),
        },
        {
          img1: require("../../assets/img/home-ul-li2.png"),
          name: "Tylan Vinson cooper",
          title: "CO-FOUNDER",
          img2: require("../../assets/img/in.png"),
        },
        {
          img1: require("../../assets/img/home-ul-li3.png"),
          name: "Chris Jenner",
          title: "CTO",
          img2: require("../../assets/img/in.png"),
        },
        {
          img1: require("../../assets/img/home-ul-li4.png"),
          name: "Juliette Letourneau",
          title: "CMO",
          img2: require("../../assets/img/in.png"),
        },
        {
          img1: require("../../assets/img/home-ul-li5.png"),
          name: "Antoine Belanger",
          title: "Game Developer",
          img2: require("../../assets/img/in.png"),
        },
        {
          img1: require("../../assets/img/home-ul-li6.png"),
          name: "Philippe Paradis",
          title: "Advisor",
          img2: require("../../assets/img/in.png"),
        },
      ],

      cardIndex: 0,

      campIndex: 3,
    };
  },
  methods: {
    auditClick(index) {
      if(index === 0) {
        window.open("https://www.linkedin.cn/incareer/in/jeffrey-kang-137599245/", "_blank");
      }else if(index === 1) {
        window.open(" https://www.linkedin.com/in/tylanv/", "_blank");
      }
    },
    Linkhttp() {
      window.open("https://www.certik.com/projects/mekawarrior", "_blank");
    },
    cardClick(index) {
      this.cardIndex = index;
    },
    campClcik(value) {
      this.campIndex = value;
    },

    //机甲
    mechClick(value) {
      this.selectIndex = value;
    },
    //钱包跳转
    syqClick() {
      this.$router.push("/Null7");
    },
  },
  created() {
    this.lang = window.sessionStorage.getItem("lang");
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window,
      resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
  },
};
</script>

<style lang="less" scoped>
#homes {
  // height: 9800px;
  // padding-top: 56px;

  .homes-center {
    // width: 100%;
    height: 100%;

    background: url("../../assets/img/home-back.png") no-repeat;
    background-size: 100% 100%;
    .homes-center-vide {
      position: relative;
      height: 1400px;

      background: url("../../assets/img/home-back1.gif") no-repeat;
      background-size: 100% 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 7%;
        height: 50px;
        position: absolute;
        left: 44.5%;
        top: 145px;
      }
      .homes-center-btn {
        position: absolute;
        top: 30%;
        left: 10%;

        width: 80%;
        // height: 200px;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        .homes-center-btn-back {
          margin: 0 70px;
          line-height: 90px;
          height: 90px;
          width: 18%;

          background: url("../../assets/img/home-btn.png") no-repeat;
          background-size: 100% 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            margin: auto auto;
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
            font-family: "JDZY";
          }
        }
      }
      .homes-center-vide-bottom {
        width: 60%;
        margin: 0 auto;
        margin-top: 200px;
        // padding-bottom: 290px;

        display: flex;
        justify-content: center;
        .homes-center-vide-bottom-left {
          text-align: center;
          border: 2px solid #ffffff;
          border-radius: 5px;
          width: 870px;
          height: 98.5%;
        }
        .homes-center-vide-bottom-right {
          margin: auto 0;
          width: 50%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            margin-bottom: 30px;
            font-size: 24px;
            color: #ffffff;
            font-family: "JDZY";
          }
        }
        .homes-center-vide-bottom-right p:nth-child(2) {
          margin: 0 0;
        }
      }
    }
    .homes-center-mech {
      position: relative;
      top: -300px;

      text-align: center;
      height: 900px;

      background: url("../../assets/img/home-back33.gif") no-repeat;
      background-size: 40% 110%;
      background-position-x: 50%;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .image2 {
        padding-right: 50px;
        padding-bottom: 100px;
        margin: auto auto;
        height: 80%;
      }
      ul {
        // position: relative;
        // top: 0;
        // left: 29%;
        // padding-right: 50px;
        // padding-bottom: 110px;
        margin: auto auto;
        text-align: center;
        width: 50%;
        height: 70%;
        li:nth-child(1) {
          // border-radius: 50%;
          position: absolute;
          top: 100px;
          right: 45%;

          width: 150px;
          height: 50%;
          // background: red;
          opacity: 0.2;
        }
        .ul-li-one-div {
          position: absolute;
          top: -100px;
          left: 35%;

          width: 300px;
          height: 25%;

          background: url("../../assets/img/home-back9.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          // padding: 0 50px;
          p {
            position: absolute;
            top: -40px;
            color: #ffffff;
            font-size: 24px;
            font-family: "JDZY";
          }
          span {
            position: absolute;
            top: 15%;
            text-align: left;
            margin: 0 20px;
            margin-right: 50px;
            color: #ffffff;
            font-size: 16px;
            font-family: "JDZY";
          }
        }
        li:nth-child(2) {
          // border-radius: 50%;
          position: absolute;
          top: 150px;
          right: 46%;

          width: 80px;
          height: 80px;
          // background: #ffffff;
          opacity: 0.2;
        }
        .ul-li-tow-div {
          position: absolute;
          top: 0px;
          right: 25%;

          width: 400px;
          height: 25%;

          background: url("../../assets/img/home-back8.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          // padding: 0 50px;
          p {
            position: absolute;
            top: -40px;
            right: 0;

            color: #ffffff;
            font-size: 24px;
            font-family: "JDZY";
          }
          span {
            position: absolute;
            top: 15%;
            text-align: left;
            margin: 0 20px;
            margin-left: 170px;
            color: #ffffff;
            font-size: 16px;
            font-family: "JDZY";
          }
        }
        li:nth-child(3) {
          // border-radius: 50%;
          position: absolute;
          top: 100px;
          right: 52%;

          width: 120px;
          height: 130px;
          // background: #ffffff;
          opacity: 0.2;
        }
        .ul-li-three-div {
          position: absolute;
          top: 50px;
          left: 28%;

          width: 300px;
          height: 210px;

          background: url("../../assets/img/home-backx.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          // padding: 0 50px;
          p {
            position: absolute;
            top: -40px;
            color: #ffffff;
            font-size: 24px;
            font-family: "JDZY";
          }
          span {
            position: absolute;
            top: 15px;
            text-align: left;
            margin: 0 20px;
            margin-right: 50px;
            color: #ffffff;
            font-size: 16px;
            font-family: "JDZY";
          }
        }
        li:nth-child(4) {
          // border-radius: 50%;
          position: absolute;
          top: 250px;
          right: 34%;

          width: 200px;
          height: 350px;
          // background: #ffffff;
          opacity: 0.2;
        }
        .ul-li-four-div {
          position: absolute;
          top: 200px;
          right: 22%;

          width: 300px;
          height: 32%;

          background: url("../../assets/img//home-back8.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          // padding: 0 50px;
          p {
            position: absolute;
            top: -40px;
            right: 0;

            color: #ffffff;
            font-size: 24px;
            font-family: "JDZY";
          }
          span {
            position: absolute;
            top: 15%;
            text-align: left;
            margin: auto 20px;
            margin-left: 110px;
            color: #ffffff;
            font-size: 16px;
            font-family: "JDZY";
          }
        }
        li:nth-child(5) {
          // border-radius: 50%;
          position: absolute;
          top: 260px;
          left: 32%;

          width: 260px;
          height: 150px;
          // background: #ffffff;
          opacity: 0.2;
        }
        li:nth-child(6) {
          // border-radius: 50%;
          position: absolute;
          top: 20px;
          left: 30%;

          width: 260px;
          height: 150px;
          // background: #ffffff;
          opacity: 0.2;
        }
        .ul-li-five-div {
          position: absolute;
          top: 150px;
          left: 22%;

          width: 300px;
          height: 25%;

          background: url("../../assets/img/home-back9.png") no-repeat;
          background-size: 100% 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          // padding: 0 50px;
          p {
            position: absolute;
            top: -40px;
            color: #ffffff;
            font-size: 24px;
            font-family: "JDZY";
          }
          span {
            position: absolute;
            top: 15%;
            text-align: left;
            margin: 0 20px;
            margin-right: 50px;
            color: #ffffff;
            font-size: 16px;
            font-family: "JDZY";
          }
        }
      }
    }
    .homes-center-grade {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 190px;

      .homes-center-grade-list {
        display: flex;
        justify-content: space-between;
        // margin-bottom: 100px;
        img {
          width: 35%;
        }
        div {
          width: 50%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            text-align: center;
            margin-right: 30%;
            font-size: 24px;
            color: #ffffff;
            font-family: "JDZY";
          }
          img {
            width: 40%;
            height: 20px;
          }
          p {
            margin-top: 15px;
            font-size: 16px;
            color: #ffffff;
            font-family: "JDZY";
          }
        }
      }
      .list1 .image-s {
        position: relative;
        left: -120px;

        width: 45%;
      }
      .list2 .image-s {
        position: relative;
        right: -120px;

        width: 45%;
      }
      .list4 .image-s {
        position: relative;
        right: -180px;

        width: 55%;
      }
      .list5 .image-s {
        position: relative;
        left: -100px;

        width: 45%;
      }
    }
    .homes-center-card {
      // height: 300px;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 300px;

      display: flex;
      .card-ul1 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      .card-ul2 {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        li {
          width: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .active {
        border: 1px dashed #52575e;
        border-radius: 5px;
      }
      .card-back-image {
        width: 500px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .card-back-title {
        margin: 0 auto;
        // margin-left: 100px;
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .card-back-title-text {
          padding-bottom: 70px;
          display: flex;
          img {
            width: 50px;
            height: 50px;
          }
          span {
            margin-left: 10px;
            color: #ffffff;
            font-size: 42px;
            font-family: "JDZY";
          }
        }
        .ceneter-left-bottom-progressbar {
          width: 100%;
          margin: 0 auto;
          ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            li {
              margin: 10px 0;
              display: flex;
              justify-content: flex-start;
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
                margin: auto 20px;
                color: #ffffff;
                font-size: 18px;
                font-family: "JDZY";
              }
              div {
                flex: 1;
                margin: auto 0;
                width: 300px;
                float: right;
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
    }
    .homes-center-three {
      height: 500px;
      width: 800px;
      margin: 100px auto;
      margin-bottom: 300px;
      background: url("../../assets/img/home-back-imagesyq.png") no-repeat;
      background-size: 100% 100%;
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      .three-image1 {
        position: absolute;
        top: -70px;
        left: 38%;

        width: 200px;
        height: 200px;
        cursor: pointer;
      }
      .three-image2 {
        position: absolute;
        bottom: -70px;
        left: -70px;

        width: 200px;
        height: 200px;
        cursor: pointer;
      }
      .three-image3 {
        position: absolute;
        bottom: -70px;
        right: -70px;

        width: 200px;
        height: 200px;
        cursor: pointer;
      }
      .three-image11 {
        position: absolute;
        top: -70px;
        left: 36%;

        width: 280px;
        height: 220px;
        cursor: pointer;
      }
      .three-image22 {
        position: absolute;
        bottom: -70px;
        left: -70px;

        width: 280px;
        height: 220px;
        cursor: pointer;
      }
      .three-image33 {
        position: absolute;
        bottom: -70px;
        right: -120px;

        width: 280px;
        height: 220px;
        cursor: pointer;
      }
      .back-bottom1 {
        position: absolute;
        bottom: -50px;
        right: 30%;

        width: 250px;
        height: 150px;
      }
      .back-bottom2 {
        position: absolute;
        bottom: -50px;
        right: 38%;

        width: 180px;
        height: 120px;
      }
      .back-bottom3 {
        position: absolute;
        bottom: -70px;
        right: 30%;

        width: 280px;
        height: 200px;
      }
      span {
        text-align: center;
        margin: 30px auto;
        // padding-top: 250px;
        display: flex;
        justify-content: center;
        color: #ffffff;
        font-size: 24px;
        font-family: "JDZY";
      }
      p {
        // text-align: center;
        margin: 20px 20%;
        color: #ffffff;
        font-size: 18px;
        font-family: "JDZY";
      }
    }
    .homes-center-grade1 {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 300px;
      /deep/.el-carousel__arrow--left {
        left: -426px;
      }
      /deep/.el-carousel__arrow--right {
        right: -25px;
      }
      /deep/.el-carousel__item {
        cursor: pointer;
        z-index: 1;
      }
      /deep/.el-carousel__item--card.is-in-stage {
        z-index: 2;
      }
      /deep/.el-carousel__item--card.is-active {
        z-index: 3;
      }
      /deep/.specialIndex {
        z-index: 0;
      }
      /deep/.el-carousel__item--card {
        width: 40% !important;
      }
      /deep/.el-carousel__arrow i {
        width: 50% !important;
      }
      /deep/.el-carousel__arrow {
        display: none !important;
      }
      /deep/.is-active {
        // margin: 0 100px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: fixed;
        bottom: 0px;

        margin: 70px 80px;
        margin-right: 50px;
        color: #ffffff;
        font-size: 18px;
        font-family: "JDZY";
      }
      /deep/.el-carousel__mask {
        background: none;
        margin: 0 100px;
      }
      // /deep/.el-carousel__item:nth-child(2n) {
      //   // background-color: #99a9bf;
      //   margin: 0 100px;
      // }
      // /deep/.el-carousel__item:nth-child(3n) {
      //   // background-color: #99a9bf;
      //   margin: 0 100px;
      // }
      // /deep/.el-carousel__item:nth-child(4n) {
      //   // background-color: #99a9bf;
      //   margin: 0 100px;
      // }

      /deep/.el-carousel__item {
        // background-color: #d3dce6;
        // margin: 0 100px;
      }
    }
    .title-p {
      position: relative;
      top: 0px;

      margin: 100px auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding-bottom: 100px;
      // margin-bottom: 100px;
      text-align: center;
    }
    .title-p1 {
      position: relative;
      top: 0px;

      margin: 0 auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding-bottom: 100px;
      // margin-bottom: 100px;
      text-align: center;
    }
    .title-p2 {
      position: relative;
      top: -200px;

      margin: 0 auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding-top: 100px;
      // margin-bottom: 100px;
      text-align: center;
    }
    .title-p3 {
      margin: 0 auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding-bottom: 200px;
      // margin-bottom: 100px;
      text-align: center;
    }
    .title-p4 {
      margin: 0 auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding: 200px 0;
      padding-top: 200px;
      text-align: center;
    }
    .title-p5 {
      margin: 0 auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding: 200px 0;
      // padding-top: 200px;
      text-align: center;
    }
    .homes-center-xx {
      width: 80%;
      margin: 0 auto;

      background: url("../../assets/img/home-xx.png") no-repeat;
      background-size: 100% 100%;
      .homes-center-route {
        height: 500px;
        width: 100%;

        background: url("../../assets/img/home-back6.png") no-repeat;
        background-size: 100% 100%;

        display: flex;
        flex-direction: column;

        .homes-center-route-top {
          height: 80%;
          display: flex;
          ul {
            position: relative;
            width: 100%;

            display: flex;
            // justify-content: space-between;
            li {
              width: 30%;
              text-align: left;
              // padding-top: 30px;

              display: flex;
              flex-direction: column;
              p {
                font-size: 16px;
                color: #ffffff;
                font-family: "JDZY";
              }
              span {
                margin-bottom: 20px;
                font-size: 24px;
                color: #ffffff;
                font-family: "JDZY";
              }
            }
            .lione {
              text-align: left;
              position: absolute;
              top: 500px;
              left: 2%;
            }
            .litow {
              text-align: left;
              position: absolute;
              top: 350px;
              left: 18%;

              width: 20%;
              margin-left: 1%;
              text-align: left;
            }
            .lithree {
              text-align: left;
              position: absolute;
              top: 380px;
              left: 35%;

              padding: 0 2%;
              margin-left: 2%;
              width: 20%;
              text-align: left;
            }
            .lifour {
              text-align: left;
              position: absolute;
              top: 250px;
              left: 52%;

              padding: 0 2%;
              margin-left: 2%;
              width: 20%;
              text-align: left;
            }
            .lifive {
              text-align: left;
              position: absolute;
              top: 130px;
              left: 65%;

              padding: 0 2%;
              margin-left: 2%;
              width: 20%;
              text-align: left;
            }
            .lisex {
              text-align: left;
              position: absolute;
              top: 200px;
              left: 85%;

              padding: 0 2%;
              margin-left: 2%;
              width: 20%;
              text-align: left;
            }
          }
        }
      }
    }
    .homes-center-echarts {
      height: 500px;
      display: flex;
      justify-content: center;
      padding-bottom: 200px;

      position: relative;
      .image1 {
        // height: 100%;
        padding-bottom: 100px;
        border-bottom: 1px solid #ffffff;
        width: 55%;
        margin: 0 auto;
        text-align: center;
        position: absolute;
        z-index: 999;
      }
      .image2 {
        position: absolute;
        right: 43%;
        // top: 28%;
        padding-top: 11%;
        z-index: 888;
        width: 20%;
        margin: auto auto;
      }
    }
    .homes-center-audit {
      padding-bottom: 100px;
      margin-top: 200px;
      width: 100%;
      // height: 1000px;
      background: url("../../assets/img/homes-back-image1-ss.png") no-repeat;
      background-size: 100% 100%;
      .homes-center-shengji {
        cursor: pointer;
        height: 70px;
        width: 20%;
        margin: 0 auto;
        background: url("../../assets/img/home-shengji.png") no-repeat;
        background-size: 100% 100%;
      }
      .title-p6 {
        margin: 0 auto;
      color: #ffffff;
      font-size: 42px;
      font-family: "JDZY";

      padding: 400px 0;
      padding-bottom: 50px;
      // padding-top: 200px;
      text-align: center;
      }
      ul {
        width: 40%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          margin-top: 30px;
          text-align: center;
          width: 30%;
          display: flex;
          flex-direction: column;
          .img1 {
            width: 200px;
            height: 280px;
            margin: 0 auto;
          }
          .span1 {
            margin-top: 20px;
            font-size: 16px;
            color: #ffffff;
            font-family: "JDZY";
          }
          .span2 {
            margin-top: 10px;
            font-size: 12px;
            color: #ffffff;
            font-family: "JDZY";
          }
          .img2 {
            margin: 0 auto;
            margin-top: 10px;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .homes-center-Partner {
      padding-bottom: 400px;
      display: flex;
      justify-content: center;
      img {
        width: 50%;
        margin: 0 auto;
      }
    }
  }
}
</style>
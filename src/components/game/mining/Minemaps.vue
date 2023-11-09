<template>
  <div id="minemaps">
    <div class="minemaps-center">
      <div v-if="dataList.length > 0">
        <div
          class="minemaps-center-list"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="minemaps-center-list-top">
            <div class="title-left">
              <!-- <p>
                <span>{{ $t("lang.Combatpower") }}:</span>
                <a href="javascript:void(0)">{{ need_sword }}</a>
              </p> -->
              <p>
                <span>{{ $t("lang.Mechacombatpower") }}:</span>
                <a href="javascript:void(0)">{{ item.total.sword }}</a>
              </p>
              <p>
                <span>{{ $t("lang.Currentearnings") }}:</span>
                <a href="javascript:void(0)">{{
                  Math.floor(
                    (item.use_type === 0
                      ? 0
                      : reardList1[index] / 1000000000000000000) * 100
                  ) / 100
                }}</a>
              </p>
              <p>
                <span>{{ $t("lang.Collectionoften") }}:</span>
                <a href="javascript:void(0)">
                  {{ item.use_type === 0 ? 0 : timeList1[index].sky }}
                  <p>&nbsp;{{ $t("lang.Sky") }}&nbsp;</p>
                  {{ item.use_type === 0 ? 0 : timeList1[index].time }}
                  <p>&nbsp;{{ $t("lang.Time") }}&nbsp;</p>
                  {{ item.use_type === 0 ? 0 : timeList1[index].minute }}
                  <p>&nbsp;{{ $t("lang.Minute") }}&nbsp;</p>
                </a>
              </p>
              <p>
                <span>{{ $t("lang.Energyconsumption") }}:</span>
                <a href="javascript:void(0)">{{ need_collect_energy }}</a>
              </p>
              <p>
                <span>{{ $t("lang.Yuan") }}:</span>
                <a href="javascript:void(0)">{{
                  Math.floor(item.use_type === 0 ? 0 : piece1[index] * 1) / 1
                }}</a>
              </p>
            </div>
          </div>
          <div class="minemaps-center-list-bottom">
            <!-- image-backtu.gif -->
            <img
              v-if="item.use_type === 2 && need_sword === 0"
              src="../../../assets/img/image-backtu.png"
              alt=""
              class="back-img1"
            />
            <!-- image-backtu1.gif -->
            <img
              v-if="item.use_type === 2 && need_sword === 7000"
              src="../../../assets/img/image-backtu1.png"
              alt=""
              class="back-img1"
            />
            <!-- image-backtu2.gif -->
            <img
              v-if="item.use_type === 2 && need_sword === 9000"
              src="../../../assets/img/image-backtu2.png"
              alt=""
              class="back-img1"
            />
            <img
              v-if="item.use_type != 2 && need_sword === 0"
              src="../../../assets/img/image-backtu.png"
              alt=""
              class="back-img1"
            />
            <img
              v-if="item.use_type != 2 && need_sword === 7000"
              src="../../../assets/img/image-backtu1.png"
              alt=""
              class="back-img1"
            />
            <img
              v-if="item.use_type != 2 && need_sword === 9000"
              src="../../../assets/img/image-backtu2.png"
              alt=""
              class="back-img1"
            />
            <img
              src="../../../assets/img/jijia-1.png"
              alt=""
              v-if="item.cover_resource === '1'"
              class="back-img2"
            />
            <img
              src="../../../assets/img/jijia-2.png"
              alt=""
              v-if="item.cover_resource === '2'"
              class="back-img2"
            />
            <img
              src="../../../assets/img/jijia-3.png"
              alt=""
              v-if="item.cover_resource === '3'"
              class="back-img2"
            />
            <img
              src="../../../assets/img/jijia-4.png"
              alt=""
              v-if="item.cover_resource === '4'"
              class="back-img2"
            />
            <img
              src="../../../assets/img/jijia-5.png"
              alt=""
              v-if="item.cover_resource === '5'"
              class="back-img2"
            />
            <el-button
              class="start"
              v-if="item.use_type === 0"
              @click="pledgeClick(item)"
              >{{ $t("lang.Start") }}</el-button
            >
            <el-button
              class="stop"
              v-if="item.use_type === 2"
              @click="stopClick(item)"
              >{{ $t("lang.Stop") }}</el-button
            >
            <el-button
              class="withdraw"
              v-if="item.use_type === 2"
              @click="withdrawClick(item)"
              >{{ $t("lang.Withdraw") }}</el-button
            >
          </div>
        </div>
      </div>
      <div v-else class="minemaps-center-text">Meka Not Available</div>
    </div>
  </div>
</template>

<script>
//封装调用合约
import {
  connectMetamask,
  setApprovalForAll,
  isAuts,
  nft_bactch_stake,
  pending_reard,
  stake_withdraw_slot,
  stake_harvest,
  getRemainTime,
  getMineId,
  stake_time,
  getHeight
} from "../../../abi/index";

//接口请求
import { postRoleinfo, postUserinfo, postDismantle } from "api/index";

export default {
  name: "Minemaps",
  data() {
    return {
      //我的机甲数据
      dataList: [],
      //查看挖矿奖励
      reardList: [],
      //质押时长
      timeList: [],
      //块
      piece: [],
      reardList1: [],
      timeList1: [],
      piece1: [],

      //矿场战力值
      need_sword: 0,

      //总能量值
      energy: "",

      //矿场所需能量值
      need_collect_energy: 0,
      userId: 0,
    };
  },
  methods: {
    //初始化
    async init() {
      await connectMetamask();
    },

    async initMech(id) {
      // alert(id)
      // debugger
      //查看挖矿奖励
      var reard = await pending_reard(id);
      console.log("奖励" + reard);

      this.reardList.push(reard);
      //   var len = this.dataList.length
      // alert(len)
      //   var arr = this.reardList.splice(-len)
      //   console.log(arr);

      //质押时长
      var time = await stake_time(id);
      var hieght = await getHeight();

      this.piece.push(hieght);

      console.log("时长" + time);

      let d = parseInt(time / 86400);
      d = d < 10 ? "0" + d : d;
      let h = parseInt((time % 86400) / 3600);
      h = h < 10 ? "0" + h : h;
      let m = parseInt(((time % 86400) % 3600) / 60);
      m = m < 10 ? "0" + m : m;
      // 作为返回值返回
      // var timeHM =
      //   d +
      //   this.$i18n.t("lang.Sky") +
      //   h +
      //   this.$i18n.t("lang.Time") +
      //   m +
      //   this.$i18n.t("lang.Minute");
      let obj = {
        sky: d,
        time: h,
        minute: m,
      };
      this.timeList.push(obj);
    },

    //我的机甲
    async postRoleinfo() {
      this.dataList = [];
      //查看挖矿奖励
      (this.reardList = []),
        //质押时长
        (this.timeList = []),
        //块
        (this.piece = []),
        (this.reardList1 = []),
        (this.timeList1 = []),
        (this.piece1 = []),
        await postRoleinfo(3).then((res) => {
          res.data.data.rows.forEach(async (item) => {
            if (item.total.sword > this.need_sword && item.use_type != 1) {
              if (item.use_type === 2) {
                var id = await getMineId(item.id);
                // alert(typeof id);
                // alert(typeof this.userId)
                if (this.userId+'' === id) {
                  this.dataList.push(item);
                }
              } else {
              this.dataList.push(item);
              }
            } 
          });
        });
    },

    //机甲总能量值
    async postUserinfo() {
      //获取能量值
      await postUserinfo().then((res) => {
        this.energy = res.data.data.collect_energy;
      });
    },

    //机甲部件质押
    async pledgeClick(item) {
      console.log(item.equips);

      var nft_id = [];
      var sword = [];
      var id = item.id; // 机甲id

      item.equips.forEach((item) => {
        nft_id.push(item.nft_id);
        sword.push(item.sword);
      });

      console.log(nft_id);
      console.log(sword);
      console.log(id);
      console.log(this.energy);

      //调用合约
      //质押授权

      var code = await isAuts();
      if (code === 1) {
        //质押挖矿
        const code1 = await nft_bactch_stake(
          nft_id,
          sword,
          id,
          Number(this.need_collect_energy) <= Number(this.energy)
            ? Number(this.need_collect_energy)
            : 0,
          this.userId
        );

        // console.log('质押状态：'+ code1);
        if(code1 === 1) {
          await postDismantle(id);
        }
      }

      //我都机甲
      await this.postRoleinfo();

      //收益
      await this.initMech(id);

      //机甲总能量值
      await this.postUserinfo();

      this.$message({
        message: this.$i18n.t("lang.Pledgesuccess"),
        type: "success",
      });
    },

    //结束停止
    async stopClick(item) {
      // alert(item.id);
      //调用合约
      const time = await stake_time(item.id);
      // alert(time);
      const second = 43200;
      // if (time >= second) {
        //赎回nft
        await stake_withdraw_slot(item.id);

        //我都机甲
        await this.postRoleinfo();

        this.dataList.forEach(async (item) => {
          //收益
          await this.initMech(item.id);
        });
      // }
      // this.$message({
      //   message: this.$i18n.t("lang.Miningtimehas"),
      //   type: "warning",
      // });
    },

    //结束挖矿提现
    async withdrawClick(item) {
      // alert(item.id);
      const time = await stake_time(item.id);
      const second = 43200;

      // if (time >= second) {
        //领取质押的奖励
        await stake_harvest(item.id);
        //我都机甲
        await this.postRoleinfo();

        this.dataList.forEach(async (item) => {
          //收益
          await this.initMech(item.id);
        });

        //领取质押的奖励
        await stake_harvest(item.id);
      // }
      // this.$message({
      //   message: this.$i18n.t("lang.Miningtimehas"),
      //   type: "warning",
      // });
    },

    metNum() {
      var codersyq = this.dataList.length;
      var list = this.reardList;
      var arr = list.splice(-codersyq);
      this.reardList1 = arr;

      var list1 = this.timeList;
      var arr1 = list1.splice(-codersyq);
      this.timeList1 = arr1;

      var list2 = this.piece;
      var arr2 = list2.splice(-codersyq);
      this.piece1 = arr2;
    },
  },
  async created() {
    await this.init();

    let code = this.$route.query.code;
    let param = JSON.parse(decodeURI(code));

    //获取战力值参数
    this.need_sword = Number(param.need_sword);
    this.need_collect_energy = param.need_collect_energy;
    this.userId = param.id;

    // alert('----')
    this.dataList = [];
    //我的机甲
    await this.postRoleinfo();

    await this.postUserinfo();

    //我的机甲
    setInterval(async () => {
      //查看挖矿奖励
      // (this.reardList = []),
      //   //质押时长
      //   (this.timeList = []),
      //   this.piece = []
      // this.dataList = [];
      // await this.postRoleinfo();
      this.dataList.forEach(async (item) => {
        //收益
        await this.initMech(item.id);
      });
      await this.metNum();
    }, 1000);

    await this.metNum();
  },
};
</script>

<style lang="less" scoped>
#minemaps {
  padding: 56px 0;
  padding-top: 200px;
  padding-bottom: 400px;

  background: url("../../../assets/img/image-back20.png") no-repeat;
  background-size: 100% 100%;
  .minemaps-center {
    width: 80%;
    margin: 0 auto;
    .minemaps-center-list {
      margin-bottom: 50px;
      width: 100%;

      display: flex;
      flex-direction: column;
      .minemaps-center-list-top {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .title-left {
          display: flex;
          p {
            display: flex;
            margin-right: 30px;
            span {
              margin: auto 0;
              color: #ffffff;
              font-size: 18px;
              font-family: "JDZY";
            }
            a {
              margin: auto 0;
              color: #02d9f5;
              font-size: 18px;
              font-family: "JDZY";

              display: flex;
              p {
                margin: auto 0;
                color: #999999;
                font-size: 14px;
                font-family: "JDZY";
              }
            }
          }
          span {
            margin: auto 0;
            color: #ffffff;
            font-size: 18px;
            font-family: "JDZY";

            float: right;
          }
        }
      }
      .minemaps-center-list-bottom {
        display: flex;
        justify-content: space-between;
        position: relative;
        .back-img1 {
          width: 100%;
        }
        .back-img2 {
          background: url("../../../assets/img/jijia-back-syq.png") no-repeat;
          background-size: 100% 100%;

          position: absolute;
          top: 100px;
          left: 15%;

          width: 100px;
          height: 100px;
        }
        /deep/.el-button {
          position: absolute;
          right: 150px;
          top: 50%;

          background: url("../../../assets/img/camp-btn-back-conf.png")
            no-repeat;
          background-size: 100% 100%;
          color: #ffffff;
          margin: auto 0;
          padding: 0 0;
          width: 100px;
          height: 30px;
          line-height: 30px;
        }
        .withdraw {
          position: absolute;
          right: 150px;
          top: 60%;

          background: url("../../../assets/img/min-wit.png") no-repeat;
          background-size: 100% 100%;
          border: none;
          color: #ffffff;
          margin: auto 0;
          // padding: 0 30px;
          height: 30px;
          line-height: 30px;
        }
        .start {
          background: url("../../../assets/img/min-start.png") no-repeat;
          background-size: 100% 100%;
          border: none;
        }
        .stop {
          background: url("../../../assets/img/min-stop.png") no-repeat;
          background-size: 100% 100%;
          border: none;
        }
      }
    }
    .minemaps-center-text {
      text-align: center;
      margin: 400px auto;

      color: #ffffff;
      font-size: 24px;
      font-family: "JDZY";
    }
  }
}

</style>